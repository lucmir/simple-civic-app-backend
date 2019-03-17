const civicSip = require('civic-sip-api');

class TokenRequester {
  constructor(appId, appSecret, appPrivateKey, sipApiEnv = 'dev') {
    this.civicClient = civicSip.newClient({
      appId,
      appSecret,
      prvKey: appPrivateKey,
      env: sipApiEnv,
    });
  }

  getEphemeralToken() {
    return this.civicClient.getEphemeralToken();
  }
}

module.exports = TokenRequester;
