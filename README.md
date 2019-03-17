# Simple Civic app Backend
Sample backend for a generic Civic app

## Usage

### NPM

Installing:
```
npm install
```

Running:
```
export CIVIC_APP_ID="<civic-app-id>"
export CIVIC_APP_SECRET="<civic-app-secret>"
export CIVIC_APP_PRIVATE_KEY="<civic-app-private-key>"
export SIP_API_ENV="<dev|prod>"
npm start
```
The application will be available on `http://localhost:3000`.

Testing:
```
npm test
```

### Docker

In order to run the project with Docker it is required to build the image first:
```
docker build . -t simple-civic-app-backend
```

With the image built, the following command will start the application:
```
docker run -e CIVIC_APP_ID="<civic-app-id>" \
           -e CIVIC_APP_SECRET="<civic-app-secret>" \
           -e CIVIC_APP_PRIVATE_KEY="<civic-app-private-key>" \
           -e SIP_API_ENV="<dev|prod>" \
           -p 3000:3000
           simple-civic-app-backend
```

The application will be available on `http://localhost:3000`.

To run in a different port, change the `-p` parameter to `-p <port>:3000`.


### Requesting a token

If the app configuration is valid (ID, secret, private key and SIP API environment), a token can be requested as follows:
```
GET /ephemeralToken
```