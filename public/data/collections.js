const Orientation = {
    verticle: 1,
    horizontal: 2,
    grid_2x2: 3,
    grid_2xn: 4,
}

const Type = {
    infographic: "infographic",
    blog: "blog",
    newsletter: "newsletter",
    video: "video",
    quiz: "quiz",
}
const dummy = [
    {
        orientation: Orientation.verticle,
        data: [{
            id: 1,
            type: "blog",
            title: "How to Open a Demat Account",
            url: "https://finlearnacademy.com/blog/how-to-open-a-demat-account/",
            thumbnail: "https://imgix.cosmicjs.com/911429e0-a10c-11ec-a634-2f1716dd45af-How-to-Open-a-Demat-Account-Everything-you-need-to-know-e1646907962592.png",
        }, {
            id: 1,
            title: "Brands operated by ITC",
            type: "infographic",
            description: "ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n\nDon't forget to swipe left and capitalise on an opportunity in ITC",
            thumbnail: "https://imgix.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
            data: ["https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png", "https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png"],
        }, {
            id: 1,
            type: "video",
            title: "Stock Markets Recap Week Of 25th February 2022",
            url: "https://www.youtube.com/watch?v=xwcVeTdzjTQ",
            thumbnail: "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
        }]
    },
    {
        orientation: Orientation.verticle,
        data: [
            {
                id: 1,
                type: "quiz",
                title: "Let's See How Much You know About the FMCG Sector?",
                url: "https://finlearnacademy.com/quiz/sector-analysis-fmcg/",
                thumbnail: "https://cdn.cosmicjs.com/24f37a90-bff2-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
            },
            {
                id: 2,
                type: "quiz",
                title: "Conceptual Quiz on Trend",
                url: "https://finlearnacademy.com/quiz/conceptual-quiz-on-trend/",
                thumbnail: "https://cdn.cosmicjs.com/d2eaa7a0-bff1-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
            }
        ]
    }
];

const future_and_options = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                id: 1,
                type: Type.blog,
                title: "Why Opt for an Options Trading Course",
                thumbnail: "https://imgix.cosmicjs.com/2108c0f0-bff4-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/blog/why-opt-for-an-options-trading-course/",
                date: "2022-04-04",
                consumption_meta_string: "5 min"
            }
        ],
    },
    {
        orientation: Orientation.grid_2x2,
        data: [
            {
                id: 1,
                type: Type.quiz,
                title: "PCR and Options Strategy",
                thumbnail: "https://imgix.cosmicjs.com/73fe4200-bfed-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
                url: "https://finlearnacademy.com/quiz/pcr-and-option-strategy/",
                date: "2022-04-08",
                consumption_meta_string: "14 questions"
            },
            {
                id: 2,
                type: Type.quiz,
                title: "Let's Get Started with Options",
                thumbnail: "https://imgix.cosmicjs.com/3b86ff20-bfed-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
                url: "https://finlearnacademy.com/quiz/options-quiz-technical-analysis/",
                date: "2022-01-18",
                consumption_meta_string: "8 questions"
            },
            {
                id: 3,
                type: Type.quiz,
                title: "Intrinsic Value and Time Value",
                thumbnail: "https://imgix.cosmicjs.com/12cf2610-bfee-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/quiz/intrinsic-value-and-time-value/",
                date: "2022-04-15",
                consumption_meta_string: "9 questions"
            }
        ]
    }
];

const long_term_investing = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                id: 1,
                type: Type.blog,
                title: "Cash Account vs Margin Account",
                thumbnail: "https://imgix.cosmicjs.com/494e7740-bff3-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/blog/cash-account-vs-margin-account/",
                date: "2022-04-19",
                consumption_meta_string: "6 min"
            },
            {
                id: 2,
                type: Type.blog,
                title: "What is Return on Investment?",
                thumbnail: "https://imgix.cosmicjs.com/76d3f310-bff4-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/blog/what-is-return-on-investment/",
                date: "2022-04-12",
                consumption_meta_string: "12 min"
            }
        ],
    },
    {
        orientation: Orientation.grid_2x2,
        data: [
            {
                id: 1,
                type: Type.quiz,
                title: "Fundamental Analysis: A Full Guide to Financial Planning",
                thumbnail: "https://imgix.cosmicjs.com/8c520570-bfee-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
                url: "https://finlearnacademy.com/quiz/fundamental-analysis-a-full-guide-to-financial-planning/",
                date: "2021-10-29",
                consumption_meta_string: "10 questions"
            },
            {
                id: 2,
                type: Type.quiz,
                title: "Let's Discover What is D/E",
                thumbnail: "https://imgix.cosmicjs.com/04eea380-bfef-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/quiz/lets-discover-what-is-d-e/",
                date: "2022-04-06",
                consumption_meta_string: "10 questions"
            },
            {
                id: 3,
                type: Type.quiz,
                title: "It's All About Profit",
                thumbnail: "https://imgix.cosmicjs.com/27493c50-bff0-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/quiz/its-all-about-profit/",
                date: "2022-04-13",
                consumption_meta_string: "10 questions"
            }
        ]
    }
];

const short_term_investing = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                id: 1,
                type: Type.blog,
                title: "How to Identify Your Trading Style",
                thumbnail: "https://imgix.cosmicjs.com/b815fe50-bff3-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/blog/how-to-identify-your-trading-style/",
                date: "2022-04-13",
                consumption_meta_string: "5 min"
            }
        ],
    },
    {
        orientation: Orientation.grid_2x2,
        data: [
            {
                id: 1,
                type: Type.quiz,
                title: "Let's See How Much You know About the FMCG Sector?",
                thumbnail: "https://imgix.cosmicjs.com/24f37a90-bff2-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
                url: "https://finlearnacademy.com/quiz/sector-analysis-fmcg/",
                date: "2021-10-12",
                consumption_meta_string: "14 questions"
            },
            {
                id: 2,
                type: Type.quiz,
                title: "What's up with Bank Nifty?",
                thumbnail: "https://imgix.cosmicjs.com/9483ec60-bff1-11ec-bf80-e74645a81647-Quiz-Imge.jpg",
                url: "https://finlearnacademy.com/quiz/bank-nifty-analysis/",
                date: "2022-03-28",
                consumption_meta_string: "14 questions"
            },
            {
                id: 3,
                type: Type.quiz,
                title: "Conceptual Quiz on Trend",
                thumbnail: "https://imgix.cosmicjs.com/d2eaa7a0-bff1-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                url: "https://finlearnacademy.com/quiz/conceptual-quiz-on-trend/",
                date: "2022-04-05",
                consumption_meta_string: "14 questions"
            }
        ]
    }
];

module.exports = { future_and_options, long_term_investing, short_term_investing }