var express = require("express");
var router = express.Router();
//require("dotenv").config();

const database = require("../../utils/database/dbUtils");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(404);
  res.end();
});

router.post("/redirect", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  const response = {}
  if (
    req.body.email == null ||
    req.body.version == null ||
    isNaN(parseInt(req.body.version))
  ) {
    res.status(500);
    res.end();
  } else if (parseInt(req.body.version) < 3/*process.env.VERSION*/) {
    response["isForced"] = true;
    response["path"] = "update";
    res.end(JSON.stringify(response));
  } else {
    database.initDB(async function (db, client) {
      const users = db.collection("users");
      const user = await users.findOne({ email: req.body.email });
      if (user != null && user.isOnboardingComplete) {
        response["path"] = "home";
        res.end(JSON.stringify(response));
      } else {
        response["path"] = "onboarding";
        res.end(JSON.stringify(response));
      }
      client.close();
    });
  }
});

router.post("/saveOnboardingChoices", function (req, res, next) {
  if (req.body.email == null && req.body.data == null) {
    res.status(500);
    res.end();
  } else {
    database.initDB(async function (db, client) {
      const users = db.collection("users");
      const user = await users.updateOne(
        { email: req.body.email },
        { $set: { isOnboardingComplete: true , onboardingResponses : req.body.data} },
        { upsert: true }
      );
      res.status(200).end();
      client.close();
    });
  }
});

router.delete("/", function (req, res, next){
  database.initDB(async function (db, client) {
    const users = db.collection("users");
    await users.deleteMany({
      email: req.body.email
    });
    res.status(200).end();
    client.close();
  });
});

module.exports = router;
