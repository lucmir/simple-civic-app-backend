const civicSip = require('civic-sip-api');
const TokenRequester = require('./../../tokenRequester');

const ephemeralToken = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMzliZDAxNC02NWViLTRjN2EtYmQxMC1hZmU4MDk0N2MzYTIiLCJpYXQiOjE1NTI2NTQwMzcuMDg2LCJleHAiOjE1NTI2NTU4MzcuMDg2LCJpc3MiOiJjaXZpYy1zaXAtaG9zdGVkLXNlcnZpY2UiLCJhdWQiOiJodHRwczovL2FwaS5jaXZpYy5jb20vc2lwLyIsInN1YiI6eyJhcHBJZCI6IlRKMjlIbGdWXyIsInBhcnRuZXJJZCI6IkZybUU4R01JYSJ9LCJkYXRhIjpudWxsfQ.3rEuwAeSWSRiA4fNE00MlT0Vz0yhFGOZjuGfKCOiI85WPiW2S-NLcEr6Ss-3dHghJWjFr_7-C2_nZFGhkM1b3A';

const mockCivicClient = () => {
  const civicClientMock = jest.fn();
  civicClientMock.getEphemeralToken = () => Promise.resolve(ephemeralToken);
  return civicClientMock;
};

const mockCivicClientFail = () => {
  const civicClientMock = jest.fn();
  civicClientMock.getEphemeralToken = () => Promise.reject(
    new Error(`Error fetching ephemeral token`)
  );
  return civicClientMock;
};

describe('TokenRequester', () => {
  let tokenRequester;

  beforeAll(() => {
    tokenRequester = new TokenRequester('ABC123', 'secret', 'prvtKey');
  });

  it('Should init TokenRequester', () => {
    expect(tokenRequester).toBeDefined();
  });

  it('Should return a valid jwt token', async (done) => {
    tokenRequester.civicClient = mockCivicClient();
    const token = await tokenRequester.getEphemeralToken();
    expect(token).toBe(ephemeralToken);
    done();
  });

  it('Should return thrown exception if request fails', async (done) => {
    tokenRequester.civicClient = mockCivicClientFail();
    await expect(tokenRequester.getEphemeralToken()).rejects.toThrow();
    done();
  });
});
