'use strict'

const winston = require('winston')
winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, {
  'timestamp': true,
  'colorize': true
})

module.exports = winston