const { HMAC } = require('fast-sha256');

function provideUTCDate() {
  return (new Date()).toUTCString();
}

function provideHMAC(keyBytes, valueBytes) {
  return new HMAC(keybuffer).update(valuebuffer).digest();
}

module.exports = {
  provideUTCDate,
  provideHMAC,
}