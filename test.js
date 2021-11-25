const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'thunderbird';

const data = require('./public/data/data.js');

const initDB = function (callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

//caller()

console.log(data.exercises[1].stocks.map(x => x.ticker));

function caller() {
    initDB(async function (db, client) {
        // var tis = ["ADANIPORTS", "ACC", "ADANIENT"];
        // const collection = db.collection('candles');
        // const x = await Promise.all(tis.map((ticker) => {
        //     return collection.find({ticker}).sort({time: 1}).limit(2).toArray();
        //   }))
        //   console.log(JSON.stringify(x));
        //   client.close()
        findAllCandles(db, function (data) {
            console.log(JSON.stringify(data))
            client.close();
        })
    })
}

const findAllCandles = function (db, callback) {
    const collection = db.collection('candles');
    var tis = ["ADANIPORTS", "ACC", "ADANIENT"];
    var pipeline = [
        { $match: { ticker: { $in: tis } } },
        { $sort: { "time": 1 } },
        {
            "$group": {
                _id: "$ticker",
                "candles": { "$push": '$$ROOT' },
            }
        },
        {
            "$group": {
                _id: "$ticker",
                "items": { $addToSet: { "open": "$open", "high": "$high", "low": "$low", "close": "$close" } },
            }
        },
        { $project: { items: { $slice: ["$items", 4] } } }
    ]
    collection.aggregate(pipeline).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};