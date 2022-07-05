var express = require("express");
var router = express.Router();

const assert = require("assert");

const database = require("../../utils/database/dbUtils");
const moment = require("moment");

router.post("/fundamentalshortExercises/all", function (req, res, next) {
    database.initDB(async function (db, client) {
      const sec = db.collection("fundamental_level");
      const qsc = db.collection("fundamental_quizzes");
      const us = db.collection("user_fundamental_level_status");
      const ucq = db.collection("user_fundamental_quiz_status");
  
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
  
  router.post("/getFundamentalQuizForLevel", function (req, res, next) {
    database.initDB(async function (db, client) {
      const qsc = db.collection("fundamental_quizzes");
      const que = db.collection("fundamental_quiz_questions");
      const quizzes = await Promise.all(
        req.body.ofType.map(async (type) => {
          return qsc.find({ type: type }).toArray();
        })
      );
      const data = quizzes.reduce((acc, cur) => {
        acc = acc.concat(cur);
        return acc;
      });

      console.log(data);
      const quizToReturn = data[Math.floor(getRandomArbitrary(0, data.length))];

      console.log(quizToReturn);
  
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
  
  router.post("/unlockFundamentalLevels", function (req, res, next) {
    database.initDB(async function (db, client) {
      const us = db.collection("user_fundamental_level_status");
      const a = await Promise.all(
        req.body.unLockLevels.map(async (level) => {
          return us.updateOne(
            {
              userId: req.body.email,
              levelId: level
            },
            { $set: { levelId: level, isUnlocked: true } },
            { upsert: true }
          );
        })
      );
      
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify());
      client.close();
    });
  });
  
  router.post("/markFundamentalQuizAsComplete", function (req, res, next) {
    database.initDB(async function (db, client) {
      const ucq = db.collection("user_fundamental_quiz_status");
  
      const x = await ucq.updateOne(
        {
          userId: req.body.email,
          levelId: req.body.levelId,
          quizId: req.body.quizId,
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
  
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify());
      client.close();
    });
  });

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  module.exports = router;