const express = require('express');
const config = require('config');
const TokenRequester = require('./tokenRequester');

const app = express();
const port = 3000;
const tokenRequester = new TokenRequester(
  config.get('civicApp.id'),
  config.get('civicApp.secret'),
  config.get('civicApp.privateKey'),
  config.get('sipApiEnv')
);

// routes
app.get('/', (req, res) => res.send('Simple Civic app backend'));

app.get('/ephemeralToken', (req, res) => {
  tokenRequester.getEphemeralToken().then((ephemeralToken) => {
    res.status(200).send({
      ephemeralToken,
    });
  }).catch((error) => {
    console.log(error);
    res.status(500).send({
      error: error.toString()
    });
  });
});

// app start up
app.listen(port, () => {
  console.log(`Simple Civic App Backend listening on port ${port}!`);
  console.log('Request a token: GET /ephemeralToken\n');
});
