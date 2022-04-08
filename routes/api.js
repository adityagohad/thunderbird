var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb+srv://adityagohad:xyzzyspoonS1@cluster0.u2lym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//const url = 'mongodb://localhost:27017';

const dbName = 'thunderbird';

const sd = require('../public/data/data.js')

const moment = require('moment')


const initDB = function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

router.get('/exercises/:id', function (req, res, next) {
    if (req.params.id == "all") {
        res.end(JSON.stringify(sd.exercises));
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

router.get('/events/:id', function (req, res, next) {
    initDB(function (db, client) {
        findEvents(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
});

router.get('/feed/:id', function (req, res, next) {
    initDB(function (db, client) {
        findFeed(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
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

router.get('/candles/:id', function (req, res, next) {
    initDB(function (db, client) {
        findCandles(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
});

router.get('/candles/:id/:timeframe', function (req, res, next) {
    initDB(function (db, client) {
        findCandlesForTimeFrame(db, req, function (data) {
            res.end(JSON.stringify(data));
            client.close();
        })
    })
});

router.get('/info/assistedtrade/:id', function (req, res, next) {
    res.end(JSON.stringify(sd.copies[req.params.id]));
});

router.get('/quote', function (req, res, next) {
    const quotes = ["Ab meri tarah Risk se ishq hai to kood pado, ya to duboge ya udoge",
        "Emotion Mein Insaan Hamesha Galti Karta Hai?",
        "Market me sabse bada jokhim, jokhim na lene mein hai",
        "Profit dikhta hai to koi bhi Jhukta hai?",
        "Risk Hain to Ishq Hain?",
        "Old school ho ya new school, sabke syllabus mein ek subject common hota hai ? profit aur woh mera favorite subject hai",
        "Share Market Itna Gehra KuaaN Hai Jo Poore DesH Ki Paise Ki Pyaas BujHa Sakta Hai",
        "The Most valuable commodity I know of is information",
        "I Choose Rich Every F****** Time",
        "There are three ways to make a living in this business: be first, be smarter or cheat",
        "It's gonna get worse before it gets better",
        "Listen,  if you really wanna do this with your life you have to believe you're necessary and you are",
        "Greed, for lack of a better word, is good",
        "The most valuable commodity I know of is information",
        "Truth is like poetry. and people hate poetry",
        "Tell me the difference between stupid and illegal and I'll have my wife's brother arrested",
        "I Want You To Deal With Your Problems By Becoming Rich!",
        "No one can see a bubble. That's what makes it a bubble"]
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(quotes[Math.floor((Math.random() * quotes.length))]));
});


const findCandlesForTimeFrame = function (db, req, callback) {
    const collection = db.collection('candles');
    var startTime = req.query.startTime;
    var endTime = req.query.exerciseTime;
    if (req.query.startTime == undefined) {
        startTime = 0;
    }
    if (req.query.exerciseTime == undefined) {
        endTime = moment().unix() * 1000;
    }
    collection.find({ $and: [{ ticker: req.params.id }, { "time": { $lt: +endTime } }, { "time": { $gt: +startTime } }] }).sort({ time: 1 }).toArray(function (err, docs) {
        assert.equal(err, null);
        var returnData = [];
        if (req.params.timeframe == "daily") {
            var flagChar = "D";
        } else if (req.params.timeframe == "hourly") {
            var flagChar = "H";
        } else if (req.params.timeframe == "weekly") {
            var flagChar = "W";
        } else if (req.params.timeframe == "monthly") {
            var flagChar = "MM";
        } else {
            flag = "mm";
        }

        var flag = moment.unix(docs[0].time / 1000).utcOffset(0).format(flagChar);
        var generatedCandle = docs[0];
        var counter = 0;
        for (i = 0; i < docs.length; i++) {
            if (flag == moment.unix(docs[i].time / 1000).utcOffset(0).format(flagChar)) {
                if (docs[i].high > generatedCandle.high) {
                    generatedCandle.high = docs[i].high;
                }
                if (docs[i].low < generatedCandle.low) {
                    generatedCandle.low = docs[i].low;
                }
                generatedCandle.close = docs[i].close;
            } else {
                counter++;
                generatedCandle.num = counter;
                returnData.push(generatedCandle)
                flag = moment.unix(docs[i].time / 1000).utcOffset(0).format(flagChar);
                generatedCandle = docs[i];
            }
        }
        counter++;
        generatedCandle.num = counter;
        returnData.push(generatedCandle)
        callback(returnData);
    });
};

const findCandles = function (db, req, callback) {
    const collection = db.collection('candles');
    collection.find({ $and: [{ ticker: req.params.id }, { "time": { $lt: +req.query.exerciseTime } }] }).sort({ time: 1 }).toArray(function (err, docs) {
        assert.equal(err, null);
        var day = moment.unix(req.query.exerciseTime / 1000).utcOffset(0).format("D");
        var returndata = [];
        for (i = docs.length - 1; i >= 0; i--) {
            if (day != moment.unix(docs[i].time / 1000).utcOffset(0).format("D")) break;
            else returndata.push(docs[i])
        }
        callback(returndata.reverse());
    });
};

const findEvents = async function (db, req, callback) {
    const collection = db.collection('events');
    collection.find({ exerciseId: +req.params.id }).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};

const findFeed = async function (db, req, callback) {
    const collection = db.collection('feed');
    collection.find({ exerciseId: +req.params.id }).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};


module.exports = router;
