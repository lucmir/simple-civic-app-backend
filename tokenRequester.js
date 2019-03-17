const civicSip = require('civic-sip-api');

class TokenRequester {
  constructor(appId, appSecret, appPrivateKey) {
    this.civicClient = civicSip.newClient({
      appId: appId,
      appSecret: appSecret,
      prvKey: appPrivateKey,
    });
  }

  getEphemeralToken() {
    return this.civicClient.getEphemeralToken();
  }
}

module.exports = TokenRequester;
