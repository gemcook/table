const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const typescript = require('rollup-plugin-typescript2');

// Rollup common settings
const external = ['react', 'react-dom', 'semantic-ui-react'];
const targetDir = './src';
const input = targetDir + '/index.ts';

// Rollup config for build
const buildConfig = {
  input,
  external,
  plugins: [
    {
      name: 'clean lib dir',
      buildStart: async () => {
        const libPath = './lib';
        const exists = await fs.pathExists(libPath);
        if (exists) {
          fs.emptyDirSync(libPath);
        }
      },
      buildEnd: err => {
        if (err) {
          throw err;
        }
      },
    },
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      // Node.js の fs, path 等のモジュールを bundle 対象外にする
      preferBuiltins: false,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/rc-select/node_modules/prop-types/index.js': [
          'string',
          'func',
          'node',
          'oneOfType',
          'arrayOf',
          'any',
          'bool',
          'object',
          'number',
          'shape',
        ],
        'node_modules/@gemcook/pagination/lib/index.js': ['Pagination'],
      },
    }),
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {node: 'current'},
            corejs: 3,
            useBuiltIns: 'usage',
            loose: true,
            modules: false,
          },
        ],
        ['@babel/preset-react', {useBuiltIns: true}],
        '@babel/preset-typescript',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
          },
        ],
        ['@babel/plugin-proposal-private-methods', {loose: true}],
      ],
    }),
    postcss({
      extensions: ['.css', '.scss'],
      extract: 'lib/styles/index.css',
    }),
    {
      name: 'sync scss',
      buildEnd: err => {
        if (err) {
          throw err;
        }

        fs.copySync('./src/styles', './lib/styles', {
          dereference: true,
        });
      },
    },
  ],
  output: {
    dir: './lib',
    format: 'umd',
    name: 'Table',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'semantic-ui-react': 'SemanticUiReact',
    },
  },
};

// Rollup config for type definitions
const tsdConfig = {
  external: [...external, 'react-table', 'classnames', '@gemcook/pagination'],
  input,
  plugins: [
    postcss({
      extensions: ['.css', '.scss'],
    }),
    typescript({
      tsconfigOverride: {include: [targetDir]},
      typescript: require('typescript'),
    }),
  ],
  output: {
    dir: './lib/@types',
    format: 'cjs',
  },
};

export default [buildConfig, tsdConfig];
