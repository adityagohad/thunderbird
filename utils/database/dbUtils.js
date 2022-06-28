const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config()

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

const initDB = function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

module.exports = { initDB }