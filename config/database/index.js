const MongoClient = require('mongodb').MongoClient
var MONGO_SERVER='mongodb://localhost:27017'
var DATABASE='extracted-response-store'
var db;

MongoClient.connect(MONGO_SERVER, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }, function (err, client) {
  if (err) throw err
  console.log('DB Connected!')
  db = client.db(DATABASE)
})

module.exports = {
    saveResponse : (response)=>{
        db.collection('responses').insertOne(response, (err, result) => {
            if (err) return console.log(err)
            console.log('saved response to database')
        })
    },
    retrieveResponse: ()=>{
        db.collection('responses').find().toArray(function(err, results) {
            return results
        })
    }
}