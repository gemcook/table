/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Table} from '../../src';
import {makeLocalActive} from '@gemcook/pagination';
import {dummyData, dummyProps} from './dummy';
import {Default} from '../components/TableColumns';

const LocalDataStories = () => {
  storiesOf('Local data', module)
    .add(
      'default',
      withState({
        active: makeLocalActive(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(
        withInfo('default')(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
                columns={Default(dummyProps)}
                totalCount={dummyData.length}
                current={store.state.current}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'change page size',
      withState({
        active: makeLocalActive(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(
        withInfo('default')(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
                columns={Default(dummyProps)}
                totalCount={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
                showSizeChanger
                updatePageSize={(current: number, pageSize: number) => {
                  store.set({current: 1});
                  store.set({pageSize});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    1,
                    pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'scroll top',
      withState({
        active: makeLocalActive(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(
        withInfo('default')(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
                columns={Default(dummyProps)}
                totalCount={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
                scrollTop
                showSizeChanger
                updatePageSize={(current: number, pageSize: number) => {
                  store.set({current: 1});
                  store.set({pageSize});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    1,
                    pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
              />
            </div>
          );
        }),
      ),
    )
    .add(
      'sort(coming soon...)',
      withState({
        active: makeLocalActive(dummyData, 1, 10),
        current: 1,
        pageSize: 10,
      })(
        withInfo('default')(({store}) => {
          return (
            <div
              style={{
                padding: '50px',
              }}>
              <Table
                active={store.state.active}
                columns={Default(dummyProps)}
                showPagination
                totalCount={dummyData.length}
                current={store.state.current}
                pageSize={store.state.pageSize}
                updateCurrent={(current: number) => {
                  store.set({current});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    current,
                    store.state.pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
                showSizeChanger
                updatePageSize={(current: number, pageSize: number) => {
                  store.set({current: 1});
                  store.set({pageSize});
                  const nextActiveData = makeLocalActive(
                    dummyData,
                    1,
                    pageSize,
                  );
                  store.set({active: nextActiveData});
                }}
              />
            </div>
          );
        }),
      ),
    );
};

export default LocalDataStories;
