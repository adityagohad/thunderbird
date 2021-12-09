const placeHolderIcon = "https://logothunderbird.s3.ap-south-1.amazonaws.com/";

var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "BANKNIFTY", "BATA", "BERGEPAINT", "BHARTIAIRTEL", "BRITANNIA", "CADILA", "CIPLA", "COALINDIA", "CRISIL", "DIVILAB", "DMART", "EXIDE", "GAIL", "GODREJ", "GUJRATGAS", "HDFCBANK", "HERO", "HINDALCO", "HUL", "ICICIBANK", "IDEA", "INFY", "IPCA", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL", "MOTHERSUMI", "NIFTY", "OBEROI", "PEL", "PIDILITE", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEM", "VBL", "WIPRO", "YESBANK"];

const companies = {
    ACC: {
        ticker: "ACC",
        icon: placeHolderIcon + "ACC" + ".jpg",
        name: "ACC Limited",
    },
    ADANIENT: {
        ticker: "ADANIENT",
        icon: placeHolderIcon + "ADANIENT" + ".jpg",
        name: "Adani Enterprises Limited",
    },
    ADANIPORTS: {
        ticker: "ADANIPORTS",
        icon: placeHolderIcon + "ADANIPORTS" + ".jpg",
        name: "Adani Ports and Special Economic Zone Limited",
    },
    ASIANPAINT: {
        ticker: "ASIANPAINT",
        icon: placeHolderIcon + "ASIANPAINT" + ".jpg",
        name: "Asian Paints Limited",
    },
    BATA: {
        ticker: "BATAINDIA",
        icon: placeHolderIcon + "BATAINDIA" + ".jpg",
        name: "Bata India Limited"
    },
    BRITANNIA: {
        ticker: "BRITANNIA",
        icon: placeHolderIcon + "BRITANNIA" + ".jpg",
        name: "Britannia Industries"
    },
    BERGERPAINT: {
        ticker: "BERGERPAINT",
        icon: placeHolderIcon + "BERGERPAINT" + ".jpg",
        name: "Berger Paints Limited",
    },
    BAJFINANCE: {
        ticker: "BAJFINANCE",
        icon: placeHolderIcon + "BAJFINANCE" + ".jpg",
        name: "Bajaj Finance Limited",
    },
    BHARTIARTL: {
        ticker: "BHARTIARTL",
        icon: placeHolderIcon + "BHARTIARTL" + ".jpg",
        name: "Bharti Airtel Limited"
    },
    CADILA: {
        ticker: "CADILA",
        icon: placeHolderIcon + "CADILA" + ".jpg",
        name: "Cadila Healthcare Limited",
    },
    CIPLA: {
        ticker: "CIPLA",
        icon: placeHolderIcon + "CIPLA" + ".jpg",
        name: "Cipla Limited",
    },
    COALINDIA: {
        ticker: "COALINDIA",
        icon: placeHolderIcon + "COALINDIA" + ".jpg",
        name: "Coal India Limited",
    },
    CRISIL: {
        ticker: "CRISIL",
        icon: placeHolderIcon + "CRISIL" + ".jpg",
        name: "CRISIL Limited",
    },
    DIVISLAB: {
        ticker: "DIVISLAB",
        icon: placeHolderIcon + "DIVISLAB" + ".jpg",
        name: "Divi's Labratories Limited",
    },
    DMART: {
        ticker: "DMART",
        icon: placeHolderIcon + "DMART" + ".jpg",
        name: "Avenue Supermarts Limited",
    },
    EXIDEIND: {
        ticker: "EXIDEIND",
        icon: placeHolderIcon + "EXIDEIND" + ".jpg",
        name: "Exide Industries Limited",
    },
    GAIL: {
        ticker: "GAIL",
        icon: placeHolderIcon + "GAIL" + ".jpg",
        name: "Gail (India) Limited",
    },
    GODREJPROP: {
        ticker: "GODREJPROP",
        icon: placeHolderIcon + "GODREJPROP" + ".jpg",
        name: "Godrej Properties Limited",
    },
    GUJGADLTD: {
        ticker: "GUJGASLTD",
        icon: placeHolderIcon + "GUJGASLTD" + ".jpg",
        name: "Gujarat Gas Limited",
    },
    HDFCBANK: {
        ticker: "HDFCBANK",
        icon: placeHolderIcon + "HDFCBANK" + ".jpg",
        name: "HDFC Bank Limited",
    },
    HEROMOTOCO: {
        ticker: "HEROMOTOCO",
        icon: placeHolderIcon + "HEROMOTOCO" + ".jpg",
        name: "Hero MotoCorp Limited",
    },
    HINDUNILVR: {
        ticker: "HINDUNILVR",
        icon: placeHolderIcon + "HINDUNILVR" + ".jpg",
        name: "Hindustan Unilever Limited",
    },
    ICICIBANK: {
        ticker: "ICICIBANK",
        icon: placeHolderIcon + "ICICIBANK" + ".jpg",
        name: "ICICI Bank Limited",
    },
    IDEA: {
        ticker: "IDEA",
        icon: placeHolderIcon + "IDEA" + ".jpg",
        name: "Vodafone Idea Limited",
    },
    INFY: {
        ticker: "INFY",
        icon: placeHolderIcon + "INFY" + ".jpg",
        name: "Infosys Limited",
    },
    IPCALAB: {
        ticker: "IPCALAB",
        icon: placeHolderIcon + "IPCALAB" + ".jpg",
        name: "IPCA Labratories Limited",
    },
    ITC: {
        ticker: "ITC",
        icon: placeHolderIcon + "ITC" + ".jpg",
        name: "ITC Limited",
    },
    JETAIRWAYS: {
        ticker: "JETAIRWAYS",
        icon: placeHolderIcon + "JETAIRWAYS" + ".jpg",
        name: "Jet Airways (India) Limited",
    },
    JSWSTEEL: {
        ticker: "JSWSTEEL",
        icon: placeHolderIcon + "JSWSTEEL" + ".jpg",
        name: "JSW Steel Limited",
    },
    MARUTI: {
        ticker: "MARUTI",
        icon: placeHolderIcon + "MARUTI" + ".jpg",
        name: "Exide Suzuki India Limited",
    },
    MCDOWELL_N: {
        ticker: "MCDOWELL-N",
        icon: placeHolderIcon + "MCDOWELL-N" + ".jpg",
        name: "United Spirits Limited",
    },
    MOTHERSUMI: {
        ticker: "MOTHERSUMI",
        icon: placeHolderIcon + "MOTHERSUMI" + ".jpg",
        name: "Motherson Sumi Systems Limited",
    },
    NIFTY_50: {
        ticker: "NIFTY_50",
        icon: placeHolderIcon + "NIFTY_50" + ".jpg",
        name: "NIFTY 50",
    },
    OBEROIRLTY: {
        ticker: "OBEROIRLTY",
        icon: placeHolderIcon + "OBEROIRLTY" + ".jpg",
        name: "Oberoi Realty Limited",
    },
    PEL: {
        ticker: "PEL",
        icon: placeHolderIcon + "PEL" + ".jpg",
        name: "Piramal Enterprises Limited",
    },
    PIDILITIND: {
        ticker: "PIDILITIND",
        icon: placeHolderIcon + "PIDILITIND" + ".jpg",
        name: "Pidilite Industries Limited",
    },
    RELIANCE: {
        ticker: "RELIANCE",
        icon: placeHolderIcon + "RELIANCE" + ".jpg",
        name: "Reliance Industries Limited",
    },
    SBIN: {
        ticker: "SBIN",
        icon: placeHolderIcon + "SBIN" + ".jpg",
        name: "State Bank of India",
    },
    SUNPHARMA: {
        ticker: "SUNPHARMA",
        icon: placeHolderIcon + "SUNPHARMA" + ".jpg",
        name: "Sun Pharmaceuticals Industries Limited",
    },
    TATAMOTORS: {
        ticker: "TATAMOTORS",
        icon: placeHolderIcon + "TATAMOTORS" + ".jpg",
        name: "Tata Motors Limited",
    },
    TATAPOWER: {
        ticker: "TATAPOWER",
        icon: placeHolderIcon + "TATAPOWER" + ".jpg",
        name: "Tata Power Company Limited",
    },
    TATASTEEL: {
        ticker: "TATASTEEL",
        icon: placeHolderIcon + "TATASTEEL" + ".jpg",
        name: "Tata Steel Limited",
    },
    TCS: {
        ticker: "TCS",
        icon: placeHolderIcon + "TCS" + ".jpg",
        name: "Tata Consultancy Services Limited",
    },
    TRENT: {
        ticker: "TRENT",
        icon: placeHolderIcon + "TRENT" + ".jpg",
        name: "Trent Limited",
    },
    ULTRACEMCO: {
        ticker: "ULTRACEMCO",
        icon: placeHolderIcon + "ULTRACEMCO" + ".jpg",
        name: "UltraTech Cement Limited",
    },
    VBL: {
        ticker: "VBL",
        icon: placeHolderIcon + "VBL" + ".jpg",
        name: "Varun Beverages Limited",
    },
    WIPRO: {
        ticker: "WIPRO",
        icon: placeHolderIcon + "WIPRO" + ".jpg",
        name: "Wipro Limited",
    },
    NIFTYBANK: {
        ticker: "NIFTYBANK",
        icon: placeHolderIcon + "NIFTYBANK" + ".jpg",
        name: "Bank Nifty",
    },
    YESBANK: {
        ticker: "YESBANK",
        icon: placeHolderIcon + "YESBANK" + ".jpg",
        name: "Yes Bank",
    }
}

