# Image app with Express, MongoDB and React

This project features an image application. Users can view images, and give likes to images. When clicking on an image, the users can also comment on the images.

The application consists of three microservices, each located in its own folder. In the `mongo` folder there is a [Mongo](https://www.mongodb.com/) database containing image related data, and the `backend` folder has an [Express](https://expressjs.com/) server which is the backend through which image data is served. The `client` folder contains the front end code written in [React](https://www.mongodb.com/). Containers for all services are instantiated with [Docker](docker.com/) using [Docker Compose](https://github.com/docker/compose).

In addition there is a mongo-seed microservice, which starts a temporary container whose only task is to populate the mongo database and then quit.

## Setup

Prepare an `.env` file as described in the [section on environment variables](#environment-variables). Then run

    docker-compose build

to build the containers. Start the Docker Compose network in the folder with the `docker-compose.yml` file with

    docker compose up

Shut down the network by running in the same folder

    docker compose down

## Environment variables

The following environment variables need to be set up in a `.env` file located in the project root. When the application is started with Docker Compose, the variable values for the different microservices are set in `docker-compose.yml` in the `environment` field.

|Environment variable name|
|-------------------------|
|MONGO_URI|
|MONGO_INITDB_DATABASE|
|MONGO_INITDB_ROOT_USERNAME|
|MONGO_INITDB_ROOT_PASSWORD|
|CLIENT_HOST|
|CLIENT_PORT|
|BACKEND_PORT|
|BACKEND_LOG_LEVEL|

## Ports

Ports used by the different microservices

| Microservice | Port |
|--------------|------|
| client | 3002 |
| mongo | 27017 |
| backend | 3000 |

## Troubleshooting

If volumes are set in `docker-compose.yml`, then in `Dockerfile` the workdir needs to be a named directory. Having `/` is not enough. This workdir should also be the volumes destination in `docker-compose.yml`.

If the web client is locally run, then `localhost` can be used, otherwise if it is run in the docker compose, then host `0.0.0.0` is needed. This accepts connections outside the docker network. 0.0.0.0 is used as a default bridge on network cards

If the error `regeneratorruntime is not defined` is given in the browser console, install `@babel/plugin-transform-runtime` and `@babel/runtime`.

To stop and restart a single container without restarting the whole docker-compose network, do

    docker-compose up -d --force-recreate --no-deps --build <service name>

where service name is the name of the service in the `docker-compose.yml` file.

## Credits

The client application is an updated version of the application built in Wes Bos' Redux course([github](https://github.com/wesbos/Learn-Redux) and [videos](https://www.youtube.com/watch?v=hmwBow1PUuo&list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy)). Images are also from his application.
