let MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017/mongotest', {useNewUrlParser:true}, function (err, db) {
  console.log('Connected to MongoDB!')
  db.close()
})