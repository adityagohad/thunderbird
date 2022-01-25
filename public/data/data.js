const placeHolderIcon = "https://logothunderbird.s3.ap-south-1.amazonaws.com/";

var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "NIFTYBANK", "BATA", "BERGEPAINT", "BHARTIARTL", "BRITANNIA", "CADILAHC", "CIPLA", "COALINDIA", "CRISIL", "DIVISLAB", "DMART", "EXIDEIND", "GAIL", "GODREJPROP", "GUJGASLTD", "HDFCBANK", "HEROMOTOCO", "HINDALCO", "HINDUNILVR", "ICICIBANK", "IDEA", "INFY", "IPCALAB", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL-N", "MOTHERSUMI", "NIFTY", "OBEROIRLTY", "PEL", "PIDILITIND", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEMCO", "VBL", "WIPRO", "YESBANK"];

const sectors = { CEMENT: "Cement", CONGLO: "conglomerate", FMCG: "FMCG", PAINT: "Paint", TELECOM: "Telecom", IT: "IT", FIN: "Financial Services", PHARMA: "Pharma", AUTO: "Auto", RETAIL: "Retail", METAL: "Metal", REALTY: "Realty", INDIA: "India", POWER: "Power", AVIATION: "Aviation", ONG: "Oil and Natural Gas", PORTS: "Ports and Shipping" }