const exercises = [
    {
        id: 1,
        title: "Support and Resistance (Basics)",
        description: ["The concepts of trading level support and resistance are undoubtedly two of the most highly discussed attributes of technical analysis."],
        stocks: [companies.BERGERPAINT, companies.BRITANNIA, companies.CADILA, companies.ADANIENT, companies.ADANIPORTS, companies.NIFTYBANK, companies.BAJFINANCE, companies.ACC, companies.ASIANPAINT, companies.YESBANK],
        startTime: 1568020797000,
        levels: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        id: 2,
        title: "Support and Resistance (Advanced)",
        description: ["Trendlines are easily recognizable lines that traders draw on charts to connect a series of prices together or show some data's best fit"],
        stocks: [companies.BERGERPAINT, companies.BRITANNIA, companies.CADILA, companies.ADANIENT, companies.ADANIPORTS, companies.NIFTYBANK, companies.BAJFINANCE, companies.ACC, companies.ASIANPAINT, companies.YESBANK],
        startTime: 1568020797000,
        levels: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
        id: 3,
        title: "Tops and Bottoms",
        description: ["This includes bullish/bearish chart pattern used in technical analysis that's characterized by two/three equal lows/highs followed by a breakout/breakdown above/below the resistance/support level."],
        stocks: [companies.BERGERPAINT, companies.BRITANNIA, companies.CADILA, companies.ADANIENT, companies.ADANIPORTS, companies.NIFTYBANK, companies.BAJFINANCE, companies.ACC, companies.ASIANPAINT, companies.YESBANK],
        startTime: 1568020797000,
        levels: [21, 22, 23, 24]
    }
]

module.exports = { companies, exercises }