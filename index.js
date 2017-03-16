// Returns number of times keyword occurs anywhere in the data
// data: array of objects, keyword: string
function getKeywordCount (data, keyword) {
  var group = []
  data.forEach(function (d) {
    for (var key in d) {
      var value = d[key].toString().toLowerCase()
      if (value.match(keyword.toLowerCase())) group.push(d)
    }
  })
  return group.length
}

// Returns an array of rows that contain the keyword
// data: array of objects, keyword: string
function getKeyword (data, keyword) {
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

// Returns the sum of a column of numbers
// data: array of objects, column: string
function getColumnTotal (data, column) {
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

// Returns the average of a column of numbers
// data: array of objects, column: string
function getColumnAverage (data, column) {
  var total = getColumnTotal(data, column)
  var average = total / data.length
  return average
}

// Returns rows with the higest value in column
// data: array of objects, column: string
function getMax (data, column) {
  var result = []
  data.forEach(function (element) {
    // We are checking that the element is a number
    if (!parseInt(element[column].valueOf())) return
    if (result.length === 0) return result.push(element)

    var currentMax = parseInt(result[0][column].valueOf())
    var comparing = parseInt(element[column].valueOf())

    if (comparing < currentMax) return
    if (comparing === currentMax) return result.push(element)
    if (comparing > currentMax) {
      result = []
      return result.push(element)
    }
  })
  // It will return an empty array if there are
  // no numbers in the column specified
  return result
}

// Returns rows with the lowest value in column
// data: array of objects, column: string
function getMin (data, column) {
  var result = []
  data.forEach(function (element) {
    // We are checking that the element is a number
    if (!parseInt(element[column].valueOf())) return
    if (result.length === 0) return result.push(element)

    var currentMax = parseInt(result[0][column].valueOf())
    var comparing = parseInt(element[column].valueOf())

    if (comparing > currentMax) return
    if (comparing === currentMax) return result.push(element)
    if (comparing < currentMax) {
      result = []
      return result.push(element)
    }
  })
  // It will return an empty array if there are
  // no numbers in the column specified
  return result
}

// Returns array of rows with elements in the column that match the filter
// data: array of objects, filter: string, column: string
function getMatches (data, filter, column) {
  var matches = []
  data.forEach(function (element) {
    var projectType = element[column].toString().toLowerCase()
    if (projectType === filter.toLowerCase()) matches.push(element)
  })
  return matches
}

// TODO maybe remove this all together
function mostFrequent (data, category) {
  // this now maps to getOccurance
  return getOccurance(data, category)
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

module.exports.getKeywordCount = getKeywordCount
module.exports.getKeyword = getKeyword
module.exports.getColumnTotal = getColumnTotal
module.exports.getColumnAverage = getColumnAverage
module.exports.getMax = getMax
module.exports.getMin = getMin
module.exports.getMatches = getMatches
module.exports.mostFrequent = mostFrequent // maps to getOccurance
module.exports.getOccurance = getOccurance
