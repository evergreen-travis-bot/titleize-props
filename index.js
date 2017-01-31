'use strict'

const reduce = require('lodash.reduce')
const urlRegex = require('url-regex')
const titleize = require('titleize')

const getValue = (value) => isTitle(value) ? titleize(value) : value
const isTitle = (str) => isString(str) && !isUrl(str)
const isString = (value) => typeof value === 'string'
const isUrl = (str) => urlRegex().test(str)

function titleizeProps (obj, fn) {
  obj = obj || {}
  fn = fn || getValue

  return reduce(obj, function (acc, value, key) {
    acc[key] = fn(value)
    return acc
  }, {})
}

module.exports = titleizeProps
