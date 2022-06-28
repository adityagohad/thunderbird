const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config()

// const url = process.env.DB_URL;
// const dbName = process.env.DB_NAME;
const url = "mongodb+srv://adityagohad:xyzzyspoonS1@cluster0.u2lym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = "thunderbird";

const initDB = function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

module.exports = { initDB }