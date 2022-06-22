var express = require("express");
var router = express.Router();

const assert = require("assert");

const database = require("../database/database_utils");

const sd = require("../public/data/data.js");
const cs = require("../public/data/collections.js");
const user = require("../scripts/user.js");
const se = require("../public/data/fundamental_exercise.js");

const moment = require("moment");

router.get("/miniExercise/:id", function (req, res, next) {
  if (req.params.id == "all") {
    res.end(JSON.stringify(se.exercise));
  }
});

router.get("/exercises/:id", function (req, res) {
  if (req.params.id == "all") {
    res.end(JSON.stringify(sd.exercises));
  } else if (req.params.id == "trending") {
    var trendingExercise = [];
    for (i = 0; i < sd.exercises.length; i++) {
      if (
        sd.exercises[i].id == 9 ||
        sd.exercises[i].id == 11 ||
        sd.exercises[i].id == 12 ||
        sd.exercises[i].id == 13
      ) {
        trendingExercise.push(sd.exercises[i]);
      }
    }
    res.end(JSON.stringify(trendingExercise));
  } else if (Number.isInteger(parseInt(req.params.id))) {
    var exerciseToReturn = sd.exercises.find(
      (exercise) => exercise.id == req.params.id
    );
    res.end(JSON.stringify(exerciseToReturn));
  } else {
    database.initDB(async function (db, client) {
      var tickers = sd.exercises
        .find((exercise) => exercise.id == req.params.id)
        .stocks.map((x) => x.ticker);
      const collection = db.collection("candles");
      const x = await Promise.all(
        tickers.map((ticker) => {
          return collection
            .find({ ticker })
            .sort({ time: 1 })
            .limit(4)
            .toArray();
        })
      );
      res.end(JSON.stringify(x));
      client.close();
    });
  }
});

router.get("/events/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findEvents(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/feed/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findFeed(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.post("/update/attempt", function (req, res, next) {
  user.updateUser(req.body.email, req.body.exerciseId);
  res.end();
});

router.post("/update/getUserRewards", function (req, res, next) {
  user.getUserRewardForExercise(
    req.body.email,
    req.body.exerciseId,
    req.body.hasWon,
    function (data) {
      res.end(JSON.stringify(data));
    }
  );
});

router.get("/update", function (req, res, next) {
  database.initDB(async function (db, client) {
    var tickers = sd.exercises
      .find((exercise) => exercise.id == req.query.exerciseId)
      .stocks.map((x) => x.ticker);
    const collection = db.collection("candles");
    const x = await Promise.all(
      tickers.map((ticker) => {
        return collection
          .find({
            $and: [
              { ticker: ticker },
              { time: { $lt: +req.query.exerciseTime } },
            ],
          })
          .sort({ time: -1 })
          .limit(1)
          .toArray();
      })
    );
    res.end(JSON.stringify(x));
    client.close();
  });
});

