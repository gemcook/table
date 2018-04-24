/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import TableStories from './TableStories.jsx';
import LocalDataStories from './LocalDataStories.jsx';
import RemoteDataStories from './RemoteDataStories.jsx';

import './../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

TableStories();
LocalDataStories();
RemoteDataStories();
