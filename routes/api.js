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

router.get('/stories', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    x = {
        newsletter: [
            {
                id: 1,
                title: "Commodities fallout from Russia invasion balloons 💥",
                url: "https://finlearnacademy.com/newsletter/commodities-fallout-from-russia-invasion-balloons/",
                thumbnail: "https://imgix.cosmicjs.com/2e1c1fb0-a10b-11ec-a634-2f1716dd45af-Ccommodities.png",
            }
        ],
        video: [
            {
                id: 1,
                title: "Stock Markets Recap Week Of 25th February 2022",
                url: "https://www.youtube.com/watch?v=xwcVeTdzjTQ",
                thumbnail: "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
            }
        ],
        infographic: [
            {
                id: 1,
                title: "Brands operated by ITC",
                description: "ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n\nDon't forget to swipe left and capitalise on an opportunity in ITC",
                thumbnail: "https://imgix.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
                data: ["https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png", "https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png"],
            },
        ],
        blog: [
            {
                id: 1,
                title: "How to Open a Demat Account",
                url: "https://finlearnacademy.com/blog/how-to-open-a-demat-account/",
                thumbnail: "https://imgix.cosmicjs.com/911429e0-a10c-11ec-a634-2f1716dd45af-How-to-Open-a-Demat-Account-Everything-you-need-to-know-e1646907962592.png",
            }
        ]
    };
    res.end(JSON.stringify(x));
    client.close();
});



router.get('/sector_trends', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    x = {
        newsletter: [
            {
                id: 1,
                title: "BI MPC at key juncture 🧨",
                url: "https://finlearnacademy.com/newsletter/rbi-mpc-at-key-juncture/",
                thumbnail: "https://imgix.cosmicjs.com/5d7e0cb0-9f98-11ec-a634-2f1716dd45af-11.png",
            },
            {
                id: 2,
                title: "IT poised to build on growth 🚀",
                url: "https://finlearnacademy.com/newsletter/it-poised-to-build-on-growth/",
                thumbnail: "https://imgix.cosmicjs.com/dd87fb70-9f96-11ec-a634-2f1716dd45af-11.png",
            },
            {
                id: 3,
                title: "BFSI highly dependent on FPI inflows to turn-around underperformance",
                url: "https://finlearnacademy.com/newsletter/bfsi-highly-dependent-on-fpi-inflows-to-turn-around-underperformance/",
                thumbnail: "https://imgix.cosmicjs.com/7b1fb8b0-9f96-11ec-a634-2f1716dd45af-11.png"
            },
            {
                id: 4,
                title: "Commodities fallout from Russia invasion balloons 💥",
                url: "https://finlearnacademy.com/newsletter/commodities-fallout-from-russia-invasion-balloons/",
                thumbnail: "https://imgix.cosmicjs.com/2e1c1fb0-a10b-11ec-a634-2f1716dd45af-Ccommodities.png",
            },
            {
                id: 5,
                title: "India Pharma returns to trend-line growth 📈",
                url: "https://finlearnacademy.com/newsletter/india-pharma-market-returns-to-trend-line-growth/",
                thumbnail: "https://imgix.cosmicjs.com/c9de6c80-a432-11ec-a536-8726e3bb3867-US-Inflation.png",
            },
        ],
        video: [
            {
                id: 1,
                title: "Stock Markets Recap Week Of 25th February 2022",
                url: "https://www.youtube.com/watch?v=xwcVeTdzjTQ",
                thumbnail: "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
            }
        ],
        infographic: [
            {
                id: 1,
                title: "Results of Top Steel Stocks for Q3",
                description: "Results of Top 5 Steel Stocks:\n\nTata Steel\nJSW Steel\nSAIL\nAPL Apollo Tubes\nJindal Stainless\n\nDon't forget to swipe left and check out an opportunity in another hidden metal sector gem",
                thumbnail: "https://imgix.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png",
                data: ["https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png", "https://cdn.cosmicjs.com/59be2a40-9fb3-11ec-a634-2f1716dd45af-metal2.png"],
            },
        ],
    };
    res.end(JSON.stringify(x));
    client.close();
});

router.get('/latest_update', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    x = {
        newsletter: [
            {
                id: 1,
                title: "Stock Markets Recap Week Of 25th February 2022",
                url: "https://cdn.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
                thumbnail: "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
            },
            {
                id: 2,
                title: "Stock Markets Recap Week Of 18th February 2022",
                url: "https://cdn.cosmicjs.com/e3fdd980-9fa4-11ec-a634-2f1716dd45af-11.jpg",
                thumbnail: "https://imgix.cosmicjs.com/e3fdd980-9fa4-11ec-a634-2f1716dd45af-11.jpg",
            },
        ],
        infographic: [
            {
                id: 1,
                title: "Brands operated by ITC",
                description: "ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n\nDon't forget to swipe left and capitalise on an opportunity in ITC",
                thumbnail: "https://imgix.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
                data: ["https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png", "https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png"],
            },
            {
                id: 2,
                title: "Tata Group vs Reliance Group",
                description: "Did you know? Tata Sons (Parent company of all major Tata companies)  is the biggest promoter group in India and Reliance Industries is the company with the highest market capitalisation in India (listed companies)\n\nBoth are major groups and have helped India grow. Don't forget to swipe left and see a development we observed on Mukesh Ambani's Reliance Group",
                thumbnail: "https://imgix.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png",
                data: ["https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png", "https://cdn.cosmicjs.com/44dbd4f0-9fb4-11ec-a634-2f1716dd45af-tatavreliance1.png"],
            },
            {
                id: 3,
                title: "Major Stocks in 52 week low",
                description: "Nifty after making a high of 18,604.45 and Sensex making a high of 62,245.43 have corrected over 10%. Situations like these get investors interested because everyone buys the dip :p\n\nThese are a few stocks currently trading close to their 52-week lows. Good time to buy?",
                thumbnail: "https://imgix.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png",
                data: ["https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png"],
            },
            {
                id: 4,
                title: "Major Global Index returns in past 5 years",
                description: "Mera desh badal raha hai, aage badh raha hai?\nTop 5 countries giving the best returns (index)\n\nUSA\nIndia\nFrance\nJapan\nGermany\n\nWhich index is most likely to yield the most returns in the next 5 years?",
                thumbnail: "https://imgix.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png",
                data: ["https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png"],
            },
        ],
    };
    res.end(JSON.stringify(x));
    client.close();
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
