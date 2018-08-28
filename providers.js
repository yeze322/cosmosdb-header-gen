const { HMAC } = require('fast-sha256');

function provideUTCDate() {
  return (new Date()).toUTCString();
}

function provideHMAC(keyBytes, valueBytes) {
  return new HMAC(keyBytes).update(valueBytes).digest();
}

module.exports = {
  provideUTCDate,
  provideHMAC,
}