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

test('getOccurance', function (t) {
  t.plan(1)
  var result = sheetseeCore.getOccurance(data, 'Animal')
  var expected = {Cat: 3, Dog: 2}
  t.deepLooseEqual(result, expected, 'returns object with frequcency of item in column')
})