router.get("/candles/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findCandles(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/candles/:id/:timeframe", function (req, res, next) {
  database.initDB(function (db, client) {
    findCandlesForTimeFrame(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/candlesForMiniExercise/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findCandlesForMinExercise(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

router.get("/info/assistedtrade/:id", function (req, res, next) {
  res.end(JSON.stringify(sd.copies[req.params.id]));
});

router.get("/quote", function (req, res, next) {
  const quotes = [
    "Ab meri tarah Risk se ishq hai to kood pado, ya to duboge ya udoge",
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
    "No one can see a bubble. That's what makes it a bubble",
  ];
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(quotes[Math.floor(Math.random() * quotes.length)]));
});

router.get("/stories", function (req, res, next) {
  x = {
    newsletter: [
      {
        id: 1,
        type: "newsletter",
        title: "Commodities fallout from Russia invasion balloons 💥",
        url: "https://finlearnacademy.com/newsletter/commodities-fallout-from-russia-invasion-balloons/",
        thumbnail:
          "https://imgix.cosmicjs.com/2e1c1fb0-a10b-11ec-a634-2f1716dd45af-Ccommodities.png",
      },
    ],
    video: [
      {
        id: 1,
        type: "video",
        title: "Stock Markets Recap Week of 22nd April 2022",
        url: "https://www.youtube.com/watch?v=FnEdr7J9x0g",
        thumbnail:
          "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
      },
    ],
    infographic: [
      {
        id: 1,
        title: "Brands operated by ITC",
        type: "infographic",
        description:
          "ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n\nDon't forget to swipe left and capitalise on an opportunity in ITC",
        thumbnail:
          "https://imgix.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
        data: [
          "https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
          "https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png",
        ],
      },
    ],
    blog: [
      {
        id: 1,
        type: "blog",
        title: "How to Open a Demat Account",
        url: "https://finlearnacademy.com/blog/how-to-open-a-demat-account/",
        thumbnail:
          "https://imgix.cosmicjs.com/911429e0-a10c-11ec-a634-2f1716dd45af-How-to-Open-a-Demat-Account-Everything-you-need-to-know-e1646907962592.png",
      },
    ],
  };
  res.end(JSON.stringify(x));
});

router.get("/collection/:slug", function (req, res, next) {
  switch (req.params.slug) {
    case "dummy":
      res.end(JSON.stringify(cs.dummy));
      break;
    case "future_and_options":
      res.end(JSON.stringify(cs.future_and_options));
      break;
    case "long_term_investing":
      res.end(JSON.stringify(cs.long_term_investing));
      break;
    case "short_term_investing":
      res.end(JSON.stringify(cs.short_term_investing));
      break;
    case "latest_update":
      res.end(JSON.stringify(cs.latest_update));
      break;
    case "sector_trends":
      res.end(JSON.stringify(cs.sector_trends));
      break;
    case "back_to_basic":
      res.end(JSON.stringify(cs.back_to_basic));
      break;
  }
});

router.get("/collection/exercise/:id", function (req, res, next) {
  var verData = [];
  var gridData = [];
  for (i = 0; i < cs.infographics.length; i++) {
    for (j = 0; j < cs.infographics[i]["exercises"].length; j++) {
      if (cs.infographics[i]["exercises"][j] == req.params.id) {
        if (cs.infographics[i].type == "quiz") {
          gridData.push(cs.infographics[i]);
        } else {
          verData.push(cs.infographics[i]);
        }
      }
    }
  }
  var returnData = [
    {
      orientation: 1,
      data: verData,
    },
    {
      orientation: 3,
      data: gridData,
    },
  ];
  res.end(JSON.stringify(returnData));
});

router.get("/home/new_this_week", function (req, res, next) {
  res.end(JSON.stringify(cs.new_this_week));
});

router.get("/home/infographics", function (req, res, next) {
  res.end(JSON.stringify(cs.home_info));
});

router.get("/reward/exercise/:id", function (req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  var returnRewards = sd.exercises.find((o) => o.id == req.params.id);
  if (returnRewards != undefined) {
    res.end(JSON.stringify(returnRewards.rewards));
  } else {
    res.end();
  }
});

router.post("/shortExercises/all", function (req, res, next) {
  database.initDB(async function (db, client) {
    const sec = db.collection("short_exercises");
    const qsc = db.collection("chart_quizzes");
    const us = db.collection("user_short_exercise_status");
    const ucq = db.collection("user_chart_quiz_status");

    const shortExercises = await sec.find().toArray();
    const data = await Promise.all(
      shortExercises.map(async (exercise) => {
        const quizzes = await Promise.all(
          exercise.ofType.map(async (type) => {
            return qsc.find({ type: type }).toArray();
          })
        );
        const userStatus = await us.findOne({
          $and: [{ levelId: exercise.levelId }, { userId: req.body.email }],
        });
        const userQuizStatus = await ucq
          .find({
            $and: [{ levelId: exercise.levelId }, { userId: req.body.email }],
          })
          .toArray();

        let userPoints = 0;
        let consumedQuizzes = 0;
        let totalQuizzes = (exercise["totalQuizzes"] = quizzes.reduce(
          (acc, cur) => {
            acc = acc.concat(cur);
            return acc;
          }
        ).length);

        for (var i = 0; i < userQuizStatus.length; i++) {
          if (userQuizStatus[i].isConsumed) {
            consumedQuizzes += 1;
          }
          userPoints += userQuizStatus[i].xp;
        }

        if (userStatus == null) {
          const x = await us.updateOne(
            { userId: req.body.email },
            { $set: { userId: req.body.email, levelId: 1, isUnlocked: true } },
            { upsert: true }
          );
          console.log(x);
        }
        exercise["levelXp"] = userPoints;
        exercise["isUnlocked"] =
          userStatus != null
            ? userStatus.isUnlocked
            : exercise.levelId == 1
            ? true
            : false;
        exercise["consumedQuizzes"] = consumedQuizzes;
        exercise["totalQuizzes"] = totalQuizzes;
        return exercise;
      })
    );

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
    client.close();
  });
});

router.post("/getQuizForLevel", function (req, res, next) {
  database.initDB(async function (db, client) {
    const qsc = db.collection("chart_quizzes");
    const que = db.collection("chart_quiz_questions");
    const quizzes = await Promise.all(
      req.body.ofType.map(async (type) => {
        return qsc.find({ type: type }).toArray();
      })
    );
    const data = quizzes.reduce((acc, cur) => {
      acc = acc.concat(cur);
      return acc;
    });
    const quizToReturn = data[Math.floor(getRandomArbitrary(0, data.length))];

    const questions = await Promise.all(
      quizToReturn.questionIds.map((qId) => {
        return que.findOne({ questionId: qId });
      })
    );
    quizToReturn["questions"] = questions;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(quizToReturn));
    client.close();
  });
});

router.post("/unlockLevels", function (req, res, next) {
  database.initDB(async function (db, client) {
    const us = db.collection("user_short_exercise_status");
    const a = await Promise.all(
      req.body.unLockLevels.map(async (level) => {
        return us.updateOne(
          {
            userId: req.body.email,
          },
          { $set: { levelId: level, isUnlocked: true } },
          { upsert: true }
        );
      })
    );
    console.log(a);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify());
    client.close();
  });
});

router.post("/markQuizAsComplete", function (req, res, next) {
  database.initDB(async function (db, client) {
    const ucq = db.collection("user_chart_quiz_status");

    const x = await ucq.updateOne(
      {
        userId: req.body.email,
      },
      {
        $set: {
          isConsumed: true,
          levelId: req.body.levelId,
          quizId: req.body.quizId,
          xp: req.body.xp,
        },
      },
      { upsert: true }
    );

    console.log(x);

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify());
    client.close();
  });
});

router.get("/CandlesForShortExerciseChart/:id", function (req, res, next) {
  database.initDB(function (db, client) {
    findCandlesForChartBaseQuize(db, req, function (data) {
      res.end(JSON.stringify(data));
      client.close();
    });
  });
});

const findCandlesForChartBaseQuize = async function (db, req, callback) {
  const collection = db.collection("chart_quizzes");
  var findQuery = {
    quizId: +req.params.id,
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
      })
      .sort({ time: 1 })
      .toArray(function (err, candles) {
        assert.equal(err, null);
        callback(candles);
      });
  });
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const findCandlesForTimeFrame = function (db, req, callback) {
  const collection = db.collection("candles");
  var startTime = req.query.startTime;
  var endTime = req.query.exerciseTime;
  if (req.query.startTime == undefined) {
    startTime = 0;
  }
  if (req.query.exerciseTime == undefined) {
    endTime = moment().unix() * 1000;
  }
  collection
    .find({
      $and: [
        { ticker: req.params.id },
        { time: { $lt: +endTime } },
        { time: { $gt: +startTime } },
      ],
    })
    .sort({ time: 1 })
    .toArray(function (err, docs) {
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

      var flag = moment
        .unix(docs[0].time / 1000)
        .utcOffset(0)
        .format(flagChar);
      var generatedCandle = docs[0];
      var counter = 0;
      for (i = 0; i < docs.length; i++) {
        if (
          flag ==
          moment
            .unix(docs[i].time / 1000)
            .utcOffset(0)
            .format(flagChar)
        ) {
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
          returnData.push(generatedCandle);
          flag = moment
            .unix(docs[i].time / 1000)
            .utcOffset(0)
            .format(flagChar);
          generatedCandle = docs[i];
        }
      }
      counter++;
      generatedCandle.num = counter;
      returnData.push(generatedCandle);
      callback(returnData);
    });
};

