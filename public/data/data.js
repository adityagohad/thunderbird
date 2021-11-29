const placeHolderIcon = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qp8rxi2jae4uinry2dv7";

var stocks = ["ACC", "ADANIENT", "ADANIPORTS", "ASIANPAINT", "BAJFINANCE", "BANKNIFTY", "BATA", "BERGEPAINT", "BHARTIAIRTEL", "BRITANNIA", "CADILA", "CIPLA", "COALINDIA", "CRISIL", "DIVILAB", "DMART", "EXIDE", "GAIL", "GODREJ", "GUJRATGAS", "HDFCBANK", "HERO", "HINDALCO", "HUL", "ICICIBANK", "IDEA", "INFY", "IPCA", "ITC", "JETAIRWAYS", "JSWSTEEL", "MARUTI", "MCDOWELL", "MOTHERSUMI", "NIFTY", "OBEROI", "PEL", "PIDILITE", "RELIANCE", "SBIN", "SUNPHARMA", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TCS", "TRENT", "ULTRACEM", "VBL", "WIPRO", "YESBANK"];

const companies = {
    ACC: {
        ticker: "ACC",
        icon: placeHolderIcon,
        name: "ACC",
    },
    ADANIENT: {
        ticker: "ADANIENT",
        icon: placeHolderIcon,
        name: "Adani Enterprises",
    },
    ADANIPORTS: {
        ticker: "ADANIPORTS",
        icon: placeHolderIcon,
        name: "Adani Ports",
    },
    ASIANPAINT: {
        ticker: "ASIANPAINT",
        icon: placeHolderIcon,
        name: "Asian Paints",
    },
    BRITANNIA: {
        ticker: "BRITANNIA",
        icon: placeHolderIcon,
        name: "Britannia"
    },
    BERGERPAINT: {
        ticker: "BERGERPAINT",
        icon: placeHolderIcon,
        name: "Berger Paint",
    },
    BAJFINANCE: {
        ticker: "BAJFINANCE",
        icon: placeHolderIcon,
        name: "Bajaj Finance",
    },
    CADILA: {
        ticker: "CADILA",
        icon: placeHolderIcon,
        name: "Cadila Healthcare",
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
        title: "Fancy Price Action shit",
        description: ["Nulla facilisi. In finibus ipsum sed eros elementum", "at fringilla odio tempus. Sed aliquam"],
        stocks: [companies.BERGERPAINT, companies.BRITANNIA, companies.CADILA, companies.ADANIENT, companies.ADANIPORTS, companies.NIFTYBANK, companies.BAJFINANCE, companies.ACC, companies.ASIANPAINT, companies.YESBANK],
        startTime: 1568020797000,
        levels: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        id: 2,
        title: "Test Price Action shit",
        description: ["Nulla facilisi. In finibus ipsum sed eros elementum udsvbosvn kjnevkjsvkjs vkjsdk jsjk sdkjv sdkjnskjl ksgjkWLGKJsgkjB S", "at fringilla odio tempus. Sed aliquam"],
        stocks: [companies.BERGERPAINT, companies.ASIANPAINT],
        startTime: 1568020797000,
        levels: [1, 2, 3]
    },
    {
        id: 3,
        title: "Test Price Action shit",
        description: ["Nulla facilisi. In finibus ipsum sed eros elementum", "at fringilla odio tempus. Sed aliquam"],
        stocks: [companies.BERGERPAINT, companies.ASIANPAINT],
        startTime: 1568020797000,
        levels: [1, 2, 3]
    }
]

module.exports = { companies, exercises }