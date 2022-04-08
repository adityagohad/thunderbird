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
    HINDALCO: {
        ticker: "HINDALCO",
        icon: placeHolderIcon + "HINDALCO" + ".jpg",
        sector: sectors.METAL,
        name: "Hindalco",
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
        id: 13,
        title: "Resistance along falling trendline",
        stocks: [companies.BERGEPAINT],
        difficulty: "Moderate",
        minCapitalRequirement: 100000,
        concepts: ['Resistance', 'Falling Trendline'],
        filters: ["Trending Stocks "],
        shortDescription: "#2 paint player in the country, Berger Paint is a strongly owned counter, and part of Nifty F&O. Some of the patterns in this stock repeat frequently,",
        timeFrames: '5 min',
        tradeType: [' Intraday'],
        winCriteria: 0.2,//0.2% more than invested
        detailDescription: ['Falling trendline patterns in intraday trades indicates short correction in prices. Taking short trades (unless there is a breakout) is the way to go and earn some bucks. These patterns occur multiple times every 1-2 months', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <7 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["#2 paint player in the country, Berger Paint is a strongly owned counter, and part of Nifty F&O. Some of the patterns in this stock repeat frequently,"],
        startTime: 1640779200000 - 19800000,//14 Sept 21 13: 45,
        endTime: 1640791800000 - 19800000,//17 Sept 21 12: 00,
        loadtime: 1632916800000 - 19800000,//14 June 21 13: 45,
        levels: [16],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["what-are-trendlines", "what-are-trendlines-1"] //slug
    },
    {
        id: 6,
        title: "Breaking out of Falling Channel",
        stocks: [companies.WIPRO],
        difficulty: "Moderate",
        minCapitalRequirement: 100000,
        concepts: ['Falling Channel'],
        filters: ["Trending Stocks "],
        shortDescription: "Stocks move in cycles, with repeating patterns. The pattern in this exercise is a constant in Wipro, happening previously in early 2021 and 2019. Trade your way through it and see if you get it right?",
        timeFrames: '60 min',
        tradeType: ['Intraday'],
        winCriteria: 3,//3% more than invested
        detailDescription: ['Prices are trading within 2 falling trend lines, making a falling channel pattern. This pattern repeats itself often in Wipro, previously occurring in 2019 and 2021, with the stock reacting in similar fashion each time. Does the same happen this time around as well? And what’s the likelihood of the pattern repeating in the future?', 'Stocks move in cycles, and patterns repeat often (albeit at different levels). Play this single trade exercise, which gets over in <7 minutes, and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["Stocks move in cycles, with repeating patterns. The pattern in this exercise is a constant in Wipro, happening previously in early 2021 and 2019. Trade your way through it and see if you get it right?"],
        startTime: 1626253200000 - 19800000,
        endTime: 1626274800000 - 19800000,
        loadtime: 1618390800000 - 19800000,
        levels: [31],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["what-is-a-trend-channel"],
    },
    {
        id: 7,
        title: "Breakout in Double Bottom",
        stocks: [companies.ITC],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Double Bottom'],
        filters: ["Trending Stocks "],
        shortDescription: "Everyone's favourite company, ITC doesn't believe in shareholder returns 😜. Or does it? There are patterns at play here as well, ones that have repeated in early 2021 and mid 2020. Play this exercise and know what to expect in the future?",
        timeFrames: '15 min',
        tradeType: ['BTST'],
        winCriteria: 1,//1% more than invested
        detailDescription: ['Double Top patterns are interesting, as they invariably form strong support points with up-moves dependent on ability to break resistance points successfully. ITC has made multiple double top patterns in the past, most notably in early 2021, and mid 2020.', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <15 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["Everyone's favourite company, ITC doesn't believe in shareholder returns 😜. Or does it? There are patterns at play here as well, ones that have repeated in early 2021 and mid 2020. Play this exercise and know what to expect in the future?"],
        startTime: 1640251800000 - 19800000,
        endTime: 1640598300000 - 19800000,
        loadtime: 1632387600000 - 19800000,
        levels: [21],
        bottomColor: "0xFFFF512E",
        topColor: "0xFFF09719",
        resources: ["double-bottom", "what-is-a-double-top-and-double-bottom"],
    },
    {
        id: 8,
        title: "Breakout of Resistance Band",
        stocks: [companies.ICICIBANK],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Resistance Band', 'Breakout'],
        filters: ["Trending Stocks "],
        shortDescription: "ICICI Bank is a strong Nifty50 name, with large daily traded volumes. It's bread & butter for traders, with ample liquidity and opportunity, both via patterns & price movement (thanks ITC 🙄) ",
        timeFrames: '15 min',
        tradeType: ['Intraday'],
        winCriteria: 1,//1% more than invested
        detailDescription: ['Resistance band breakouts is one of the most frequently made patterns on a chart. This pattern has occurred in ICICI Bank thrice in 2021 alone, each time rewarding traders with strong moves.', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <7 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["ICICI Bank is a strong Nifty50 name, with large daily traded volumes. It's bread & butter for traders, with ample liquidity and opportunity, both via patterns & price movement (thanks ITC 🙄) "],
        startTime: 1641374100000 - 19800000,
        endTime: 1641462300000 - 19800000,
        loadtime: 1633425300000 - 19800000,
        levels: [8],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["what-is-support-band-and-resistance-band", "what-is-a-resistance-band", "resistance-band-breakout-trade", "what-is-a-support-band", "https://www.youtube.com/embed/DMvLJCVpfCI"], //slug
    },
    {
        id: 9,
        title: "Support: Demand zone max!",
        stocks: [companies.ADANIPORTS],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Role Reversal'],
        filters: ["Trending Stocks "],
        shortDescription: "Adani stocks have known only one direction in the recent past 😜, with the ports business now the largest in the country. This pattern is a constant in the stock, repeating twice in the span of 2 months. ",
        timeFrames: '15 min',
        tradeType: [' BTST'],
        winCriteria: 1.25,//1.25% more than invested
        detailDescription: ['One of the simplest, and yet most effective patterns to spot and trade for traders is Support & Role Reversal. Getting key price action tools right is key in getting your basics going. Support patterns are a constant in Adani stocks, with this pattern repeating twice in 2 months previously, providing strong moves for traders in the process. ', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <12 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["Adani stocks have known only one direction in the recent past 😜, with the ports business now the largest in the country. This pattern is a constant in the stock, repeating twice in the span of 2 months. "],
        startTime: 1641472200000 - 19800000,
        endTime: 1641811500000 - 19800000,
        loadtime: 1633523400000 - 19800000,
        levels: [1],
        bottomColor: "0xFFFF512E",
        topColor: "0xFFF09719",
        resources: ["support-taken", "support-taken-l0jz4yv7", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 10,
        title: "Can't break through this resistance",
        stocks: [companies.PEL],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Resistance'],
        filters: ["Trending Stocks "],
        shortDescription: "A diversified player, Piramal Enterprises has had a coloured past, with interests across healthcare, pharmaceuticals, manufacturing, and now financial services & real estate. ",
        timeFrames: '15 min',
        tradeType: [' BTST', 'Intraday'],
        winCriteria: 0.4,//0.4% more than invested
        detailDescription: ['Resistance patterns (taking & breaking), much like Support are the bread and butter for traders. Proficiency in spotting, by developing strong eye-ball settings is key in not getting trapped in such trades. This pattern is a frequent occurrence in Piramal Enterprises, returning twice in the span of 2 months. ', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <7 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["A diversified player, Piramal Enterprises has had a coloured past, with interests across healthcare, pharmaceuticals, manufacturing, and now financial services & real estate. "],
        startTime: 1640176200000 - 19800000,
        endTime: 1640262600000 - 19800000,
        loadtime: 1632313800000 - 19800000,
        levels: [2],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["resistance-taken", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 11,
        title: "Weaj support can't sustain?",
        stocks: [companies.GODREJPROP],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Breakdown'],
        filters: ["Trending Stocks "],
        shortDescription: "Support is a bread & butter tool for traders, with almost all trades linked to this in some form or the other, be it a bull or bear market. This battery repeats in Godrej multiple times in the last 1 month, both with the stock going up & down.",
        timeFrames: '15 min',
        tradeType: [' BTST'],
        winCriteria: 4.5,//4.5% more than invested
        detailDescription: ['Godrej Properties is one of the oldest property developers in the country, with large parcels of land in & around the Mumbai Metropolitan Region. The stock has been in a range, especially looking at the markets as a whole.', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <7 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["Support is a bread & butter tool for traders, with almost all trades linked to this in some form or the other, be it a bull or bear market. This battery repeats in Godrej multiple times in the last 1 month, both with the stock going up & down."],
        startTime: 1639750500000 - 19800000, //17 Dec 21 14: 15,
        endTime: 1640012400000 - 19800000,//20 Dec 21 15: 00,
        loadtime: 1631888100000 - 19800000,//17 Sept 21 14: 15,
        levels: [5],
        bottomColor: "0xFF402D97",
        topColor: "0xFFA7BEFE",
        resources: ["support-breakdown", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 12,
        title: "Roll reversal: Support become resistance",
        stocks: [companies.HINDALCO],
        difficulty: "Moderate",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Role Reversal'],
        filters: ["Trending Stocks "],
        shortDescription: "A strong Nifty50 name, Hindalco has ample liquidity and volatility, a staple for traders. Get your proficiency going in this household name, with multiple repeating patterns.",
        timeFrames: '60 min',
        tradeType: [' BTST'],
        winCriteria: 1,//1% more than invested
        detailDescription: ['Role Reversal patterns are tricky, but highly rewarding. Catching them early is always beneficial, with support / resistance identification key to success. This pattern has occurred 3 times in the last year in Hindalco.', 'Stocks are highly cyclical in nature, often coming back to past patterns to find comfort. Try this single trade exercise, that gets over in <7 minutes and beat the winning % threshold to master the stock, pattern and movement, for such future scenarios.'],
        description: ["A strong Nifty50 name, Hindalco has ample liquidity and volatility, a staple for traders. Get your proficiency going in this household name, with multiple repeating patterns."],
        startTime: 1631627100000 - 19800000,//14 Sept 21 13: 45,
        endTime: 1631880000000 - 19800000,//17 Sept 21 12: 00,
        loadtime: 1623678300000 - 19800000,//14 June 21 13: 45,
        levels: [45],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["role-reversal", "basics-of-price-action", "what-is-role-reversal", "what-us-role-reversal-support-band-and-resistance-band"],
    },
    {
        id: 1,
        title: "IT Sector Zooms 🚀",
        stocks: [companies.WIPRO, companies.TCS, companies.INFY],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Resistance', 'Role Reversal', 'News', 'Fundamentals'],
        filters: ["Sector Thematics "],
        shortDescription: " IT Stocks are moving from strength to strength, post Covid-19 initiated change in the business landscape. Demand for tech products is high, but does that translate to consistent stock price movement?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 19,//19% more than invested
        detailDescription: ['Covid-19 decimated the markets in the months of March and April 2020, with headline indices down over 40 % over differing periods during the 2 months.  While markets suffered, businesses began adapting, getting started on Multi-year digital transformation journeys, with the Nifty IT Index one of the first to positively react, up 22% during. Infosys, Wipro & TCS all delivered Revenue / Earnings beat in their Q1FY21 numbers in Mid July, with other IT players also posting strong results. Does the momentum continue in the short term? How strong is the rally? What role do Q2FY21 results play?'],
        description: [" IT Stocks are moving from strength to strength, post Covid-19 initiated change in the business landscape. Demand for tech products is high, but does that translate to consistent stock price movement?"],
        startTime: 1599039000000 - 19800000,
        endTime: 1604158200000 - 19800000,
        loadtime: 1591111800000 - 19800000,
        levels: [1, 2],
        bottomColor: "0xFF402D97",
        topColor: "0xFFA7BEFE",
        resources: ["support-taken", "resistance-taken", "support-taken-l0jz4yv7", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 2,
        title: "Revenge Spending in Consumer Goods 🤑",
        stocks: [companies.BRITANNIA, companies.HINDUNILVR, companies.MCDOWELL_N, companies.PIDILITIND, companies.VBL],
        difficulty: "Easy",
        minCapitalRequirement: 100000,
        concepts: ['Support', 'Resistance', 'Breakdown', 'Breakout', 'Role Reversal'],
        filters: ["Sector Thematics "],
        shortDescription: "The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May. First part of Q1 was a wipeout, with demand returning in the second half of Q1, but how did stocks react? Was there enough meat to sustain?",
        timeFrames: '15 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 11,//11% more than invested
        detailDescription: ['Demand dipped, supply became constrained, inflation pressure continued and the first part of Q1 was a wipeout.', 'The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May, with significant improvements by July’21 when cases dipped to <40k and mobility improved to 75%', 'Demand returned in the second half of Q1, with rural leading growth (relatively less affected) across categories. But was there enough to sustain the rally? And how did stocks react in the interim?'],
        description: ["The second wave severely affected mobility, dropping to 37% on the Google Mobility Index, with cases topping >400K in May. First part of Q1 was a wipeout, with demand returning in the second half of Q1, but how did stocks react? Was there enough meat to sustain?"],
        startTime: 1627637400000 - 19800000,
        endTime: 1630423800000 - 19800000,
        loadtime: 1619796600000 - 19800000,
        levels: [33],
        bottomColor: "0xFFFF512E",
        topColor: "0xFFF09719",
        resources: ["resistance-breakout", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 3,
        title: "Telcos in the time of Mukesh Ambani 😝",
        stocks: [companies.RELIANCE, companies.IDEA, companies.BHARTIARTL],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Support', 'Resistance', 'News', 'Breakout', 'Fundamentals'],
        filters: ["Sector Thematics "],
        shortDescription: "Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav, but how sustainable is this?",
        timeFrames: '15 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 14,//14% more than invested
        detailDescription: ['Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav.', 'Jio changed the landscape, slashing prices, providing bundled services, widening the scope of their offerings, and smashing records of new subscribers in the process.', 'Soon enough, competitors including Bharti, Vi followed suit, offering similar prices and packages.', 'But for how long? ARPUs were languishing around the INR 120-150 mark, with telcos needing to hike prices to run sustainable organisations. Would Mr. Ambani soften? And what about the elephant in the room? The government was still expecting massive payouts from long-overdue AGR payments.'],
        description: ["Since Mukesh Ambani decided data is the new oil, the telecom sector has gone from a multi-player market, to a duopoly (sorry Vi :P). The price for 1 GB of data is cheaper than a Vada Pav, but how sustainable is this?"],
        startTime: 1637400600000 - 19800000,
        endTime: 1640964600000 - 19800000,
        loadtime: 1627831800000 - 19800000,
        levels: [1, 2, 5, 6],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["resistance-breakout", "support-taken", "support-breakdown", "resistance-taken", "support-taken-l0jz4yv7", "basics-of-price-action", "what-is-support-and-resistance", "introduction-to-support-and-resistance"],
    },
    {
        id: 4,
        title: "Financials amid a pandemic 🙄",
        stocks: [companies.HDFCBANK, companies.ICICIBANK, companies.SBIN, companies.BAJFINANCE, companies.YESBANK, companies.NIFTYBANK],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Inside Bar', 'Breakout', 'News', 'Fundamentals'],
        filters: ["Sector Thematics "],
        shortDescription: "Bank Nifty, HDFC Bank, ICICI Bank are down between 38-52 %, post the pandemic, reporting higher provisions, limited loan origination growth & decreased collection efficiencies. But for how long?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 32,//32% more than invested
        detailDescription: ['Banks & NBFCs were comprehensively slaughtered during the March 2020 mayhem. Bank Nifty was down 46%, with headline names including HDFC Bank, ICICI Bank, Bajaj Finance all down between 38-52%.', 'The ensuing months were no better, with lack of movement, for an industry that was predominantly used to a physical touch was bound to cause damage, with loan origination, sale of third party products, and collection efficiencies all likely to be severely impacted.', 'But for how long? Wouldn’t it be natural for banks to adapt, like other industries (think: IT, Consumer) ?'],
        description: ["Bank Nifty, HDFC Bank, ICICI Bank are down between 38-52 %, post the pandemic, reporting higher provisions, limited loan origination growth & decreased collection efficiencies. But for how long?"],
        startTime: 1604309400000 - 19800000,
        endTime: 1609428600000 - 19800000,
        loadtime: 1596468600000 - 19800000,
        levels: [43],
        bottomColor: "0xFF192949",
        topColor: "0xFF4B6CB7",
        resources: ["inside-bar"],
    },
    {
        id: 5,
        title: "Pharma in demand 🔍",
        stocks: [companies.SUNPHARMA, companies.DIVISLAB, companies.IPCALAB, companies.CIPLA],
        difficulty: "Moderate",
        minCapitalRequirement: 200000,
        concepts: ['Bullish Flag', 'Breakout'],
        filters: ["Sector Thematics "],
        shortDescription: "Pharma stocks survived the March 2020 onslaught (relatively), with their services in demand (duh!). After an initial up-move, prices took a breather forming multiple interesting patterns on the chart. What direction did they eventually take though?",
        timeFrames: '60 min',
        tradeType: [' BTST', 'Intraday', 'Swing Trader'],
        winCriteria: 6,//6% more than invested
        detailDescription: ['While demand for pharmaceutical products is high, lockdowns & limited movement are likely to greatly increase supply side challenges, significantly impacting manufacturing & distribution capabilities. The initial up-move, post the March 2020 mayhem has led to good movement across Pharma names, but for how long?', 'Q4FY20 results are expected by the end of May 2020 (across cos), with limited information availability prior to that, prices are likely to take a pause and consolidate. Do stocks continue their upward momentum & more importantly, what patterns form during this period?'],
        description: ["Pharma stocks survived the March 2020 onslaught (relatively), with their services in demand (duh!). After an initial up-move, prices took a breather forming multiple interesting patterns on the chart. What direction did they eventually take though?"],
        startTime: 1588757400000 - 19800000,
        endTime: 1590939000000 - 19800000,
        loadtime: 1612193400000 - 19800000,
        levels: [33],
        bottomColor: "0xFFFF512E",
        topColor: "0xFFF09719",
        resources: ["bullish-flag", "what-is-a-flag-pattern"],
    }
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