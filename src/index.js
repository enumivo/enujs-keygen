const Keystore = require('./keystore')
const Keygen = require('./keygen')

const ecc = require('enujs-ecc')

module.exports = {
  Keystore,
  Keygen,
  modules: {
    ecc
  }
}