const findCandles = function (db, req, callback) {
  const collection = db.collection("candles");
  collection
    .find({
      $and: [
        { ticker: req.params.id },
        { time: { $lt: +req.query.exerciseTime } },
      ],
    })
    .sort({ time: 1 })
    .toArray(function (err, docs) {
      assert.equal(err, null);
      var day = moment
        .unix(req.query.exerciseTime / 1000)
        .utcOffset(0)
        .format("D");
      var returndata = [];
      for (i = docs.length - 1; i >= 0; i--) {
        if (
          day !=
          moment
            .unix(docs[i].time / 1000)
            .utcOffset(0)
            .format("D")
        )
          break;
        else returndata.push(docs[i]);
      }
      callback(returndata.reverse());
    });
};

const findCandlesForMinExercise = function (db, req, callback) {
  const collection = db.collection("candles");
  var startTime = req.query.startTime;
  var endTime = req.query.endTime;
  collection
    .find({
      $and: [
        { ticker: req.params.id },
        { time: { $lt: +endTime } },
        { time: { $gt: +startTime } },
      ],
    })
    .sort({ time: 1 })
    .toArray(function (err, docs) {
      callback(docs);
    });
};

const findEvents = async function (db, req, callback) {
  const collection = db.collection("events");
  collection.find({ exerciseId: +req.params.id }).toArray(function (err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

const findFeed = async function (db, req, callback) {
  const collection = db.collection("feed");
  collection.find({ exerciseId: +req.params.id }).toArray(function (err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

module.exports = router;
