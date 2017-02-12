// TODO this module doesn't use ich but other parts of sheetsee do,
// even though this is more, maybe best to add it in the CLI module sheetsee
var ich = require('icanhaz')
module.exports.ich = ich

function getKeywordCount (data, keyword) {
  // Returns number of times keyword occurs anywhere in the data
  var group = []
  data.forEach(function (d) {
    for (var key in d) {
      var value = d[key].toString().toLowerCase()
      if (value.match(keyword.toLowerCase())) group.push(d)
    }
  })
  return group.length
}

function getKeyword (data, keyword) {
  // Returns an array of rows that contain the keyword
  var group = []
  data.forEach(function (d) {
    for (var key in d) {
      var value = d[key].toString().toLowerCase()
      if (value.match(keyword.toLowerCase())) group.push(d)
    }
  })
  // TODO do you want to return a string or an array?
  if (group.length === 0) return 'no matches'
  return group
}

function getColumnTotal (data, column) {
  // Returns the sum of a column of numbers
  // TODO reject cells that aren't numbers
  var total = []
  data.forEach(function (d) {
    if (d[column] === '') return
    total.push(+d[column])
  })
  return total.reduce(function (a, b) {
    return a + b
  })
}

function getColumnAverage (data, column) {
  var total = getColumnTotal(data, column)
  var average = total / data.length
  return average
}

function getMax (data, column) {
  // returns rows with the higest value in column
  // TODO FIX
  var result = []
  data.forEach(function (element) {
    if (result.length === 0) return result.push(element)
    else {
      if (element[column].valueOf() > result[0][column].valueOf()) {
        result.length = 0
        return result.push(element)
      }
      if (element[column].valueOf() === result[0][column].valueOf()) {
        return result.push(element)
      }
    }
  })
  return result
}

function getMin (data, column) {
  var result = []
  data.forEach(function (element) {
    if (result.length === 0) return result.push(element)
    else {
      if (element[column].valueOf() < result[0][column].valueOf()) {
        result.length = 0
        return result.push(element)
      }
      if (element[column].valueOf() === result[0][column].valueOf()) {
        return result.push(element)
      }
    }
  })
  return result
}

// TODO /s/category/column
// out of the data, filter something from a category
function getMatches (data, filter, category) {
  var matches = []
  data.forEach(function (element) {
    var projectType = element[category].toString().toLowerCase()
    if (projectType === filter.toLowerCase()) matches.push(element)
  })
  return matches
}

// TODO maybe remove this all together
function mostFrequent (data, category) {
  // this now maps to getOccurance
  return getOccurance(data, category)
}

// thank you! http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/
function deepCopy (obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    var out = []
    var i = 0
    var len = obj.length

    for (; i < len; i++) {
      // TODO avoid callee
      out[i] = arguments.callee(obj[i])
    }
    return out
  }
  if (typeof obj === 'object') {
    var out = {}
    var i
    for (i in obj) {
      // TODO avoid callee
      out[i] = arguments.callee(obj[i])
    }
    return out
  }
  return obj
}

// This is same as frequency just formatter better
function getOccurance (data, category) {
  var occuranceCount = {}
  for (var i = 0; i < data.length; i++) {
    if (!occuranceCount[data[i][category]]) {
      occuranceCount[data[i][category]] = 0
    }
    occuranceCount[data[i][category]]++
  }
  return occuranceCount
  // returns object, keys alphabetical
}

function makeColorArrayOfObject (data, colors, category) {
  var category = category
  var keys = Object.keys(data)
  var counter = 1
  var colorIndex
  return keys.map(function (key) {
    if (keys.length > colors.length || keys.length <= colors.length) {
      colorIndex = counter % colors.length
    }
    var h = {units: data[key], hexcolor: colors[colorIndex]}
    h[category] = key
    counter++
    colorIndex = counter
    return h
  })
}

function makeArrayOfObject (data) {
  var keys = Object.keys(data)
  return keys.map(function (key) {
    // var h = {label: key, units: data[key], hexcolor: "#FDBDBD"}
    var h = {label: key, units: data[key]}
    return h
  })
}

module.exports.getKeywordCount = getKeywordCount
module.exports.getKeyword = getKeyword
module.exports.getColumnTotal = getColumnTotal
module.exports.getColumnAverage = getColumnAverage
module.exports.getMax = getMax
module.exports.getMin = getMin
module.exports.getMatches = getMatches
module.exports.deepCopy = deepCopy
module.exports.mostFrequent = mostFrequent
module.exports.getOccurance = getOccurance
module.exports.makeArrayOfObject = makeArrayOfObject
module.exports.makeColorArrayOfObject = makeColorArrayOfObject
