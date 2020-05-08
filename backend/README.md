# Backend server

Basic [Express](https://expressjs.com/) server which connects to a MongoDB server and fetches data from it.

## Setup

The dependencies are listed in `package.json` and the can be installed with

    npm i

The server can be started with

    node src/server.js

or

    npm run start

## Development setup

Install Nodemon globally with

    npm install nodemon -g

Then the server can be started with

    npm run dev

The server will then be restarted whenever a change is made to the source code.

## Logging

The backend uses [`pino`](https://getpino.io) for logging.