const companies = {
    ACC: {
        ticker: "ACC",
        icon: placeHolderIcon + "ACC" + ".jpg",
        sector: sectors.CEMENT,
        name: "ACC",
    },
    ADANIENT: {
        ticker: "ADANIENT",
        icon: placeHolderIcon + "ADANIENT" + ".jpg",
        sector: sectors.CONGLO,
        name: "Adani Enterprises",
    },
    ADANIPORTS: {
        ticker: "ADANIPORTS",
        icon: placeHolderIcon + "ADANIPORTS" + ".jpg",
        sector: sectors.PORTS,
        name: "Adani Ports and SEZ",
    },
    ASIANPAINT: {
        ticker: "ASIANPAINT",
        icon: placeHolderIcon + "ASIANPAINT" + ".jpg",
        sector: sectors.PAINT,
        name: "Asian Paints",
    },
    BATA: {
        ticker: "BATAINDIA",
        icon: placeHolderIcon + "BATAINDIA" + ".jpg",
        sector: sectors.RETAIL,
        name: "Bata India",
    },
    BRITANNIA: {
        ticker: "BRITANNIA",
        icon: placeHolderIcon + "BRITANNIA" + ".jpg",
        sector: sectors.FMCG,
        name: "Britannia Industries"
    },
    BERGEPAINT: {
        ticker: "BERGEPAINT",
        icon: placeHolderIcon + "BERGEPAINT" + ".jpg",
        sector: sectors.PAINT,
        name: "Berger Paints",
    },
    BAJFINANCE: {
        ticker: "BAJFINANCE",
        icon: placeHolderIcon + "BAJFINANCE" + ".jpg",
        sector: sectors.FIN,
        name: "Bajaj Finance",
    },
    BHARTIARTL: {
        ticker: "BHARTIARTL",
        icon: placeHolderIcon + "BHARTIARTL" + ".jpg",
        sector: sectors.TELECOM,
        name: "Bharti Airtel"
    },
    CADILAHC: {
        ticker: "CADILAHC",
        icon: placeHolderIcon + "CADILAHC" + ".jpg",
        sector: sectors.PHARMA,
        name: "Cadila Healthcare",
    },
    CIPLA: {
        ticker: "CIPLA",
        icon: placeHolderIcon + "CIPLA" + ".jpg",
        sector: sectors.PHARMA,
        name: "Cipla",
    },
    COALINDIA: {
        ticker: "COALINDIA",
        icon: placeHolderIcon + "COALINDIA" + ".jpg",
        sector: sectors.POWER,
        name: "Coal India",
    },
    CRISIL: {
        ticker: "CRISIL",
        icon: placeHolderIcon + "CRISIL" + ".jpg",
        sector: sectors.FIN,
        name: "CRISIL",
    },
    DIVISLAB: {
        ticker: "DIVISLAB",
        icon: placeHolderIcon + "DIVISLAB" + ".jpg",
        sector: sectors.PHARMA,
        name: "Divi's Labratories",
    },
    DMART: {
        ticker: "DMART",
        icon: placeHolderIcon + "DMART" + ".jpg",
        sector: sectors.RETAIL,
        name: "Avenue Supermarts",
    },
    EXIDEIND: {
        ticker: "EXIDEIND",
        icon: placeHolderIcon + "EXIDEIND" + ".jpg",
        sector: sectors.AUTO,
        name: "Exide Industries",
    },
    GAIL: {
        ticker: "GAIL",
        icon: placeHolderIcon + "GAIL" + ".jpg",
        sector: sectors.ONG,
        name: "Gail (India)",
    },
    GODREJPROP: {
        ticker: "GODREJPROP",
        icon: placeHolderIcon + "GODREJPROP" + ".jpg",
        sector: sectors.REALTY,
        name: "Godrej Properties",
    },
    GUJGASLTD: {
        ticker: "GUJGASLTD",
        icon: placeHolderIcon + "GUJGASLTD" + ".jpg",
        sector: sectors.ONG,
        name: "Gujarat Gas",
    },
    HDFCBANK: {
        ticker: "HDFCBANK",
        icon: placeHolderIcon + "HDFCBANK" + ".jpg",
        sector: sectors.FIN,
        name: "HDFC Bank",
    },
    HEROMOTOCO: {
        ticker: "HEROMOTOCO",
        icon: placeHolderIcon + "HEROMOTOCO" + ".jpg",
        sector: sectors.AUTO,
        name: "Hero MotoCorp",
    },
    HINDUNILVR: {
        ticker: "HINDUNILVR",
        icon: placeHolderIcon + "HINDUNILVR" + ".jpg",
        sector: sectors.FMCG,
        name: "Hindustan Unilever",
    },
    ICICIBANK: {
        ticker: "ICICIBANK",
        icon: placeHolderIcon + "ICICIBANK" + ".jpg",
        sector: sectors.FIN,
        name: "ICICI Bank",
    },
    IDEA: {
        ticker: "IDEA",
        icon: placeHolderIcon + "IDEA" + ".jpg",
        sector: sectors.TELECOM,
        name: "Vodafone Idea",
    },
    INFY: {
        ticker: "INFY",
        icon: placeHolderIcon + "INFY" + ".jpg",
        sector: sectors.IT,
        name: "Infosys",
    },
    IPCALAB: {
        ticker: "IPCALAB",
        icon: placeHolderIcon + "IPCALAB" + ".jpg",
        sector: sectors.PHARMA,
        name: "IPCA Labratories",
    },
    ITC: {
        ticker: "ITC",
        icon: placeHolderIcon + "ITC" + ".jpg",
        sector: sectors.FMCG,
        name: "ITC",
    },
    JETAIRWAYS: {
        ticker: "JETAIRWAYS",
        icon: placeHolderIcon + "JETAIRWAYS" + ".jpg",
        sector: sectors.AVIATION,
        name: "Jet Airways (India)",
    },
    JSWSTEEL: {
        ticker: "JSWSTEEL",
        icon: placeHolderIcon + "JSWSTEEL" + ".jpg",
        sector: sectors.METAL,
        name: "JSW Steel",
    },
    MARUTI: {
        ticker: "MARUTI",
        icon: placeHolderIcon + "MARUTI" + ".jpg",
        sector: sectors.AUTO,
        name: "Maruti Suzuki",
    },
    MCDOWELL_N: {
        ticker: "MCDOWELL-N",
        icon: placeHolderIcon + "MCDOWELL-N" + ".jpg",
        sector: sectors.FMCG,
        name: "United Spirits",
    },
    MOTHERSUMI: {
        ticker: "MOTHERSUMI",
        icon: placeHolderIcon + "MOTHERSUMI" + ".jpg",
        sector: sectors.AUTO,
        name: "Motherson Sumi Systems",
    },
    NIFTY: {
        ticker: "NIFTY",
        icon: placeHolderIcon + "NIFTY_50" + ".jpg",
        sector: sectors.INDIA,
        name: "NIFTY 50",
    },
    OBEROIRLTY: {
        ticker: "OBEROIRLTY",
        icon: placeHolderIcon + "OBEROIRLTY" + ".jpg",
        sector: sectors.REALTY,
        name: "Oberoi Realty",
    },
    PEL: {
        ticker: "PEL",
        icon: placeHolderIcon + "PEL" + ".jpg",
        sector: sectors.CONGLO,
        name: "Piramal Enterprises",
    },
    PIDILITIND: {
        ticker: "PIDILITIND",
        icon: placeHolderIcon + "PIDILITIND" + ".jpg",
        sector: sectors.FMCG,
        name: "Pidilite Industries",
    },
    RELIANCE: {
        ticker: "RELIANCE",
        icon: placeHolderIcon + "RELIANCE" + ".jpg",
        sector: sectors.CONGLO,
        name: "Reliance Industries",
    },
    SBIN: {
        ticker: "SBIN",
        icon: placeHolderIcon + "SBIN" + ".jpg",
        sector: sectors.FIN,
        name: "State Bank of India",
    },
    SUNPHARMA: {
        ticker: "SUNPHARMA",
        icon: placeHolderIcon + "SUNPHARMA" + ".jpg",
        sector: sectors.PHARMA,
        name: "Sun Pharmaceuticals",
    },
    TATAMOTORS: {
        ticker: "TATAMOTORS",
        icon: placeHolderIcon + "TATAMOTORS" + ".jpg",
        sector: sectors.AUTO,
        name: "Tata Motors",
    },
    TATAPOWER: {
        ticker: "TATAPOWER",
        icon: placeHolderIcon + "TATAPOWER" + ".jpg",
        sector: sectors.POWER,
        name: "Tata Power Company",
    },
    TATASTEEL: {
        ticker: "TATASTEEL",
        icon: placeHolderIcon + "TATASTEEL" + ".jpg",
        sector: sectors.METAL,
        name: "Tata Steel",
    },
    TCS: {
        ticker: "TCS",
        icon: placeHolderIcon + "TCS" + ".jpg",
        sector: sectors.IT,
        name: "Tata Consultancy Services",
    },
    TRENT: {
        ticker: "TRENT",
        icon: placeHolderIcon + "TRENT" + ".jpg",
        sector: sectors.RETAIL,
        name: "Trent",
    },
    ULTRACEMCO: {
        ticker: "ULTRACEMCO",
        icon: placeHolderIcon + "ULTRACEMCO" + ".jpg",
        sector: sectors.CEMENT,
        name: "UltraTech Cement",
    },
    VBL: {
        ticker: "VBL",
        icon: placeHolderIcon + "VBL" + ".jpg",
        sector: sectors.FMCG,
        name: "Varun Beverages",
    },
    WIPRO: {
        ticker: "WIPRO",
        icon: placeHolderIcon + "WIPRO" + ".jpg",
        sector: sectors.IT,
        name: "Wipro",
    },
    NIFTYBANK: {
        ticker: "NIFTYBANK",
        icon: placeHolderIcon + "NIFTYBANK" + ".jpg",
        sector: sectors.INDIA,
        name: "Bank Nifty",
    },
    YESBANK: {
        ticker: "YESBANK",
        icon: placeHolderIcon + "YESBANK" + ".jpg",
        sector: sectors.FIN,
        name: "Yes Bank",
    }
}

