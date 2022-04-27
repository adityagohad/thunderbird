const https = require('https');

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
    },
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 3,
                "slug": "getting-started-with-fo",
                "title": "Getting Started with F&O",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-20T14:44:25.610Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:28:32.924Z",
                "created": "2022-04-20T14:44:25.610Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:28:32.924Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,
                "date": "2022-04-20",
                "url": "https://www.youtube.com/embed/7RMeLptn0pE",

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
    },
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 6,
                "slug": "how-to-study-economic-reports",
                "title": "How to study Economic Reports?",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-20T14:47:23.779Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:28:10.077Z",
                "created": "2022-04-20T14:47:23.779Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:28:10.077Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,
                "date": "2022-04-20",
                "url": "https://www.youtube.com/embed/aP4ve4upDss",

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
    },
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 4,
                "slug": "introduction-to-swing-trading",
                "title": "Introduction to Swing Trading",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-20T14:33:09.318Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:29:09.049Z",
                "created": "2022-04-20T14:33:09.318Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/3c8225b0-c166-11ec-bf80-e74645a81647-2.png",
                "published_at": "2022-04-21T11:29:09.049Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,
                "date": "2022-04-20",
                "url": "https://www.youtube.com/embed/Vxc8W43eNkE",

            }
        ]
    }
];

const latest_update = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-25th-february-2022",
                "title": "Stock Markets Recap Week Of 25th February 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T12:30:30.459Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-09T12:30:30.459Z",
                "created": "2022-03-09T12:30:30.459Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-09T12:30:30.459Z",
                "type": Type.video,
                "date": "2022-02-26",
                "url": "https://www.youtube.com/watch?v=xwcVeTdzjTQ"
            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-18th-february-2022",
                "title": "Stock Markets Recap Week Of 18th February 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T12:32:30.199Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-09T12:33:11.514Z",
                "created": "2022-03-09T12:32:30.199Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/e3fdd980-9fa4-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-09T12:33:11.514Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,
                "date": "2022-02-19",
                "url": "https://www.youtube.com/watch?v=v2ePVDwMtB4"

            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-11th-february-2022",
                "title": "Stock Markets Recap Week Of 11th February 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T12:34:17.499Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-09T12:34:17.499Z",
                "created": "2022-03-09T12:34:17.499Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/381911b0-9fa5-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-09T12:34:17.499Z",
                "type": Type.video,

                "date": "2022-02-12",
                "url": "https://www.youtube.com/watch?v=PhTbfrMT61I"

            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-4th-february-2022",
                "title": "Stock Markets Recap Week Of 4th February 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T12:35:26.351Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-09T12:35:26.351Z",
                "created": "2022-03-09T12:35:26.351Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/4fccba00-9fa5-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-09T12:35:26.351Z",
                "type": Type.video,
                "date": "2022-02-05",
                "url": "https://www.youtube.com/watch?v=882RmuIoOpM"

            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-28th-jan-2022",
                "title": "Stock Markets Recap Week Of 28th Jan 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T12:39:17.611Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-09T12:39:17.611Z",
                "created": "2022-03-09T12:39:17.611Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/c5d20b60-9fa5-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-09T12:39:17.611Z",
                "type": Type.video,

                "date": "2022-01-29",
                "url": "https://www.youtube.com/watch?v=2LcaVCxfSFk"

            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-4th-march-2022",
                "title": "Stock Markets Recap Week Of 4th March 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-15T07:21:33.881Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-15T07:21:33.882Z",
                "created": "2022-03-15T07:21:33.882Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/349338f0-9fea-11ec-a634-2f1716dd45af-Hitesh-Chotalia-New.png",
                "published_at": "2022-03-15T07:21:33.882Z",
                "type": Type.video,
                "date": "2022-03-05",
                "url": "https://www.youtube.com/watch?v=3gfWyfp_w2g",

            },
            {
                "id": 1,
                "slug": "stock-markets-recap-week-of-11th-march-2022",
                "title": "Stock Markets Recap Week Of 11th March 2022",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-15T07:20:40.049Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-03-15T07:20:40.049Z",
                "created": "2022-03-15T07:20:40.049Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/e3fdd980-9fa4-11ec-a634-2f1716dd45af-11.jpg",
                "published_at": "2022-03-15T07:20:40.049Z",
                "type": Type.video,
                "date": "2022-03-13",
                "url": "https://www.youtube.com/watch?v=5ZvYw7FMt3M",

            },

            {
                "id": 1,
                "slug": "campus-activewear-ipo-bridges-branded-vs-unbranded-gap",
                "title": "Campus Activewear IPO Bridges Branded vs Unbranded Gap",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-26T10:56:10.114Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-26T10:56:20.298Z",
                "created": "2022-04-26T10:56:10.114Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/f96612e0-c54e-11ec-bf80-e74645a81647-Campus-active-wear.png",
                "published_at": "2022-04-26T10:56:20.298Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.newsletter,

                "date": "2022-04-26",
                "url": "https://finlearnacademy.com/newsletter/campus-activewear-ipo-bridges-branded-vs-unbranded-gap/",
            },
            {
                "id": 1,
                "slug": "lithium-cobalt-are-the-new-silver-gold",
                "title": "Lithium & Cobalt are the New Silver & Gold",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:36:31.910Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T13:36:31.910Z",
                "created": "2022-04-19T13:36:31.910Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/7334d120-bfe5-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T13:36:31.910Z",
                "type": Type.newsletter,

                "date": "2022-04-19",
                "url": "https://finlearnacademy.com/newsletter/lithium-cobalt-are-the-new-silver-gold/",
            },
            {
                "id": 1,
                "slug": "15-minute-delivery-gets-a-reality-check",
                "title": "15-Minute Delivery Gets a Reality Check",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:24:51.521Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T13:29:55.436Z",
                "created": "2022-04-19T13:24:51.521Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/00da2db0-bfe4-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T13:29:55.436Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.newsletter,

                "date": "2022-04-14",
                "url": "https://finlearnacademy.com/newsletter/15-minute-delivery-gets-a-reality-check/",
            },
            {
                "id": 1,
                "slug": "upi-touches-usd-1-trillion-in-payments",
                "title": "UPI Touches USD 1 Trillion in Payments",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:08:29.176Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T13:08:29.176Z",
                "created": "2022-04-19T13:08:29.176Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/b89aeaf0-bfe1-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T13:08:29.176Z",
                "type": Type.newsletter,

                "date": "2022-04-07",
                "url": "https://finlearnacademy.com/newsletter/upi-touches-usd-1-tn-in-payments/",
            },
            {
                "id": 1,
                "slug": "hdfc-bank-merger-to-create-synergistic-value",
                "title": "HDFC Bank Merger to Create Synergistic Value",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:04:49.736Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T13:04:49.737Z",
                "created": "2022-04-19T13:04:49.737Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/14cc6890-bfe1-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T13:04:49.737Z",
                "type": Type.newsletter,

                "date": "2022-04-05",
                "url": "https://finlearnacademy.com/newsletter/hdfc-bank-merger-to-create-deep-synergistic-value/",
            },
            {
                "id": 1,
                "slug": "a",
                "title": "Axis increases Customer Base by 31%",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T12:51:48.276Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T12:51:48.276Z",
                "created": "2022-04-19T12:51:48.276Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/4e991430-bfdf-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T12:51:48.276Z",
                "type": Type.newsletter,

                "date": "2022-03-31",
                "url": "https://finlearnacademy.com/newsletter/axis-increases-customer-base-by-31/",
            }
        ],
    }
];

