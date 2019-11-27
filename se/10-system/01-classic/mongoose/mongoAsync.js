const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'mytest'

async function main() {
  // Use connect method to connect to the server
  var client = await MongoClient.connect(url)
  console.log("Connected successfully to server")
  const db = client.db(dbName)
  const collection = db.collection('documents')
  var iresult = await collection.insertMany([ {a : 1}, {a : 2}, {a : 3} ])
  console.log("iresult=", iresult)
  var docs = await collection.find({}).toArray()
  console.log('docs=', docs)
  client.close()
  return docs
}

main().catch(function (error) {
  console.log('error=', error)
})
