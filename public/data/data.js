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
        title: "Price Action",
        description: ["Let's implement a methodology for financial market analysis using basic price movement across time"],
        stocks: [companies.BERGEPAINT, companies.BRITANNIA, companies.CADILAHC, companies.ADANIENT, companies.ADANIPORTS, companies.NIFTYBANK, companies.BAJFINANCE, companies.ACC, companies.ASIANPAINT, companies.YESBANK, companies.VBL, companies.WIPRO, companies.ULTRACEMCO, companies.TRENT, companies.TCS, companies.TATASTEEL],
        startTime: 1568627100000,
        levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
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
    }
]

module.exports = { companies, exercises, headline, copies, stocks }