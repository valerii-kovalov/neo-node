'use strict'

const winston = require('./winston')

const NATS_HOST = process.env.NATS_HOST // like nats.example.com:4222
const NATS_USER = process.env.NATS_USER
const NATS_PASS = process.env.NATS_PASS
const NATS_NAME = process.env.NATS_NAME // the client's name

let natsOpts = {
  maxReconnectAttempts: -1,
  reconnectTimeWait: 2000,
  waitOnFirstConnect: true,

  url: `nats://${NATS_HOST}`,
  json: true
}

if (NATS_NAME) {
  natsOpts.name = NATS_NAME
}

if (NATS_USER) {
  natsOpts.user = NATS_USER
}

if (NATS_PASS) {
  natsOpts.pass = NATS_PASS
}

const nats = require('nats').connect()

nats.on('error', (err) => {
	winston.error(err)
})

nats.on('connect', (nc) => {
	winston.info(`[NATS] Connected to ${nc.currentServer.url.host}`)
})

nats.on('disconnect', () => {
	winston.info('[NATS] Disconnect')
})

nats.on('reconnecting', () => {
	winston.info('[NATS] Reconnecting')
})

nats.on('reconnect', (nc) => {
	winston.info(`[NATS] Reconnect ${nc.currentServer.url.host}`)
})

nats.on('close', () => {
	winston.info('[NATS] Close')
})

module.exports = nats
