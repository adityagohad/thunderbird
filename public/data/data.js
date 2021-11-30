const placeHolderIcon = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qp8rxi2jae4uinry2dv7";

var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "BANKNIFTY", "BATA", "BERGEPAINT", "BHARTIAIRTEL", "BRITANNIA", "CADILA", "CIPLA", "COALINDIA", "CRISIL", "DIVILAB", "DMART", "EXIDE", "GAIL", "GODREJ", "GUJRATGAS", "HDFCBANK", "HERO", "HINDALCO", "HUL", "ICICIBANK", "IDEA", "INFY", "IPCA", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL", "MOTHERSUMI", "NIFTY", "OBEROI", "PEL", "PIDILITE", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEM", "VBL", "WIPRO", "YESBANK"];

const companies = {
    ACC: {
        ticker: "ACC",
        icon: placeHolderIcon,
        name: "ACC Limited",
    },
    ADANIENT: {
        ticker: "ADANIENT",
        icon: placeHolderIcon,
        name: "Adani Enterprises Limited",
    },
    ADANIPORTS: {
        ticker: "ADANIPORTS",
        icon: placeHolderIcon,
        name: "Adani Ports and Special Economic Zone Limited",
    },
    ASIANPAINT: {
        ticker: "ASIANPAINT",
        icon: placeHolderIcon,
        name: "Asian Paints Limited",
    },
    BATA: {
        ticker: "BATAINDIA",
        icon: placeHolderIcon,
        name: "Bata India Limited"
    },
    BRITANNIA: {
        ticker: "BRITANNIA",
        icon: placeHolderIcon,
        name: "Britannia Industries"
    },
    BERGERPAINT: {
        ticker: "BERGERPAINT",
        icon: placeHolderIcon,
        name: "Berger Paints Limited",
    },
    BAJFINANCE: {
        ticker: "BAJFINANCE",
        icon: placeHolderIcon,
        name: "Bajaj Finance Limited",
    },
    BHARTIARTL: {
        ticker: "BHARTIARTL",
        icon: placeHolderIcon,
        name: "Bharti Airtel Limited"
    },
    CADILA: {
        ticker: "CADILA",
        icon: placeHolderIcon,
        name: "Cadila Healthcare Limited",
    },
    CIPLA: {
        ticker: "CIPLA",
        icon: placeHolderIcon,
        name: "Cipla Limited",
    },
    COALINDIA: {
        ticker: "COALINDIA",
        icon: placeHolderIcon,
        name: "Coal India Limited",
    },
    CRISIL: {
        ticker: "CRISIL",
        icon: placeHolderIcon,
        name: "CRISIL Limited",
    },
    DIVISLAB: {
        ticker: "DIVISLAB",
        icon: placeHolderIcon,
        name: "Divi's Labratories Limited",
    },
    DMART: {
        ticker: "DMART",
        icon: placeHolderIcon,
        name: "Avenue Supermarts Limited",
    },
    EXIDEIND: {
        ticker: "EXIDEIND",
        icon: placeHolderIcon,
        name: "Exide Industries Limited",
    },
    GAIL: {
        ticker: "GAIL",
        icon: placeHolderIcon,
        name: "Gail (India) Limited",
    },
    GODREJPROP: {
        ticker: "GODREJPROP",
        icon: placeHolderIcon,
        name: "Godrej Properties Limited",
    },
    GUJGADLTD: {
        ticker: "GUJGASLTD",
        icon: placeHolderIcon,
        name: "Gujarat Gas Limited",
    },
    HDFCBANK: {
        ticker: "HDFCBANK",
        icon: placeHolderIcon,
        name: "HDFC Bank Limited",
    },
    HEROMOTOCO: {
        ticker: "HEROMOTOCO",
        icon: placeHolderIcon,
        name: "Hero MotoCorp Limited",
    },
    HINDUNILVR: {
        ticker: "HINDUNILVR",
        icon: placeHolderIcon,
        name: "Hindustan Unilever Limited",
    },
    ICICIBANK: {
        ticker: "ICICIBANK",
        icon: placeHolderIcon,
        name: "ICICI Bank Limited",
    },
    IDEA: {
        ticker: "IDEA",
        icon: placeHolderIcon,
        name: "Vodafone Idea Limited",
    },
    INFY: {
        ticker: "INFY",
        icon: placeHolderIcon,
        name: "Infosys Limited",
    },
    IPCALAB: {
        ticker: "IPCALAB",
        icon: placeHolderIcon,
        name: "IPCA Labratories Limited",
    },
    ITC: {
        ticker: "ITC",
        icon: placeHolderIcon,
        name: "ITC Limited",
    },
    JETAIRWAYS: {
        ticker: "JETAIRWAYS",
        icon: placeHolderIcon,
        name: "Jet Airways (India) Limited",
    },
    JSWSTEEL: {
        ticker: "JSWSTEEL",
        icon: placeHolderIcon,
        name: "JSW Steel Limited",
    },
    MARUTI: {
        ticker: "MARUTI",
        icon: placeHolderIcon,
        name: "Exide Suzuki India Limited",
    },
    MCDOWELL_N: {
        ticker: "MCDOWELL-N",
        icon: placeHolderIcon,
        name: "United Spirits Limited",
    },
    MOTHERSUMI: {
        ticker: "MOTHERSUMI",
        icon: placeHolderIcon,
        name: "Motherson Sumi Systems Limited",
    },
    NIFTY_50: {
        ticker: "NIFTY_50",
        icon: placeHolderIcon,
        name: "NIFTY 50",
    },
    OBEROIRLTY: {
        ticker: "OBEROIRLTY",
        icon: placeHolderIcon,
        name: "Oberoi Realty Limited",
    },
    PEL: {
        ticker: "PEL",
        icon: placeHolderIcon,
        name: "Piramal Enterprises Limited",
    },
    PIDILITIND: {
        ticker: "PIDILITIND",
        icon: placeHolderIcon,
        name: "Pidilite Industries Limited",
    },
    RELIANCE: {
        ticker: "RELIANCE",
        icon: placeHolderIcon,
        name: "Reliance Industries Limited",
    },
    SBIN: {
        ticker: "SBIN",
        icon: placeHolderIcon,
        name: "State Bank of India",
    },
    SUNPHARMA: {
        ticker: "SUNPHARMA",
        icon: placeHolderIcon,
        name: "Sun Pharmaceuticals Industries Limited",
    },
    TATAMOTORS: {
        ticker: "TATAMOTORS",
        icon: placeHolderIcon,
        name: "Tata Motors Limited",
    },
    TATAPOWER: {
        ticker: "TATAPOWER",
        icon: placeHolderIcon,
        name: "Tata Power Company Limited",
    },
    TATASTEEL: {
        ticker: "TATASTEEL",
        icon: placeHolderIcon,
        name: "Tata Steel Limited",
    },
    TCS: {
        ticker: "TCS",
        icon: placeHolderIcon,
        name: "Tata Consultancy Services Limited",
    },
    TRENT: {
        ticker: "TRENT",
        icon: placeHolderIcon,
        name: "Trent Limited",
    },
    ULTRACEMCO: {
        ticker: "ULTRACEMCO",
        icon: placeHolderIcon,
        name: "UltraTech Cement Limited",
    },
    VBL: {
        ticker: "VBL",
        icon: placeHolderIcon,
        name: "Varun Beverages Limited",
    },
    WIPRO: {
        ticker: "WIPRO",
        icon: placeHolderIcon,
        name: "Wipro Limited",
    },
    NIFTYBANK: {
        ticker: "NIFTYBANK",
        icon: placeHolderIcon,
        name: "Bank Nifty",
    },
    YESBANK: {
        ticker: "YESBANK",
        icon: placeHolderIcon,
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