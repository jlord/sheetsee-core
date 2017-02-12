var test = require('tape')

var sheetseeCore = require('../index.js')
var data = require('./data.json')

test('getKeywordCount', function (t) {
  t.plan(1)
  var result = sheetseeCore.getKeywordCount(data, 'Cat')
  t.equal(result, 3, 'returns how many times word occurs')
})

test('getKeyword', function (t) {
  t.plan(2)
  var result1 = sheetseeCore.getKeyword(data, 'Liza')
  var result2 = sheetseeCore.getKeyword(data, 'Banana')
  var expected = [{'Animal': 'Cat', 'Name': 'Liza', 'Rating': '10'}]
  t.deepEquals(result1, expected, 'returns arrray of rows with matching keyword')
  t.equals(result2, 'no matches', "returns 'no matches' with no match")
})

test('getColumnTotal', function (t) {
  t.plan(1)
  var result = sheetseeCore.getColumnTotal(data, 'Rating')
  t.equals(result, 44, 'returns sum of numbers in column')
    // TODO Test what happens when there are no numbers in column
    // TODO Test when there is a mix of numbers and non-numbers in column
})

test('getColumnAverage', function (t) {
  t.plan(1)
  var result = sheetseeCore.getColumnAverage(data, 'Rating')
  t.equals(result, 8.8, 'returns average of numbers in column')
})

test('getMax', function (t) {
  t.plan(2)
  var result1 = sheetseeCore.getMax(data, 'Rating')
  var expected1 = [{'Animal': 'Cat', 'Name': 'Liza', 'Rating': '10'}, {'Animal': 'Dog', 'Name': 'Boo', 'Rating': '10'}]
  t.deepEquals(result1, expected1, 'returns rows with the higest value in column')
  var result2 = sheetseeCore.getMax(data, 'Animal')
  var expected2 = []
  t.deepEquals(result2, expected2, 'returns empty array for column with no numbers')
})

test('getMin', function (t) {
  t.plan(2)
  var result1 = sheetseeCore.getMin(data, 'Rating')
  var expected1 = [{'Animal': 'Cat', 'Name': 'Trisana', 'Rating': '7'}]
  t.deepEquals(result1, expected1, 'returns rows with the lowest value in column')
  var result2 = sheetseeCore.getMin(data, 'Animal')
  var expected2 = []
  t.deepEquals(result2, expected2, 'returns empty array for column with no numbers')
})

test('getMatches', function (t) {
  t.plan(1)
  var result = sheetseeCore.getMatches(data, '10', 'Rating')
  var expected = [{'Animal': 'Cat', 'Name': 'Liza', 'Rating': '10'}, {'Animal': 'Dog', 'Name': 'Boo', 'Rating': '10'}]
  t.deepLooseEqual(result, expected, 'returns rows with matching cell in column')
})

// TODO Fix and test deepcopy

test('deepCopy', function (t) {
  t.plan(1)
  var result = sheetseeCore.deepCopy(data[0])
  var expected = { Animal: 'Cat', Name: 'Liza', Rating: '10' }
  t.deepEquals(result, expected, 'returns object with frequcency of item in column')
})

test('getOccurance', function (t) {
  t.plan(1)
  var result = sheetseeCore.getOccurance(data, 'Animal')
  var expected = {Cat: 3, Dog: 2}
  t.deepLooseEqual(result, expected, 'returns object with frequcency of item in column')
})

// TODO what is this supposed to do lol
test('makeColorArrayOfObject', function (t) {
  t.plan(1)
  var result = sheetseeCore.makeColorArrayOfObject(data, ['#fff', '#333'], 'Animal')
  var expected = [ { Animal: '0', hexcolor: '#333', units: { Animal: 'Cat', Name: 'Liza', Rating: '10' } }, { Animal: '1', hexcolor: '#fff', units: { Animal: 'Dog', Name: 'Boo', Rating: '10' } }, { Animal: '2', hexcolor: '#333', units: { Animal: 'Dog', Name: 'Sam', Rating: '9' } }, { Animal: '3', hexcolor: '#fff', units: { Animal: 'Cat', Name: 'Snowy', Rating: '8' } }, { Animal: '4', hexcolor: '#333', units: { Animal: 'Cat', Name: 'Trisana', Rating: '7' } } ]
  t.deepLooseEqual(result, expected, 'not sure yet what this is for')
})

// TODO what is this supposed to do lol
test('makeArrayOfObject', function (t) {
  t.plan(1)
  var result = sheetseeCore.makeArrayOfObject(data)
  var expected = [ { label: '0', units: { Animal: 'Cat', Name: 'Liza', Rating: '10' } }, { label: '1', units: { Animal: 'Dog', Name: 'Boo', Rating: '10' } }, { label: '2', units: { Animal: 'Dog', Name: 'Sam', Rating: '9' } }, { label: '3', units: { Animal: 'Cat', Name: 'Snowy', Rating: '8' } }, { label: '4', units: { Animal: 'Cat', Name: 'Trisana', Rating: '7' } } ]
  t.deepLooseEqual(result, expected, 'not sure yet what this is for')
})
