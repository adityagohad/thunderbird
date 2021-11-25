var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'thunderbird';

const sd = require('../public/data/data.js')

const moment = require('moment')


const initDB = function (callback) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

router.get('/exercises/:id', function (req, res, next) {
    console.log(req.params.id);
    if (req.params.id == "all") {
        res.send(JSON.stringify(sd.exercises));
        client.close();
    } else {
        initDB(async function (db, client) {
            var tickers = sd.exercises.find(exercise => exercise.id == req.params.id).stocks.map(x => x.ticker);
            const collection = db.collection('candles');
            const x = await Promise.all(tickers.map((ticker) => {
                return collection.find({ ticker }).sort({ time: 1 }).limit(4).toArray();
            }))
            res.end(JSON.stringify(x));
            client.close();
        })
    }
});

router.get('/update', function (req, res, next) {
    initDB(async function (db, client) {
        var tickers = sd.exercises.find(exercise => exercise.id == req.query.exerciseId).stocks.map(x => x.ticker);
        const collection = db.collection('candles');
        const x = await Promise.all(tickers.map((ticker) => {
            return collection.find({ $and: [{ ticker: ticker }, { "time": { $lt: +req.query.exerciseTime } }] }).sort({ time: -1 }).limit(1).toArray();
        }))
        res.end(JSON.stringify(x));
        client.close();
    })

});

router.get('/candle', function (req, res, next) {
    initDB(function (db, client) {
        findCandles(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
});

router.get('/lol', function (req, res, next) {
    initDB(function (db, client) {
        findDocuments(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
});


const findDocuments = function (db, ticker, callback) {
    const collection = db.collection('candles');
    collection.find().toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};

const findCandles = function (db, req, callback) {
    const collection = db.collection('candles');
    collection.find({ $and: [{ ticker: req.query.ticker }, { "time": { $lt: +req.query.exerciseTime } }] }).sort({ time: 1 }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log(req.query.exerciseTime);
        var day = moment.unix(req.query.exerciseTime / 1000).utcOffset(0).format("D");
        var returndata = [];
        for (i = docs.length - 1; i >= 0; i--) {
            if (day != moment.unix(docs[i].time / 1000).utcOffset(0).format("D")) break;
            else returndata.push(docs[i])
        }
        //console.log(returndata);
        callback(returndata.reverse());
    });
};


module.exports = router;
