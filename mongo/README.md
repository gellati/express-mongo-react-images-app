# Mongo database

Outline for Mongo database running in a docker container and containing image data. The images themselves are in the client services public folder. The database is seeded through the mongo-seed service.

Build the container image with

    docker build -t mongo .

Start the container with

    docker run -p 27018:27017 --name mongo

Stop the container with

    docker stop <container-name>

List all docker images in the system

    docker ps -a

Clear all images from the cache

    docker system prune -a

Use the `-f` flag if you don't want to be prompted about your actions.

## Interacting with the database container

Log into the database container with

    docker exec -it mongo bash

Inside the container, launch the mongo shell client

    mongo

List the databases

    show dbs

Select the database to use

    use <databasename>

Show collections in the database

    show collections

Show collection data

    db.<collectionname>.find()

Quit the database shell

    quit()
