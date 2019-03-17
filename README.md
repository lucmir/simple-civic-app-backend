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
export CIVIC_APP_ID=<civic-app-id>
export CIVIC_APP_SECRET=<civic-app-secret>
export CIVIC_APP_PRIVATE_KEY=<civic-app-private-key>
npm start
```

Running tests:
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
docker run -e CIVIC_APP_ID=<civic-app-id> -e CIVIC_APP_SECRET=<civic-app-secret> -e CIVIC_APP_PRIVATE_KEY=<civic-app-private-key> simple-civic-app-backend
```