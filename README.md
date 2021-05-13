# [@gemcook/table](https://table.storybook.gemcook.com)

---

[![npm version](https://badge.fury.io/js/%40gemcook%2Ftable.svg)](https://badge.fury.io/js/%40gemcook%2Ftable)

React Table Component.

## Installation

```shell
npm install --save @gemcook/table
```

or

```shell
yarn add @gemcook/table
```

## Usage

### SCSS

#### Import `@gemcook/table/lib/styles/index.scss` to your SCSS.

```scss
@import '~@gemcook/table/lib/styles/index';
```

### Local Pagination

#### Use 'makeLocalActive' to generate active.

```js
```

### Remote Pagination


## Example

```jsx

```


```tsx
import {Table} from '@gemcook/table'

const App: React.FC = () => {


  return (
        <Table
        current={1}
        updateCurrent={(num:number)=>{console.log("n")}} //
        disabled={false}
        loading={true}
        active={[{id: 1, name: "Apple", price: 5},{id: 2, name: "orange", price: 10},{id: 3, name: "Banana", price: 7}]}
        totalCount={30}
        pageSize={10}
        columns={[{Header: "ID", accessor: "id"}, {Header: "Name", accessor: "name"}, {Header: "Price", accessor: "price"}]}
        >
        </Table>     
         );
  }

export default App;

```

## Documentaion

### Props

* There are six required items
* For Remote Pagination, there are 8 required items

| **Parameter**      | **Type**                                    | **Required**                           | **Default**           | **Description**                          |
| :----------------- | :------------------------------------------ | :------------------------------------- | :-------------------- | :--------------------------------------- |
| active             | [any]                                       | true                                   | undefined             | Data displayed in the table              |
| columns            | ReactElement                                | true                                   | undefined             | Table columns                            |
| current            | number                                      | true                                   | undefined             | Current page number                      |
| totalCount         | number                                      | true                                   | undefined             | Maximum number of all data               |
| totalPages         | number                                      | true                                   | undefined             | Maximum number of pages (use pagination) |
| updateCurrent      | (current: number) => void                   | true                                   | undefined             | \-                                       |
| loading            | boolean                                     | false (Required for remote pagination) | false                 | \-                                       |
| disabled           | boolean                                     | false (Required for remote pagination) | false                 | Set 'pagination' to disabled             |
| sortState          | {key: string, order: enum}                  | false                                  | undefined             | Enum: `asc` `desc`                       |
| updateSortState    | (sortState: object) => void                 | flase                                  | undefined             | \-                                       |
| pageSize           | number                                      | false                                  | 10                    | Number of rows in table                  |
| updatePageSize     | (current: number, pageSize: number) => void | false                                  | undefined             | \-                                       |
| noDataMessage      | string                                      | false                                  | 'Data does not exist' | \-                                       |
| outline            | boolean                                     | false                                  | true                  | Whether to display the outer frame       |
| showPagination     | boolean                                     | false                                  | true                  | Whether to display pagination-           |
| paginationPosition | string                                      | false                                  | right                 | Position of placement of pagination      |
| showSizeChanger    | boolean                                     | false                                  | false                 | \-                                       |
| scrollTop          | boolean                                     | false                                  | false                 | \-                                       |

### Override Styles

```scss
$table__main-color: #fa6681 !default;
$table__link-color: #fa6681 !default;
$table__bg-color: white !default;
$table__sort-default-color: #808b97 !default;
$table__thead-border-color: #e9ecef !default;
$table__th-text-color: #7d7d7d !default;
$table__td-text-color: #7d7d7d !default;
$table__nodata-text-color: #404b69 !default;
```

### API

#### pagination integration

Confirm the API of pagination from this link.

* https://github.com/gemcook/pagination

## License

@gemcook/table is released under the MIT license.
