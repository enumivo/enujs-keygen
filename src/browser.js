const Keystore = require('./keystore')
const Keygen = require('./keygen')
const ecc = require('enujs-ecc')

const createHistory = require('history').createBrowserHistory
const config = require('./config')

config.history = createHistory()
config.localStorage = localStorage

module.exports = {
  Keystore,
  Keygen,
  modules: {
    ecc
  }
}
