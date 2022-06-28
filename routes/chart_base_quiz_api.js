var express = require("express");
var router = express.Router();
var assert = require("assert");
var database = require("../utils/database/dbUtils");

router.get("/ChartBaseQuizes", function (req, res, next) {
  database.initDB(function (db, client) {
    findAllChartBaseQuizes(db, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/ChartBaseQuiz/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findOneChartBaseQuize(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/CandlesForChartBaseQuiz/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findCandlesForChartBaseQuize(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

const findAllChartBaseQuizes = async function (db, callback) {
  const collection = db.collection("events");
  collection
    .find()
    .sort({ eventId: 1 })
    .toArray(function (err, docs) {
      assert.equal(err, null);
      callback(
        docs.map((doc) => {
          return {
            chartQuizId: doc.eventId,
            ticker: doc.ticker,
            timeframe: doc.timeframe,
            startTime: doc.startTime,
            atTime: doc.atTime,
            endTime: doc.endTime,
          };
        })
      );
    });
};

const findOneChartBaseQuize = async function (db, req, callback) {
  const collection = db.collection("events");
  var findQuery = {
    eventId: +req.params.id,
  };
  collection.findOne(findQuery, function (err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      callback({
        chartQuizId: doc.eventId,
        ticker: doc.ticker,
        timeframe: doc.timeframe,
        startTime: doc.startTime,
        atTime: doc.atTime,
        endTime: doc.endTime,
      });
    } else {
      callback(null);
    }
  });
};

const findCandlesForChartBaseQuize = async function (db, req, callback) {
  const collection = db.collection("events");
  var findQuery = {
    eventId: +req.params.id,
  };
  collection.findOne(findQuery, function (err, doc) {
    assert.equal(err, null);

    const candlesCollection = db.collection("candles");
    candlesCollection
      .find({
        $and: [
          { ticker: doc.ticker },
          { time: { $lt: doc.endTime } },
          { time: { $gt: doc.startTime } },
        ],
      }).sort({ time: 1 })
      .toArray(function (err, candles) {
        assert.equal(err, null);
        callback(candles);
      });
  });
};

module.exports = router;
