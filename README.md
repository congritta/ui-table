# @congritta-ui/table

This is table React component and part of [Congritta UI](https://ui.congritta.com)

Contains two components to create responsive or not responsive, row tables

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
1. Install `@congritta-ui/data-rows` if you didn't it yet. (More info at: http://ui.congritta.com/docs/data-rows);
2. Install `@congritta-ui/table`;

Add

```javascript
// You can import it only once at entry point file of your project
import '@congritta-ui/table/dist/table.css';

import {ResponsiveTable, NotResponsiveTable} from '@congritta-ui/table';
```

into your code.

You can restyle table by your CSS. Use regular table selectors

## How to use

## Not responsive table

Example:

```jsx
<NotResponsiveTable>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr className='_isHoverable'>
        <td>Alex</td>
        <td>23</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Alex</td>
        <td>23</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Alex</td>
        <td>23</td>
        <td>Male</td>
      </tr>
    </tbody>
  </table>
</NotResponsiveTable>
```

You can operate with table as you want. No limitations.

You can set `style={{minWidth: 1000}}` property to `<table>` element

### Responsive table

Example:

```jsx
<ResponsiveTable
  headers={['Name', 'Age', 'Gender']}
  rows={[
    ['Alex', '24', 'Male'],
    ['Alex', '24', 'Male'],
    ['Alex', '24', 'Male']
  ]}
  mediaWidth={1000}
/>
```

#### Props for ResponsiveTable component

| Prop name                     | Description                                                                                   | Is Required | Default value |
|-------------------------------|-----------------------------------------------------------------------------------------------|-------------|---------------|
| headers                       | Array of strings. They are table headers                                                      | true        |               |
| rows                          | Array of arrays of strings. They are table data                                               | true        |               |
| mediaWidth                    | Minimal screen width to show desktop table. Otherwards, mobile version of table will be shown | true        |               |
| onRowClick                    | Callback function if user clicks on the row                                                   | false       |               |
| wrapperClassName              | className string for table wrapper (for restyling them with your CSS)                         | false       |               |
| additionalMobileCellClassName | className string for mobile cells (for restyling them with your CSS)                          | false       |               |
