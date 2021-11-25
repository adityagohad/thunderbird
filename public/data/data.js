const placeHolderIcon = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qp8rxi2jae4uinry2dv7";

const companies = {
    ADANIPORTS: {
        ticker: "ADANIPORTS",
        icon: placeHolderIcon,
        name: "Adani Ports",
    },
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
    BERGERPAINT: {
        ticker: "BERGERPAINT",
        icon: placeHolderIcon,
        name: "Berger Paint",
    },
    ASIANPAINT: {
        ticker: "ASIANPAINT",
        icon: placeHolderIcon,
        name: "Asian Paints",
    },
    NIFTYBANK: {
        ticker: "NIFTYBANK",
        icon: placeHolderIcon,
        name: "Bank Nifty",
    }
}

const exercises = [
    {
        id: 1,
        title: "Fancy Price Action shit",
        description: ["Nulla facilisi. In finibus ipsum sed eros elementum", "at fringilla odio tempus. Sed aliquam"],
        stocks: [companies.ACC, companies.ADANIENT],
        startTime: 1568020797000,
        levels: [1, 2, 3]
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