// Duplicating these `requires` on gatsby-node causes error
require('source-map-support').install()
require('ts-node').register({ files: true })

module.exports = require('./src/config/gatsby-config')
