const { stocks, companies } = require("./data")

const exercise = [
    {
        "id": 1,
        "title": "Sun Pharma & Form 483",
        "stocks": [
            companies.SUNPHARMA
        ],
        "tag" : "News",
        "gameType" : "Predict the Trend",
        "setup" : "Pharma companies are negatively impacted by USFDA observations, with the severity of the"
        +"notification received limiting operations at the plant and subsequently impacting the stock" 
        +"price. Sun Pharma received Form 483 for the Halol facility. The last time the company" 
        +"received a Form 483, the stock was down by 2%",
        "timeFrames": "60 min",
        "startTime": 1576208700000,
        "endTime": 1576218660000,
        "bottomColor": "0xFF34E89E",
        "topColor": "0xFF0F3443",
      },
      {
        "id": 2,
        "title": "Monthly Auto Numbers & Stock Impact",
        "stocks": [
            companies.TATAMOTORS,
        ],
        "tag" : "News",
        "gameType" : "Predict the Trend",
        "setup" : "Monthly auto volume numbers are essential to tracking quarterly sales for automobile companies, and often have an impact on stock prices for the day. TATA Motors recorded 119% growth in their monthly numbers (Feb’21 vs Feb’20) beating the competition all-out. The last time this happened, the stock reacted positively, closing 1.5% the positive.",
        "timeFrames": "60 min",
        "startTime": 1614656700000,
        "endTime": 1614679200000,
        "bottomColor": "0xFF34E89E",
        "topColor": "0xFF0F3443",
      },
      {
        "id": 3,
        "title": "Telcos and Tariff Hikes, a match made in heaven?",
        "stocks": [
            companies.BHARTIARTL
        ],
        "tag" : "News",
        "gameType" : "Predict the Trend",
        "setup" : "The last time Bharti Airtel undertook a tariff hike, i.e., increasing rates that would positively benefit the profit of the company, the stock reacted in the positive, increasing by 3% Bharti raised tariffs for the second time in 6 months, cementing its role as the price leader.",
        "timeFrames": "60 min",
        "startTime": 1626407100000,
        "endTime": 1626429600000,
        "bottomColor": "0xFF34E89E",
        "topColor": "0xFF0F3443",
      },
]

module.exports = {exercise}