const exercises = [
    {
        id: 1,
        title: "IT Sector Zooms 🚀",
        stocks: [companies.WIPRO, companies.TCS, companies.INFY],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Basics of Support and Resistance'],
        shortDescription: " IT Stocks are moving from strength to strength, post Covid-19 initiated change in the business landscape. Demand for tech products is high, but does that translate to consistent stock price movement?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 19,//19% more than invested
        detailDescription: ['Covid-19 decimated the markets in the months of March and April 2020, with headline indices down over 40 % over differing periods during the 2 months.  While markets suffered, businesses began adapting, getting started on Multi-year digital transformation journeys, with the Nifty IT Index one of the first to positively react, up 22% during. Infosys, Wipro & TCS all delivered Revenue / Earnings beat in their Q1FY21 numbers in Mid July, with other IT players also posting strong results. Does the momentum continue in the short term? How strong is the rally? What role do Q2FY21 results play?',
            'Play the game, take trades, multiply your capital and prepare yourself for present market conditions.'],
        description: [" IT Stocks are moving from strength to strength, post Covid-19 initiated change in the business landscape. Demand for tech products is high, but does that translate to consistent stock price movement?"],
        startTime: 1599039000000,
        levels: [1, 2],
    },
    {
        id: 2,
        title: "Revenge Spending in Consumer Goods 🤑",
        stocks: [companies.BRITANNIA, companies.HINDUNILVR, companies.MCDOWELL_N, companies.PIDILITIND, companies.VBL],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Resistance', 'Breakdowns', 'Breakouts'],
        shortDescription: "The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May. First part of Q1 was a wipeout, with demand returning in the second half of Q1, but how did stocks react? Was there enough meat to sustain?",
        timeFrames: '15 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 11,//11% more than invested
        detailDescription: ['Demand dipped, supply became constrained, inflation pressure continued and the first part of Q1 was a wipeout.', 'The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May, with significant improvements by July’21 when cases dipped to <40k and mobility improved to 75%', 'Demand returned in the second half of Q1, with rural leading growth (relatively less affected) across categories. But was there enough to sustain the rally? And how did stocks react in the interim?'],
        description: ["The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May. First part of Q1 was a wipeout, with demand returning in the second half of Q1, but how did stocks react? Was there enough meat to sustain?"],
        startTime: 1627637400000,
        levels: [33],
    },
    {
        id: 3,
        title: "Telcos in the time of Mukesh Ambani 😝",
        stocks: [companies.RELIANCE, companies.IDEA, companies.BHARTIARTL],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Support', 'Resistance', 'News', 'Breakouts', 'Fundamentals'],
        shortDescription: "Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav, but how sustainable is this?",
        timeFrames: '15 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 14,//14% more than invested
        detailDescription: ['Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav.', 'Jio changed the landscape, slashing prices, providing bundled services, widening the scope of their offerings, and smashing records of new subscribers in the process.', 'Soon enough, competitors including Bharti, Vi followed suit, offering similar prices and packages.', 'But for how long? ARPUs were languishing around the INR 120-150 mark, with telcos needing to hike prices to run sustainable organisations. Would Mr. Ambani soften? And what about the elephant in the room? The government was still expecting massive payouts from long-overdue AGR payments.'],
        description: ["Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav, but how sustainable is this?"],
        startTime: 1637400600000,
        levels: [1, 2, 5, 6],
    },
    {
        id: 4,
        title: "Financials amid a pandemic 🙄",
        stocks: [companies.HDFCBANK, companies.ICICIBANK, companies.SBIN, companies.BAJFINANCE, companies.YESBANK, companies.NIFTYBANK],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Inside Bar'],
        shortDescription: "Bank Nifty, HDFC Bank, ICICI Bank are down between 38-52 %, post the pandemic, reporting higher provisions, limited loan origination growth & decreased collection efficiencies. But for how long?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 32,//32% more than invested
        detailDescription: ['Banks & NBFCs were comprehensively slaughtered during the March 2020 mayhem. Bank Nifty was down 46%, with headline names including HDFC Bank, ICICI Bank, Bajaj Finance all down between 38-52%.',
            'The ensuing months were no better, with lack of movement, for an industry that was predominantly used to a physical touch was bound to cause damage, with loan origination, sale of third party products, and collection efficiencies all likely to be severely impacted.',
            'But for how long? Wouldn’t it be natural for banks to adapt, like other industries (think: IT, Consumer) ?'],
        description: ["Bank Nifty, HDFC Bank, ICICI Bank are down between 38-52 %, post the pandemic, reporting higher provisions, limited loan origination growth & decreased collection efficiencies. But for how long?"],
        startTime: 1604309400000,
        levels: [43],
    },
    {
        id: 5,
        title: "Pharma in demand 🔍",
        stocks: [companies.SUNPHARMA, companies.DIVISLAB, companies.IPCALAB, companies.CIPLA],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Bullish Flag'],
        shortDescription: "Pharma stocks survived the March 2020 onslaught (relatively), with their services in demand (duh!). After an initial up-move, prices took a breather forming multiple interesting patterns on the chart. What direction did they eventually take though?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 6,//6% more than invested
        detailDescription: ['While demand for pharmaceutical products is high, lockdowns & limited movement are likely to greatly increase supply side challenges, significantly impacting manufacturing & distribution capabilities. The initial up-move, post the March 2020 mayhem has led to good movement across Pharma names, but for how long?',
            'Q4FY20 results are expected by the end of May 2020 (across cos), with limited information availability prior to that, prices are likely to take a pause and consolidate. Do stocks continue their upward momentum & more importantly, what patterns form during this period?'],

        description: ["Pharma stocks survived the March 2020 onslaught (relatively), with their services in demand (duh!). After an initial up-move, prices took a breather forming multiple interesting patterns on the chart. What direction did they eventually take though?"],
        startTime: 1588757400000,
        levels: [33],
    },
]
const copies = {
    1: "Support is denoted by multiple touches of price without a breakthrough of the level",
    6: "Resistance is denoted by multiple touches of price without a breakthrough of the level",
    11: "An Expanded Range Candle (ERC) is classified as a single candle recording a sizable up move (+3%), with the base of an ERC Candle acting as a potential Support Line. Prices would tend to bounce up around support levels making a long trade an ideal decision",
    20: "Prices have been touching a falling line and getting pushed down; When this occurs at multiple points we can say that the prices have been taking resistance along a falling trendline. In this instance, prices breaks the trendline, and not maintaining the it; thus the prices can be classified as breakouts",
    13: "Prices have been touching a rising line and bouncing up; When this occurs at multiple points (3) we can say that the prices have been taking support along a rising trendline. As the prices tend to bounce back, the initial reading indicates that the stock is in an upward trajectory (go Long)",
    10: "A Red Expanded Range Candle (ERC) is classified as a single candle recording a sizable down move (-3%), with the top of the red ERC candle acting as a potential resistance line. Prices would tend to get pushed down around resistance levels making a short trade an ideal decision",
    22: "Prices have been trading between two lines, forming a M pattern. This pattern is called Double top pattern, prices tend to give a breakout below the support and the momentum continues (downward direction).  In this instance, prices break the support level (not maintaining the support level); thus the prices can be classified as breakdowns",
    23: "Prices have been trading between two lines. This pattern is called Triple bottom pattern, prices tend to give a breakout above the resistance and the momentum continues (upward direction). In this instance, prices break the resistance level (not maintaining the resistance level); thus the prices can be classified as break-outs",
}
const headline = [
    {
        levels: [1, 3, 9, 13, 15, 27],
        possiblecopies: ["The stock that does not correct?", "The strongest level of all time?", "Time for a rebound?"],
    },
    {
        levels: [2, 4, 10, 14, 16, 30],
        possiblecopies: ["The struggle is real", "The strongest level of all time?", "Time for a rebound?"],
    },
    {
        levels: [5, 7, 11, 17, 19, 22, 24, 26, 29, 32, 34, 35, 37, 39, 42],
        possiblecopies: ["Upcoming weakness?", "Can stoop down to such a level?", "Shoot! That doesn't look right"],
    },
    {
        levels: [6, 8, 12, 18, 20, 21, 23, 25, 28, 31, 33, 36, 38, 40, 41],
        possiblecopies: ["All the way up?", "We cruising!", "Break it to make it"]
    },
    {
        levels: [43],
        possiblecopies: ["Breakout from range", "Mini-consolidation and breakout?", "Breaking the parent candle", "Out of the inside bar?"]
    },
    {
        levels: [33],
        possiblecopies: ["Out of fallout?", "Breaking the falling trendline?", "Out of the falling range?", "Out of the falling channel?"]
    }
]

module.exports = { companies, exercises, headline, copies, stocks }