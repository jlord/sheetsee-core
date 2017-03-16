# Sheetsee-core

This is the core module in sheetsee and is included in all builds. It contains methods for basic data manipulation you might want to do.

## Working With Your Data

Sheetsee pairs with Tabletop.js which will fetch the data from your spreadsheet and return it as an _array of objects_. You'll use these methods from Sheetsee after your data comes back to you as JSON.

## Methods

Here are the functions you can use!

### `Sheetsee.getKeywordCount(data, keyword)`

- `data` _array of objects_
- `keyword` _string_
- Returns _number_

Given your **data** and **keyword** to search by, this function returns the number of times it occurs throughout all of the data.

```js
getGroupCount(data, 'cat')
// returns a number
```

### `Sheetsee.getKeyword(data, keyword)`

- `data` _array of objects_
- `keyword` _string_
- Returns _number_

Given your **data** and a **keyword** to search by, this function returns every row which contains a match to the keyword.

```js
getKeyword(data, 'cat')
// returns array of objects
```

### `Sheetsee.getColumnTotal(data, column)`

- `data` _array of objects_
- `column` _string_
- Returns _number_

_Use only with columns of numbers_

Given your **data**  and **column** header, this function sums each cell in that column and returns the value.

```js
getColumnTotal(data, 'cuddlability')
// returns number
```

### `Sheetsee.getColumnAverage(data, column)`

- `data` _array of objects_
- `column` _string_
- Returns _number_

Given your **data**  and **column** header, this function returns the average value of every cell in the column.

```js
getColumnAverage(data, 'cuddlability')
// returns number
```

### `Sheetsee.getMin(data, column)`

- `data` _array of objects_
- `column` _string_
- Returns _array_

Given your **data**  and **column** header, this function returns an array of the rows with the lowest values within the specified column.

```js
getMin(data, 'cuddlability')
// returns array
```

### `Sheetsee.getMax(data, column)`

- `data` _array of objects_
- `column` _string_
- Returns _array_

Given your **data**  and **column** header, this function returns an array of the rows with the highest values within the specified column.

```js
getMin(data, 'cuddlability')
// returns array of objects
```

### `Sheetsee.getMatches(data, filter, column)`

- `data` _array of objects_
- `filter` _string_
- `column` _string_
- Returns _array_

Takes **data**, a **filter** term to search by within a **column** and returns every row that matches,

```JAVASCRIPT
getMatches(data, 'dog', 'kind')
// returns array of objects
// [{'name': 'coco', 'kind': 'dog'...}, {'name': 'wolfgang', 'kind': 'dog'...},{'name': 'cooc', 'kind': 'dog'...} ]
```

### `Sheetsee.getOccurance(data, column)`

- `data` _array of objects_
- `column` _string_
- Returns _object_

Takes **data** **column** header and returns an object with key/value pairs of how often an item occurs in the column.

```JAVASCRIPT
getOccurance(data, 'kind')
// Returns an object
// {'dog': 3, 'cat': 3}
```

### Math

Don't Forget JavaScript Math! Create variables that are the sums, differences, multiples and so forth of others. Lots of info on that [here on MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math).

```js
var profit09 = Sheetsee.getColumnTotal(data, '2009')
var profit10 = Sheetsee.getColumnTotal(data, '2010')
var difference = profit09 - profit10
```
