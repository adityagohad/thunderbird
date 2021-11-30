const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const csv = require('csv-parser')
const fs = require('fs')
const moment = require('moment')
var results = [];
var counter = 0;
var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "NIFTYBANK", "BATA", "BERGERPAINT", "BHARTIAIRTEL", "BRITANNIA", "CADILA", "CIPLA", "COALINDIA", "CRISIL", "DIVILAB", "DMART", "EXIDE", "GAIL", "GODREJ", "GUJRATGAS", "HDFCBANK", "HERO", "HINDALCO", "HUL", "ICICIBANK", "IDEA", "INFY", "IPCA", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL", "MOTHERSUMI", "NIFTY", "OBEROI", "PEL", "PIDILITE", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEM", "VBL", "WIPRO", "YESBANK"];

const url = 'mongodb://localhost:27017';
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

getAllCSVs();

function getAllCSVs() {
    fetchCSV(stocks[counter]);
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
            data['time'] = moment(results[i]['time'], "DD/MM/YYYY hh:mm:ss").valueOf() + (12 * 3600 * 1000) + (330 * 60 * 1000);
        } else {
            data['time'] = moment(results[i]['time'], "DD/MM/YYYY hh:mm:ss").valueOf() + (330 * 60 * 1000);
        }
        data['open'] = parseFloat(results[i]['Open']);
        data['high'] = parseFloat(results[i]['High']);
        data['low'] = parseFloat(results[i]['Low']);
        data['close'] = parseFloat(results[i]['Close']);
        dbs.push(data)
    }

    initDB(function (db, client) {
        insertDocuments(db, dbs, function () {
            client.close()
            counter++;
            if (counter < stocks.length) {
                getAllCSVs()
            }
        });
    });
}