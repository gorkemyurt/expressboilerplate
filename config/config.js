/*!
 * Module dependencies.
 */

var path = require('path')
var rootPath = path.resolve(__dirname + '../..')

/**
 * Expose config
 */

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/minidatabase'
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/minidatabase'
  },
  staging: {
    root: rootPath,
    db: 'mongodb://heroku_app16691067:4poq3j4f04nqsd9dtt8cjnp5l@ds031978.mongolab.com:31978/heroku_app16691067'
  },
  production: {
    root: rootPath,
    db: 'mongodb://heroku_app16691067:4poq3j4f04nqsd9dtt8cjnp5l@ds031978.mongolab.com:31978/heroku_app16691067'
  }
}