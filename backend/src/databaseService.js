const {MongoClient} = require('mongodb')
const assert = require('assert')
const logger = require('pino')

const uri = process.env.MONGO_URI
const databaseName = process.env.MONGO_INITDB_DATABASE

function databaseClient () {
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    return client
  })
}

function databaseClientClose (client) {
  client.close
}

function databaseConnection () {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

  // Connect to the MongoDB cluster
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    console.log(`uri ${uri}`)
    if (err) return console.log(err)

    // Storing a reference to the database so you can use it later
    const db = client.db(databaseName)
    logger.info(`Connected MongoDB: ${uri}`)
    logger.info(`Database: ${databaseName}`)
    listPosts()
    client.close()
    return db
  })
}

function listPosts() {
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    // Storing a reference to the database so you can use it later
    const db = client.db(databaseName)
    const array = []

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

    const callPromise = async () => {
      const result = await (promise())
      return result
    }

    promise().then(function(result) {
//      console.log(result)
      return array
    })
  })
}

async function findDocuments(db, collectionName, callback) {
  // Get the documents collection
  const collection = await db.collection(collectionName);
  // Find some documents
  console.log("Documents:")
  let items = []

  collection.find()
  .then(function(result) {
    resolve(result)
  })
}

const listDatabases = (client) => {
  const databasesList = client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

module.exports = {
  listDatabases,
  listPosts,
  databaseConnection,
  databaseClient,
  databaseClientClose
}
