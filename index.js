const {
  provideUTCDate,
  provideHMAC,
} = require('./providers');


function generateCosmosDBHeaders(method, resourceType, resourceLink, masterKey) {
  const utcDate = provideUTCDate();
  const authToken = this._generateAuthorizationToken(method, resourceType, resourceLink, utcDate, masterKey);

  return {
    'Content-Type': 'application/json',
    'Authorization': authToken,
    'x-ms-version': '2017-02-22',
    'x-ms-date': utcDate,
  };
}

function _generateAuthorizationToken(verb, resourceType, resourceLink, date, masterKey) {

  var payload = verb.toLowerCase() + "\n" +
    resourceType.toLowerCase() + "\n" +
    resourceLink + "\n" +
    date.toLowerCase() + "\n\n";

  var signature = _createBase64Signature(masterKey, payload);

  var MasterToken = "master";
  var TokenVersion = "1.0";


  return encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature);
}

function _createBase64Signature(b64Key, rawBody) {
  let body_buf = _strToArrayBuffer(rawBody);
  let key_buf = _strToArrayBuffer(atob(b64Key));
  let sig_buf = new HMAC(key_buf).update(body_buf).digest();

  let sig_raw = _bufferToString(sig_buf);
  let sig_b64 = btoa(sig_raw);

  return sig_b64;
}

function _bufferToString(wordbuf) {
  return String.fromCharCode.apply(null, wordbuf);
}

function _strToArrayBuffer(str) {
  let len = str.length;
  let bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

module.exports = {
  generateCosmosDBHeaders,
}

exports.generateCosmosDBHeaders = generateCosmosDBHeaders;