const sector_trends = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 1,
                "slug": "elon-musk-juggles-multiple-hats",
                "title": "Elon Musk Juggles Multiple Hats",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-26T10:48:05.306Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-26T10:48:05.306Z",
                "created": "2022-04-26T10:48:05.306Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/b56b3b20-c54d-11ec-bf80-e74645a81647-Elon-Musk-Image-FinLearn-Academy.png",
                "published_at": "2022-04-26T10:48:05.306Z",
                "type": Type.newsletter,
                "date": "2022-04-23",
                "url": "https://finlearnacademy.com/newsletter/elon-musk-juggles-multiple-hats/",
            },
            {
                "id": 1,
                "slug": "netflix-explores-a-major-strategic-shift",
                "title": "Netflix Explores a Major Strategic Shift",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-26T10:39:12.774Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-26T10:40:27.561Z",
                "created": "2022-04-26T10:39:12.774Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/b0ee5b00-c54c-11ec-bf80-e74645a81647-Netflix-Explores-Image-FinLearn-Academy.png",
                "published_at": "2022-04-26T10:40:27.561Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.newsletter,

                "date": "2022-04-21",
                "url": "https://finlearnacademy.com/newsletter/netflix-explores-a-major-strategic-shift/",

            },
            {
                "id": 1,
                "slug": "indonesian-co-gotos-ipo-debuts-strongly",
                "title": "Indonesian Co. GoTo's IPO Debuts Strongly",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:22:37.129Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T13:22:37.129Z",
                "created": "2022-04-19T13:22:37.129Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/7af71fa0-bfe3-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T13:22:37.129Z",
                "type": Type.newsletter,

                "date": "2022-04-12",
                "url": "https://finlearnacademy.com/newsletter/indonesian-co-gotos-ipo-debuts-strongly/",

            },
            {
                "id": 1,
                "slug": "rbi-crawls-to-policy-stance-change",
                "title": "RBI Crawls to Policy Stance Change",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T13:15:28.854Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-26T10:26:14.837Z",
                "created": "2022-04-19T13:15:28.854Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/8cd3af00-bfe2-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-26T10:26:14.837Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.newsletter,

                "date": "2022-04-09",
                "url": "https://finlearnacademy.com/newsletter/rbi-crawls-to-policy-stance-change/",

            },
            {
                "id": 1,
                "slug": "bajaj-finance-is-on-the-move",
                "title": "Bajaj Finance is on the Move",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-04-19T12:57:58.462Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-19T12:57:58.462Z",
                "created": "2022-04-19T12:57:58.462Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/50030f00-bfe0-11ec-bf80-e74645a81647-Axis-Image-FinLearn-Academy.png",
                "published_at": "2022-04-19T12:57:58.462Z",
                "type": Type.newsletter,

                "date": "2022-04-02",
                "url": "https://finlearnacademy.com/newsletter/bajaj-finance-is-on-the-move/",

            },
        ],
    }
];

