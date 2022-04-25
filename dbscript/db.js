const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const csv = require('csv-parser')
const fs = require('fs')
const moment = require('moment')
var results = [];
var eventResult = [];
var feedResult = [];
var counter = 0;

const sd = require('../public/data/data.js');

var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "NIFTYBANK", "BATA", "BERGEPAINT", "BHARTIARTL", "BRITANNIA", "CADILAHC", "CIPLA", "COALINDIA", "CRISIL", "DIVISLAB", "DMART", "EXIDEIND", "GAIL", "GODREJPROP", "GUJGASLTD", "HDFCBANK", "HEROMOTOCO", "HINDALCO", "HINDUNILVR", "ICICIBANK", "IDEA", "INFY", "IPCALAB", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL-N", "MOTHERSUMI", "NIFTY", "OBEROIRLTY", "PEL", "PIDILITIND", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEMCO", "VBL", "WIPRO", "YESBANK"];

//const uri = 'mongodb://localhost:27017';
const uri = "mongodb+srv://adityagohad:xyzzyspoonS1@cluster0.u2lym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = 'thunderbird';

const initDB = function (callback) {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        callback(db, client);
    });
}

const insertDocuments = function (db, data, callback) {
    const collection = db.collection('candles');
    collection.insertMany(data, function (err, result) {
        callback(result);
    });
};

const insertEvents = function (db, data, callback) {
    const collection = db.collection('events');
    collection.insertMany(data, function (err, result) {
        callback(result);
    });
};

const insertFeed = function (db, data, callback) {
    const collection = db.collection('feed');
    collection.insertMany(data, function (err, result) {
        callback(result);
    });
};

getAllCSVs();
//getAllEvents();
//getAllFeed();

function getAllCSVs() {
    fetchCSV(sd.stocks[counter]);
}

function fetchCSV(name) {
    results = [];
    var file = name + ".csv";
    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            populate(name);
        });
}

function populate(name) {
    var dbs = Array()
    for (i = 0; i < results.length; i++) {
        var data = {}
        var hour = moment(results[i]['time'], "DD/MM/YYYY hh:mm:ss").format("HH");
        data['num'] = i;
        data['ticker'] = name;
        if (hour >= 1 && hour <= 4) {
            data['time'] = moment(results[i]['time'], "DD/MM/YYYY hh:mm:ss").valueOf() + (12 * 3600 * 1000); //+ (330 * 60 * 1000);
        } else {
            data['time'] = moment(results[i]['time'], "DD/MM/YYYY hh:mm:ss").valueOf(); //+ (330 * 60 * 1000);
        }
        data['open'] = parseFloat(results[i]['Open']);
        data['high'] = parseFloat(results[i]['High']);
        data['low'] = parseFloat(results[i]['Low']);
        data['close'] = parseFloat(results[i]['Close']);
        data['vol'] = (Math.abs(Math.round(parseFloat(results[i]['Open']) - parseFloat(results[i]['Close']))) + 1) * 100
        dbs.push(data)
    }

    initDB(function (db, client) {
        insertDocuments(db, dbs, function () {
            client.close()
            counter++;
            if (counter < sd.stocks.length) {
                getAllCSVs()
            }
        });
    });
}


function getAllEvents() {
    eventResult = [];
    var file = "events.csv";
    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (data) => eventResult.push(data))
        .on('end', () => {
            populateEvents();
        });
}

function populateEvents() {
    var dbs = Array()
    for (i = 0; i < eventResult.length; i++) {
        var data = {}

        data['eventId'] = i + 1;
        data['exerciseId'] = parseInt(eventResult[i]['Ex id']);
        data['stockName'] = eventResult[i]['Stock Name'];
        data['ticker'] = eventResult[i]['Ticker'];
        data['timeframe'] = eventResult[i]['Time-frame'];
        data['level'] = eventResult[i]['Level'];
        data['actionScript'] = eventResult[i]['Remarks'];
        data['entry'] = eventResult[i]['Entry'];
        data['target'] = eventResult[i]['Target'];
        data['stoploss'] = eventResult[i]['Stop-loss'];
        data['rr'] = eventResult[i]['RR ratio'];
        data['tradeType'] = eventResult[i]['Type of trader'];
        data['isAssisted'] = eventResult[i]['Classification'] == "Assisted" ? true : false;
        data['startTime'] = moment(eventResult[i]['Minimum candle history'], "MM/DD/YYYY").valueOf()
        data['atTime'] = moment(eventResult[i]['At'] + " " + eventResult[i]['atHour'], "MM/DD/YYYY hh:mm:ss").valueOf()
        data['endTime'] =
            moment(eventResult[i]['End date'] + " " + eventResult[i]['endHour'], "MM/DD/YYYY hh:mm:ss").valueOf()
        for (j = 0; j < sd.headline.length; j++) {
            for (k = 0; k < sd.headline[j].levels.length; k++) {
                if (eventResult[i]['Level'] == sd.headline[j].levels[k]) {
                    data['headline'] = sd.headline[j].possiblecopies[getRandomInt(sd.headline[j].possiblecopies.length)];
                }
            }
        }
        dbs.push(data);
    }
    initDB(function (db, client) {
        insertEvents(db, dbs, function () {
            client.close()
        });
    });
}

function getAllFeed() {
    feedResult = [];
    var file = "feed.csv";
    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (data) => feedResult.push(data))
        .on('end', () => {
            populateFeed();
        });
}

function populateFeed() {
    var dbs = Array()
    for (i = 0; i < feedResult.length; i++) {
        var data = {}

        data['feedId'] = i + 1;
        data['exerciseId'] = parseInt(feedResult[i]['Ex id'])
        data['startTime'] = moment(feedResult[i]['Start Date'], "MM/DD/YYYY hh:mm").valueOf()
        data['endTime'] = moment(feedResult[i]['End Date'], "MM/DD/YYYY hh:mm").valueOf()
        data['feed'] = feedResult[i]['Feed/Copy']
        data['title'] = feedResult[i]['title']
        //data['ticker'] = feedResult[i]['Ticker']
        dbs.push(data);
    }
    initDB(function (db, client) {
        insertFeed(db, dbs, function () {
            client.close()
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
