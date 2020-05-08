const express = require('express')
const {MongoClient} = require('mongodb')
const pino = require('pino')
const expressPino = require('express-pino-logger')

const databaseService = require('./databaseService')

// start the server
const app = express()
const port = process.env.BACKEND_PORT || 3000

const uri = process.env.MONGO_URI
const databaseName = process.env.MONGO_INITDB_DATABASE

const logger = pino({ level: process.env.BACKEND_LOG_LEVEL || 'info' })
const expressLogger = expressPino({ logger })

app.use(expressLogger)

// app routes
app.get('/', (request, response) => {
  logger.info({request, response})
  response.send(`connected to mongo`)
})

app.get('/database', (request, response) => {
  logger.info({request, response})
  const docs = databaseService.listPosts()
  response.json(docs)
})

app.get('/posts', (request, response) => {
    logger.info({request, response})
    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) return console.log(err)
        // Storing a reference to the database so you can use it later
        const db = client.db(databaseName)

        const promise = () => {
            return new Promise(( resolve, reject) => {
            db
            .collection('posts')
            .find()
            .toArray(function(err, data) {
                err ? reject(err) : resolve(data)
            })
            })
        }
        promise().then(function(result) {
            client.close
            response.json({'data': result})
        })
    })
})

app.get('/comments', (request, response) => {
    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) return console.log(err)
        // Storing a reference to the database so you can use it later
        const db = client.db(databaseName)

        const promise = () => {
            return new Promise(( resolve, reject) => {
            db
            .collection('comments')
            .find({}, {projection: {_id: 0}})
            .toArray(function(err, data) {
                err ? reject(err) : resolve(data)
            })
            })
        }
        promise().then(function(result) {
            client.close
            response.json({'data': result})
        })
    })
})

app.get('/name:id', (request, response) => {
    const id = request.params.id
    const initialData = {
        id: id
    }
    response.json(initialData)
})

app.get('/comments:id', (request, response) => {
    const id = request.params.id
    const initialData = {
        id: id
    }
    response.json(initialData)
})

app.get('/image:id', (request, response) => {
    const id = request.params.id
    const initialData = {
        id: id
    }
    response.json(initialData)
})

app.listen(port, () => logger.info(`Express backend server started at port ${port}...`))