const back_to_basic = [
    {
        orientation: Orientation.verticle,
        data: [
            {
                "id": 1,
                "slug": "crypto-101-a-beginners-guide-l0jmbn6c",
                "title": "Crypto 101: A beginners guide",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T13:49:58.163Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-22T10:33:05.123Z",
                "created": "2022-03-09T13:49:58.163Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/92d776b0-c227-11ec-bf80-e74645a81647-Crypto.png",
                "published_at": "2022-04-22T10:33:05.123Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.blog,

                "date": "2021-09-30",
                "url": "https://finlearnacademy.com/blog/crypto-101-a-beginners-guide/",
            },
            {
                "id": 1,
                "slug": "demystifying-nft-non-fungible-token-a-beginners-guide",
                "title": "Demystifying NFT (Non- Fungible Token)- A Beginner’s Guide",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T13:48:29.503Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-22T10:33:41.415Z",
                "created": "2022-03-09T13:48:29.504Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/aa83a4f0-c227-11ec-bf80-e74645a81647-NFT.png",
                "published_at": "2022-04-22T10:33:41.415Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.blog,

                "date": "2021-09-24",
                "url": "https://finlearnacademy.com/blog/demystifying-nft-non-fungible-token-a-beginners-guide/",
            },
            {
                "id": 1,
                "slug": "what-are-mfs-which-are-the-major-mfs-in-the-country-aum-size",
                "title": "What are MFs? Which are the major MFs in the country (AUM Size)",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T13:33:15.922Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-22T10:35:59.647Z",
                "created": "2022-03-09T13:33:15.922Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/fab2d5e0-c227-11ec-bf80-e74645a81647-MF.png",
                "published_at": "2022-04-22T10:35:59.647Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.blog,

                "date": "2021-10-21",
                "url": "https://finlearnacademy.com/blog/what-are-mfs-which-are-the-major-mfs-in-the-country-aum-size/",
            },
            {
                "id": 1,
                "slug": "how-to-open-a-demat-account",
                "title": "How to Open a Demat Account",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-11T07:26:54.978Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-22T10:32:24.795Z",
                "created": "2022-03-11T07:26:54.978Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/7af78e40-c227-11ec-bf80-e74645a81647-Demat-Account.png",
                "published_at": "2022-04-22T10:32:24.795Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.blog,

                "date": "2022-03-10",
                "url": "https://finlearnacademy.com/blog/how-to-open-a-demat-account/",

            },
            {
                "id": 1,
                "slug": "bascis-of-cadnlesticks",
                "title": "Basics of Candlesticks",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:04:59.951Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:50:18.696Z",
                "created": "2022-03-09T20:04:59.951Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:50:18.696Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,

                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/XkPOn7Sc-Ys",

            },
            {
                "id": 1,
                "slug": "how-to-shortlist-stocks-for-trading",
                "title": "How to shortlist stocks for trading?",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:07:48.112Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:50:00.211Z",
                "created": "2022-03-09T20:07:48.112Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:50:00.211Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,

                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/0NW4j2vGFis",

            },
            {
                "id": 1,
                "slug": "types-of-day-trading",
                "title": "Types of Day trading",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:09:35.587Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:46:20.836Z",
                "created": "2022-03-09T20:09:35.587Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:46:20.836Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,
                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/eaXKt2W6V9A",

            },
            {
                "id": 1,
                "slug": "what-is-day-trading",
                "title": "What is day Trading?",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:12:26.437Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:46:04.859Z",
                "created": "2022-03-09T20:12:26.437Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:46:04.859Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,

                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/CNysJXTBRfg",

            },
            {
                "id": 1,
                "slug": "what-is-risk-management",
                "title": "What is Risk Management?",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:17:08.797Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:45:48.155Z",
                "created": "2022-03-09T20:17:08.797Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/1a257490-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:45:48.155Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,

                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/nWl9j13zA88",
            },
            {
                "id": 1,
                "slug": "tips-to-make-a-profitable-trading-plan",
                "title": "Tips to make a profitable Trading Plan",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:19:16.470Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-21T11:45:28.988Z",
                "created": "2022-03-09T20:19:16.470Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/157c37d0-c166-11ec-bf80-e74645a81647-FINLEARNBASICS-OF-BASIC-SERIESHITESH-CHOTALIA-1.jpg",
                "published_at": "2022-04-21T11:45:28.988Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.video,

                "date": "2022-03-09",
                "url": "https://www.youtube.com/embed/i1Yts1oPzZU",

            }
        ]
    },
    {
        orientation: Orientation.grid_2x2,
        data: [
            {
                "id": 1,
                "slug": "new-entrant-in-the-market-we-got-your-back",
                "title": "New Entrant in the market? We got your back!",
                "content": "",
                "bucket": "6228703d27a8830009a2dcc5",
                "created_at": "2022-03-09T20:40:23.441Z",
                "created_by": "62286fd327a8830009a2dcc2",
                "modified_at": "2022-04-22T07:54:15.461Z",
                "created": "2022-03-09T20:40:23.441Z",
                "status": "published",
                "thumbnail": "https://imgix.cosmicjs.com/639a4550-c211-11ec-bf80-e74645a81647-New-Entrant.png",
                "published_at": "2022-04-22T07:54:15.461Z",
                "modified_by": "62286fd327a8830009a2dcc2",
                "publish_at": null,
                "unpublish_at": null,
                "type": Type.quiz,
                "url": "https://finlearnacademy.com/quiz/new-entrant-in-the-market-we-got-your-back/",
            }
        ]
    }
];

module.exports = { future_and_options, long_term_investing, short_term_investing, dummy, latest_update, sector_trends, back_to_basic }