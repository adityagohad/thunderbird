const https = require('https');

const Orientation = {
  verticle: 1,
  horizontal: 2,
  grid_2x2: 3,
  grid_2xn: 4,
  leader: 5
}

const Type = {
  infographic: "infographic",
  blog: "blog",
  newsletter: "newsletter",
  video: "video",
  quiz: "quiz",
}

const infographics = [
  {
    id: 1,
    title: 'Trade of the day: INFY',
    type: 'infographic',
    exercises: [],
    date: '2022-06-03',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/1e1e1020-e2fe-11ec-860e-596765832fd7-trade-of-the-day-infy.png',
    data: [
      'https://cdn.cosmicjs.com/1e1e1020-e2fe-11ec-860e-596765832fd7-trade-of-the-day-infy.png'
    ]
  },
  {
    id: 1,
    title: 'Kotak Mahindra on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-06-02',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/bdf48a20-e24a-11ec-9f15-f79bd5847752-Kotak-Mahindra-on-a.png',
    data: [
      'https://cdn.cosmicjs.com/bdf48a20-e24a-11ec-9f15-f79bd5847752-Kotak-Mahindra-on-a.png'
    ]
  },
  {
    id: 1,
    title: 'TV18 Broadcast on a weekly time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-06-01',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/392882b0-e18c-11ec-9bc3-51ff01941523-TV18-Broadcast-on-a-weekly-time-frame.png',
    data: [
      'https://cdn.cosmicjs.com/392882b0-e18c-11ec-9bc3-51ff01941523-TV18-Broadcast-on-a-weekly-time-frame.png'
    ]
  },
  {
    id: 1,
    title: 'Nifty FMCG on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-05-31',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/76ab9e50-e0d4-11ec-bb19-d9085ce408df-FMCG-Index-Daily-Chart.png',
    data: [
      'https://cdn.cosmicjs.com/76ab9e50-e0d4-11ec-bb19-d9085ce408df-FMCG-Index-Daily-Chart.png'
    ]
  },
  {
    id: 1,
    title: 'FMCG Sector in movement',
    type: 'infographic',
    exercises: [],
    date: '2022-05-30',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/399401c0-dff7-11ec-bb19-d9085ce408df-FMCG-Sector-in-movement.png',
    data: [
      'https://cdn.cosmicjs.com/399401c0-dff7-11ec-bb19-d9085ce408df-FMCG-Sector-in-movement.png'
    ]
  },
  {
    id: 1,
    title: 'Bajaj Auto on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-05-27',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/f7a290c0-dd93-11ec-bb19-d9085ce408df-Bajaj.png',
    data: [
      'https://cdn.cosmicjs.com/f7a290c0-dd93-11ec-bb19-d9085ce408df-Bajaj.png'
    ]
  },
  {
    id: 1,
    title: 'Resistance along Falling Trendline',
    type: 'infographic',
    exercises: [ '13' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/eb99f650-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-FT.png',
    data: [
      'https://cdn.cosmicjs.com/eb99f650-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-FT.png',
      'https://cdn.cosmicjs.com/ed6edd60-d6a0-11ec-bb19-d9085ce408df-Hindalco-FT.png',
      'https://cdn.cosmicjs.com/f02dd650-d6a0-11ec-bb19-d9085ce408df-Tata-Motors-FT.png',
      'https://cdn.cosmicjs.com/eb99f650-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-FT.png'
    ]
  },
  {
    id: 1,
    title: 'Role Reversal: Resistance becomes Support',
    type: 'infographic',
    exercises: [ '12' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/a2ec0150-d6a0-11ec-bb19-d9085ce408df-Adani-Ports-RBS.png',
    data: [
      'https://cdn.cosmicjs.com/a2ec0150-d6a0-11ec-bb19-d9085ce408df-Adani-Ports-RBS.png',
      'https://cdn.cosmicjs.com/a63a6900-d6a0-11ec-bb19-d9085ce408df-Bajaj-RBS.png',
      'https://cdn.cosmicjs.com/a93e0c10-d6a0-11ec-bb19-d9085ce408df-Coal-India-RBS.png',
      'https://cdn.cosmicjs.com/a2ec0150-d6a0-11ec-bb19-d9085ce408df-Adani-Ports-RBS.png'
    ]
  },
  {
    id: 1,
    title: 'Support Breakdown',
    type: 'infographic',
    exercises: [ '11' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/5e366fa0-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-SB.png',
    data: [
      'https://cdn.cosmicjs.com/5e366fa0-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-SB.png',
      'https://cdn.cosmicjs.com/6021ebf0-d6a0-11ec-bb19-d9085ce408df-BPCL-SB.png',
      'https://cdn.cosmicjs.com/62460470-d6a0-11ec-bb19-d9085ce408df-Coal-India-SB.png',
      'https://cdn.cosmicjs.com/5e366fa0-d6a0-11ec-bb19-d9085ce408df-Eicher-Motor-SB.png'
    ]
  },
  {
    id: 1,
    title: 'Stiff Resistance',
    type: 'infographic',
    exercises: [ '10' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/0e43d280-d6a0-11ec-bb19-d9085ce408df-Bank-Nifty-SR.png',
    data: [
      'https://cdn.cosmicjs.com/0e43d280-d6a0-11ec-bb19-d9085ce408df-Bank-Nifty-SR.png',
      'https://cdn.cosmicjs.com/103df4d0-d6a0-11ec-bb19-d9085ce408df-TCS-SR.png',
      'https://cdn.cosmicjs.com/129f6470-d6a0-11ec-bb19-d9085ce408df-Tian-SR.png',
      'https://cdn.cosmicjs.com/0e43d280-d6a0-11ec-bb19-d9085ce408df-Bank-Nifty-SR.png'
    ]
  },
  {
    id: 1,
    title: 'Support Band',
    type: 'infographic',
    exercises: [ '9' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/c48ad620-d69f-11ec-bb19-d9085ce408df-Kotak-Bank-SB.png',
    data: [
      'https://cdn.cosmicjs.com/c48ad620-d69f-11ec-bb19-d9085ce408df-Kotak-Bank-SB.png',
      'https://cdn.cosmicjs.com/c68d0ec0-d69f-11ec-bb19-d9085ce408df-Nifty-SB.png',
      'https://cdn.cosmicjs.com/c8c04270-d69f-11ec-bb19-d9085ce408df-Tech-Mahindra-SB.png',
      'https://cdn.cosmicjs.com/c48ad620-d69f-11ec-bb19-d9085ce408df-Kotak-Bank-SB.png'
    ]
  },
  {
    id: 1,
    title: 'Resistance Band Breakout',
    type: 'infographic',
    exercises: [ '8' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/34a05670-d69f-11ec-bb19-d9085ce408df-LT.png',
    data: [
      'https://cdn.cosmicjs.com/34a05670-d69f-11ec-bb19-d9085ce408df-LT.png',
      'https://cdn.cosmicjs.com/3685b840-d69f-11ec-bb19-d9085ce408df-NTPC.png',
      'https://cdn.cosmicjs.com/393bb080-d69f-11ec-bb19-d9085ce408df-Reliance.png',
      'https://cdn.cosmicjs.com/34a05670-d69f-11ec-bb19-d9085ce408df-LT.png'
    ]
  },
  {
    id: 1,
    title: 'Double Bottom',
    type: 'infographic',
    exercises: [ '7' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/818fbb20-d69e-11ec-bb19-d9085ce408df-GHCL-DB.png',
    data: [
      'https://cdn.cosmicjs.com/818fbb20-d69e-11ec-bb19-d9085ce408df-GHCL-DB.png',
      'https://cdn.cosmicjs.com/84774ab0-d69e-11ec-bb19-d9085ce408df-Powergrid-DB.png',
      'https://cdn.cosmicjs.com/86f20eb0-d69e-11ec-bb19-d9085ce408df-SBIN-DB.png',
      'https://cdn.cosmicjs.com/818fbb20-d69e-11ec-bb19-d9085ce408df-GHCL-DB.png'
    ]
  },
  {
    id: 1,
    title: 'Falling Channel Breakout',
    type: 'infographic',
    exercises: [ '6' ],
    date: '2022-05-18',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/dc238e50-d69d-11ec-bb19-d9085ce408df-Asian-Paints.png',
    data: [
      'https://cdn.cosmicjs.com/dc238e50-d69d-11ec-bb19-d9085ce408df-Asian-Paints.png',
      'https://cdn.cosmicjs.com/e3147120-d69d-11ec-bb19-d9085ce408df-GHCL.png',
      'https://cdn.cosmicjs.com/e64565c0-d69d-11ec-bb19-d9085ce408df-HCL-Tech-1.png',
      'https://cdn.cosmicjs.com/e9d199c0-d69d-11ec-bb19-d9085ce408df-HCL-Tech-2.png'
    ]
  },
  {
    id: 1,
    title: "Big IPO's don't make money for Investors",
    type: 'infographic',
    exercises: [],
    date: '2022-05-13',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
    data: [
      'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
      'https://cdn.cosmicjs.com/9108c6c0-d697-11ec-bb19-d9085ce408df-2-1.png',
      'https://cdn.cosmicjs.com/9382c770-d697-11ec-bb19-d9085ce408df-3.png',
      'https://cdn.cosmicjs.com/95d6c990-d697-11ec-bb19-d9085ce408df-4.png'
    ]
  },
  {
    id: 1,
    title: 'Rupee depreciates to an all-time low',
    type: 'infographic',
    exercises: [],
    date: '2022-05-10',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png',
    data: [
      'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png'
    ]
  },
  {
    id: 1,
    title: "FY21 Revenue of India's Leading Textile Companies",
    type: 'infographic',
    exercises: [],
    date: '2022-05-12',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png',
    data: [
      'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png'
    ]
  },
  {
    id: 1,
    title: 'Falling Channel Breakout',
    type: 'infographic',
    exercises: [ '6' ],
    date: '2022-04-20',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/79769660-cba5-11ec-b98f-db6f075d4374-Falling-Channel-Breakout.png',
    data: [
      'https://cdn.cosmicjs.com/79769660-cba5-11ec-b98f-db6f075d4374-Falling-Channel-Breakout.png'
    ]
  },
  {
    id: 1,
    title: 'Falling Trendline taking Resistance',
    type: 'infographic',
    exercises: [ '13' ],
    date: '2022-04-20',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/439bdf10-cb9f-11ec-b98f-db6f075d4374-Falling-trendline-taking-1.png',
    data: [
      'https://cdn.cosmicjs.com/439bdf10-cb9f-11ec-b98f-db6f075d4374-Falling-trendline-taking-1.png'
    ]
  },
  {
    id: 1,
    title: 'Double Bottom',
    type: 'infographic',
    exercises: [ '7' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Double Bottom\n' +
      'Nature of patterns:  Bullish\n' +
      'Type of pattern: Reversal\n' +
      'Frequency: Not so Often',
    thumbnail: 'https://cdn.cosmicjs.com/32bf5cf0-9fe2-11ec-a634-2f1716dd45af-Untitled-1.png',
    data: [
      'https://cdn.cosmicjs.com/32bf5cf0-9fe2-11ec-a634-2f1716dd45af-Untitled-1.png'
    ]
  },
  {
    id: 1,
    title: 'Support Taken',
    type: 'infographic',
    exercises: [ '1', '3', '9' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded:  Taking Support\n' +
      'Nature of patterns:  Bullish\n' +
      'Type of pattern:  Reversal\n' +
      'Frequency:  Very Often',
    thumbnail: 'https://cdn.cosmicjs.com/b91b12e0-9fe1-11ec-a634-2f1716dd45af-Take-support.png',
    data: [
      'https://cdn.cosmicjs.com/b91b12e0-9fe1-11ec-a634-2f1716dd45af-Take-support.png'
    ]
  },
  {
    id: 1,
    title: 'Resistance Taken',
    type: 'infographic',
    exercises: [ '1', '3', '10' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Taking Resistance\n' +
      'Nature of patterns: Bearish\n' +
      'Type of pattern: Reversal\n' +
      'Frequency: Very Often',
    thumbnail: 'https://cdn.cosmicjs.com/0e18b140-9fe1-11ec-a634-2f1716dd45af-Take-Resistance.png',
    data: [
      'https://cdn.cosmicjs.com/0e18b140-9fe1-11ec-a634-2f1716dd45af-Take-Resistance.png'
    ]
  },
  {
    id: 1,
    title: 'Support Breakdown',
    type: 'infographic',
    exercises: [ '3', '11' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Support Breakdown\n' +
      'Nature of patterns: Bearish\n' +
      'Type of pattern: Continuation\n' +
      'Frequency: Often',
    thumbnail: 'https://cdn.cosmicjs.com/99fc6b30-9fe0-11ec-a634-2f1716dd45af-Support-Breakdown.png',
    data: [
      'https://cdn.cosmicjs.com/99fc6b30-9fe0-11ec-a634-2f1716dd45af-Support-Breakdown.png'
    ]
  },
  {
    id: 1,
    title: 'Role Reversal',
    type: 'infographic',
    exercises: [ '12' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Role Reversal\n' +
      'Nature of patterns: Depends on the prices giving a breakout or breakdown\n' +
      'Type of pattern: Reversal\n' +
      'Frequency: Often',
    thumbnail: 'https://cdn.cosmicjs.com/1b496bd0-9fe0-11ec-a634-2f1716dd45af-Role-Reversal.png',
    data: [
      'https://cdn.cosmicjs.com/1b496bd0-9fe0-11ec-a634-2f1716dd45af-Role-Reversal.png'
    ]
  },
  {
    id: 1,
    title: 'Support Taken',
    type: 'infographic',
    exercises: [ '1', '3', '9' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Taking Support\n' +
      'Nature of patterns: Bullish\n' +
      'Type of pattern: Reversal\n' +
      'Frequency: Very Often',
    thumbnail: 'https://cdn.cosmicjs.com/554d3790-9fdf-11ec-a634-2f1716dd45af-Overall-Support-and-Resistance.png',
    data: [
      'https://cdn.cosmicjs.com/554d3790-9fdf-11ec-a634-2f1716dd45af-Overall-Support-and-Resistance.png'
    ]
  },
  {
    id: 1,
    title: 'Inside Bar',
    type: 'infographic',
    exercises: [ '4' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Inside Bar\n' +
      'Nature of patterns:  Depends on the on going trend\n' +
      'Type of pattern: Continuation\n' +
      'Frequency: Often',
    thumbnail: 'https://cdn.cosmicjs.com/a35167a0-9fde-11ec-a634-2f1716dd45af-Inside-Bar.png',
    data: [
      'https://cdn.cosmicjs.com/a35167a0-9fde-11ec-a634-2f1716dd45af-Inside-Bar.png'
    ]
  },
  {
    id: 1,
    title: 'Bullish Flag',
    type: 'infographic',
    exercises: [ '5' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Bullish Flag\n' +
      'Nature of patterns: Bullish\n' +
      'Type of pattern: Continuation\n' +
      'Frequency: Not very often',
    thumbnail: 'https://cdn.cosmicjs.com/ef700ed0-9fdd-11ec-a634-2f1716dd45af-Bullish-Flag.png',
    data: [
      'https://cdn.cosmicjs.com/ef700ed0-9fdd-11ec-a634-2f1716dd45af-Bullish-Flag.png'
    ]
  },
  {
    id: 1,
    title: 'Resistance Breakout',
    type: 'infographic',
    exercises: [ '2', '3' ],
    date: '2022-03-09',
    description: '5 points to remember\n' +
      '\n' +
      'Pattern traded: Resistance Breakout\n' +
      'Nature of patterns: Bullish\n' +
      'Type of pattern: Continuation\n' +
      'Frequency: Very Often',
    thumbnail: 'https://cdn.cosmicjs.com/cca5eb50-9fdc-11ec-a634-2f1716dd45af-Breaks-Resistance.png',
    data: [
      'https://cdn.cosmicjs.com/cca5eb50-9fdc-11ec-a634-2f1716dd45af-Breaks-Resistance.png'
    ]
  },
  {
    id: 1,
    title: 'Resistance Band Breakout trade',
    type: 'infographic',
    exercises: [ '8' ],
    date: '2022-03-09',
    description: '4 points to remember\n' +
      '\n' +
      'Pattern traded: Resistance band breakout\n' +
      'Nature of pattern: Bullish\n' +
      'Type of pattern: Continuation\n' +
      'Frequency: Very Often',
    thumbnail: 'https://cdn.cosmicjs.com/16715380-9fb7-11ec-a634-2f1716dd45af-Breakout-Resistance-Band.png',
    data: [
      'https://cdn.cosmicjs.com/16715380-9fb7-11ec-a634-2f1716dd45af-Breakout-Resistance-Band.png'
    ]
  },
  {
    id: 1,
    title: 'Major Global Index returns in past 5 years',
    type: 'infographic',
    exercises: [],
    date: '2022-03-01',
    description: 'Mera desh badal raha hai, aage badh raha hai?\n' +
      'Top 5 countries giving the best returns (index)\n' +
      '\n' +
      'USA\n' +
      'India\n' +
      'France\n' +
      'Japan\n' +
      'Germany\n' +
      '\n' +
      'Which index is most likely to yield the most returns in the next 5 years?',
    thumbnail: 'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png',
    data: [
      'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png'
    ]
  },
  {
    id: 1,
    title: 'Major Stocks in 52 week low',
    type: 'infographic',
    exercises: [],
    date: '2022-03-05',
    description: 'Nifty after making a high of 18,604.45 and Sensex making a high of 62,245.43 have corrected over 10%. Situations like these get investors interested because everyone buys the dip :p\n' +
      '\n' +
      'These are a few stocks currently trading close to their 52-week lows. Good time to buy?',
    thumbnail: 'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png',
    data: [
      'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png'
    ]
  },
  {
    id: 1,
    title: 'Tata Group vs Reliance Group',
    type: 'infographic',
    exercises: [],
    date: '2022-02-25',
    description: 'Did you know? Tata Sons (Parent company of all major Tata companies)  is the biggest promoter group in India and Reliance Industries is the company with the highest market capitalisation in India (listed companies)\n' +
      '\n' +
      "Both are major groups and have helped India grow. Don't forget to swipe left and see a development we observed on Mukesh Ambani's Reliance Group",
    thumbnail: 'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
    data: [
      'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
      'https://cdn.cosmicjs.com/44dbd4f0-9fb4-11ec-a634-2f1716dd45af-tatavreliance1.png'
    ]
  },
  {
    id: 1,
    title: 'Results of Top Steel Stocks for Q3',
    type: 'infographic',
    exercises: [],
    date: '2022-02-28',
    description: 'Results of Top 5 Steel Stocks:\n' +
      '\n' +
      'Tata Steel\n' +
      'JSW Steel\n' +
      'SAIL\n' +
      'APL Apollo Tubes\n' +
      'Jindal Stainless\n' +
      '\n' +
      "Don't forget to swipe left and check out an opportunity in another hidden metal sector gem",
    thumbnail: 'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
    data: [
      'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
      'https://cdn.cosmicjs.com/59be2a40-9fb3-11ec-a634-2f1716dd45af-metal2.png'
    ]
  },
  {
    id: 1,
    title: 'Brands operated by ITC',
    type: 'infographic',
    exercises: [],
    date: '2022-03-03',
    description: 'ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n' +
      '\n' +
      "Don't forget to swipe left and capitalise on an opportunity in ITC",
    thumbnail: 'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
    data: [
      'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
      'https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png'
    ]
  }
];

const dummy = [
  {
    orientation: Orientation.verticle,
    data: [{
      id: 1,
      type: "blog",
      title: "How to Open a Demat Account",
      url: "https://finlearnacademy.com/blog/how-to-open-a-demat-account/",
      thumbnail: "https://imgix.cosmicjs.com/911429e0-a10c-11ec-a634-2f1716dd45af-How-to-Open-a-Demat-Account-Everything-you-need-to-know-e1646907962592.png",
      exercises: [1, 2]
    }, {
      id: 1,
      title: "Brands operated by ITC",
      type: "infographic",
      description: "ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n\nDon't forget to swipe left and capitalise on an opportunity in ITC",
      thumbnail: "https://imgix.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png",
      data: ["https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png", "https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png"],
      exercises: [4, 5]
    }, {
      id: 1,
      type: "video",
      title: "Stock Markets Recap Week Of 25th February 2022",
      url: "https://www.youtube.com/watch?v=xwcVeTdzjTQ",
      thumbnail: "https://imgix.cosmicjs.com/5d976aa0-9fa4-11ec-a634-2f1716dd45af-11.jpg",
      exercises: [6, 7]
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

const new_this_week = [
  {
    id: 1,
    title: "Adani aims to be naturally Atmanirbhar",
    date: "2022-05-17",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/adani-aims-to-be-naturally-atmanirbhar/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Adani-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 2,
    title: "RBL Bank halfway there to redemption?",
    date: "2022-05-14",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/rbl-bank-halfway-there-to-redemption/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/RBL-Bank-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 3,
    title: "KFC + Pizza Hut Record 40% sales growth",
    date: "2022-05-03",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/kfc-pizza-hut-record-40-sales-growth/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/KFC-Pizza-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 4,
    title: "SBI Cards records 19% spends market store",
    date: "2022-04-30",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/sbi-cards-records-19-spends-market-share/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/04/SBI-Card-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 5,
    title: "BAF uncertain on the transition to full-serviced Bank",
    date: "2022-04-08",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/baf-uncertain-on-the-transition-to-full-service-bank/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/04/BAF-Uncertain-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 1,
    title: "Wedding season back in full flow",
    date: "2022-05-12",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/wedding-season-back-in-full-flow/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Wedding-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 2,
    title: "MF's maintain their MOJO despite red candles everywhere",
    date: "2022-05-10",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/mfs-maintain-their-mojo-despite-red-candles-everywhere/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Mutual-Funds-Candlestick-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 3,
    title: "RIL revenue cross USD 100 Bn",
    date: "2022-05-07",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/ril-revenue-cross-usd-100-bn/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/RIL-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 4,
    title: "LIC IPO's X Impromptu MPC creates Mayhem",
    date: "2022-05-05",
    type: Type.newsletter,
    url: "https://finlearnacademy.com/newsletter/lic-ipo-x-impromptu-mpc-creates-mayhem/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/LIC-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 2,
    title: "Top candlestick patterns every trader should know about",
    date: "2022-05-13",
    type: Type.blog,
    url: "https://finlearnacademy.com/blog/top-candlestick-patterns-every-trader-should-know-about/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Candlestick-Patterns-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
  {
    id: 2,
    title: "What is Asset Allocation?",
    date: "2022-05-12",
    type: Type.blog,
    url: "https://finlearnacademy.com/blog/what-is-asset-allocation/",
    thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Asset-Allocation-Image-FinLearn-Academy.png",
    consumption_meta_string: "5 min"
  },
]

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
        id: 2,
        title: "What is Asset Allocation?",
        date: "2022-05-12",
        type: Type.blog,
        url: "https://finlearnacademy.com/blog/what-is-asset-allocation/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Asset-Allocation-Image-FinLearn-Academy.png",
        consumption_meta_string: "5 min"
      },
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
      },
      {
        id: 4,
        type: Type.quiz,
        title: "Piotroski just made investing easy?",
        thumbnail: "https://cdn.cosmicjs.com/fff52da0-e24d-11ec-9f15-f79bd5847752-Piotroski-Image-FinLearn-Academy.png",
        url: "https://finlearnacademy.com/quiz/piotroski-just-made-investing-easy/",
        date: "2022-06-02",
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
        id: 2,
        title: "Top candlestick patterns every trader should know about",
        date: "2022-05-13",
        type: Type.blog,
        url: "https://finlearnacademy.com/blog/top-candlestick-patterns-every-trader-should-know-about/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Candlestick-Patterns-Image-FinLearn-Academy.png",
        consumption_meta_string: "5 min"
      },
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
        id: 1,
        title: "Kotak's 811 Benefits From Covid Push",
        date: "2022-05-28",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/kotaks-811-benefits-from-covid-push/",
        thumbnail: "https://cdn.cosmicjs.com/4e368de0-de54-11ec-bb19-d9085ce408df-811-Kotak-Image-FinLearn-Academy.png",
      },
      {
        id: 5,
        title: "Zomato Gross Order Value At Record High",
        date: "2022-05-06",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/zomato-gross-order-value-at-record-high/",
        thumbnail: "https://cdn.cosmicjs.com/dece30e0-dcbc-11ec-bb19-d9085ce408df-Zomato-Image-FinLearn-Academy.png",
      },
      {
        id: 1,
        title: "FM Sitharaman Takes Matters Into Her Own Hands",
        date: "2022-05-24",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/fm-sitharaman-takes-matters-into-her-own-hands/",
        thumbnail: "https://cdn.cosmicjs.com/31403190-db2b-11ec-bb19-d9085ce408df-FM-Sitharaman-Image-FinLearn-Academy.png",
      },
      {
        id: 5,
        title: "Largest Luxury Watch Retailer Ethos IPOs",
        date: "2022-05-19",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/largest-luxury-watch-retailer-ethos-ipos/",
        thumbnail: "https://cdn.cosmicjs.com/d2ab6db0-d748-11ec-bb19-d9085ce408df-Watch-Image-FinLearn-Academy.png",
      },
      {
        id: 1,
        title: "Adani aims to be naturally Atmanirbhar",
        date: "2022-05-17",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/adani-aims-to-be-naturally-atmanirbhar/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Adani-Image-FinLearn-Academy.png",
      },
      {
        id: 2,
        title: "RBL Bank halfway there to redemption?",
        date: "2022-05-14",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/rbl-bank-halfway-there-to-redemption/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/RBL-Bank-Image-FinLearn-Academy.png",
      },
      {
        id: 3,
        title: "KFC + Pizza Hut Record 40% sales growth",
        date: "2022-05-03",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/kfc-pizza-hut-record-40-sales-growth/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/KFC-Pizza-Image-FinLearn-Academy.png",
      },
      {
        id: 4,
        title: "SBI Cards records 19% spends market store",
        date: "2022-04-30",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/sbi-cards-records-19-spends-market-share/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/04/SBI-Card-Image-FinLearn-Academy.png",
      },
      {
        id: 5,
        title: "BAF uncertain on the transition to full-serviced Bank",
        date: "2022-04-08",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/baf-uncertain-on-the-transition-to-full-service-bank/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/04/BAF-Uncertain-Image-FinLearn-Academy.png",
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
      },
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
        id: 1,
        title: 'Major Global Index returns in past 5 years',
        type: 'infographic',
        exercises: [],
        date: '2022-03-01',
        description: 'Mera desh badal raha hai, aage badh raha hai?\n' +
          'Top 5 countries giving the best returns (index)\n' +
          '\n' +
          'USA\n' +
          'India\n' +
          'France\n' +
          'Japan\n' +
          'Germany\n' +
          '\n' +
          'Which index is most likely to yield the most returns in the next 5 years?',
        thumbnail: 'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png',
        data: [
          'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png'
        ]
      },
      {
        id: 1,
        title: 'Major Stocks in 52 week low',
        type: 'infographic',
        exercises: [],
        date: '2022-03-05',
        description: 'Nifty after making a high of 18,604.45 and Sensex making a high of 62,245.43 have corrected over 10%. Situations like these get investors interested because everyone buys the dip :p\n' +
          '\n' +
          'These are a few stocks currently trading close to their 52-week lows. Good time to buy?',
        thumbnail: 'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png',
        data: [
          'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png'
        ]
      },
      {
        id: 1,
        title: 'Brands operated by ITC',
        type: 'infographic',
        exercises: [],
        date: '2022-03-03',
        description: 'ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n' +
          '\n' +
          "Don't forget to swipe left and capitalise on an opportunity in ITC",
        thumbnail: 'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
        data: [
          'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
          'https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png'
        ]
      },
      {
        id: 1,
        title: 'Rupee depreciates to an all-time low',
        type: 'infographic',
        exercises: [],
        date: '2022-05-10',
        description: '',
        thumbnail: 'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png',
        data: [
          'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png'
        ]
      },
      {
        id: 1,
        title: "Big IPO's don't make money for Investors",
        type: 'infographic',
        exercises: [],
        date: '2022-05-13',
        description: '',
        thumbnail: 'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
        data: [
          'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
          'https://cdn.cosmicjs.com/9108c6c0-d697-11ec-bb19-d9085ce408df-2-1.png',
          'https://cdn.cosmicjs.com/9382c770-d697-11ec-bb19-d9085ce408df-3.png',
          'https://cdn.cosmicjs.com/95d6c990-d697-11ec-bb19-d9085ce408df-4.png'
        ]
      },
    ],
  },
  {
    orientation: Orientation.leader,
    data: [
      {
        id: 1,
        title: "Unilever On-Boards Activist Investor To Reinvigorate Growth",
        date: "2022-06-02",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/unilever-on-boards-activist-investor-to-reinvigorate-growth/",
        thumbnail: "https://cdn.cosmicjs.com/36fd5880-e240-11ec-9f15-f79bd5847752-Unilever-Image-FinLearn-Academy.png",
      },
      {
        id: 5,
        title: "Domino's Rises >9% On New CEO Announcement",
        date: "2022-05-31",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/dominos-rises-9-on-new-ceo-announcement/",
        thumbnail: "https://cdn.cosmicjs.com/b7fb4cb0-e0a8-11ec-bb19-d9085ce408df-Dominos-Image-FinLearn-Academy.png",
      }
    ]
  }
];

const sector_trends = [
  {
    orientation: Orientation.leader,
    data: [
      {
        id: 5,
        title: "JetBlue Vs Spirit Airlines Battle Turns Ugly",
        date: "2022-05-21",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/jetblue-vs-spirit-airlines-battle-turns-ugly/",
        thumbnail: "https://cdn.cosmicjs.com/acb53ba0-d8c8-11ec-bb19-d9085ce408df-JetBlue-Image-FinLearn-Academy.png",
      },
      {
        id: 1,
        title: "Wedding season back in full flow",
        date: "2022-05-12",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/wedding-season-back-in-full-flow/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Wedding-Image-FinLearn-Academy.png",
      },
    ]
  },
  {
    orientation: Orientation.verticle,
    data: [
      {
        id: 5,
        title: "JetBlue Vs Spirit Airlines Battle Turns Ugly",
        date: "2022-05-21",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/jetblue-vs-spirit-airlines-battle-turns-ugly/",
        thumbnail: "https://cdn.cosmicjs.com/acb53ba0-d8c8-11ec-bb19-d9085ce408df-JetBlue-Image-FinLearn-Academy.png",
      },
      {
        id: 1,
        title: "Wedding season back in full flow",
        date: "2022-05-12",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/wedding-season-back-in-full-flow/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Wedding-Image-FinLearn-Academy.png",
      },
      {
        id: 2,
        title: "MF's maintain their MOJO despite red candles everywhere",
        date: "2022-05-10",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/mfs-maintain-their-mojo-despite-red-candles-everywhere/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/Mutual-Funds-Candlestick-Image-FinLearn-Academy.png",
      },
      {
        id: 3,
        title: "RIL revenue cross USD 100 Bn",
        date: "2022-05-07",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/ril-revenue-cross-usd-100-bn/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/RIL-Image-FinLearn-Academy.png",
      },
      {
        id: 4,
        title: "LIC IPO's X Impromptu MPC creates Mayhem",
        date: "2022-05-05",
        type: Type.newsletter,
        url: "https://finlearnacademy.com/newsletter/lic-ipo-x-impromptu-mpc-creates-mayhem/",
        thumbnail: "https://finlearnacademy.com/wp-content/uploads/2022/05/LIC-Image-FinLearn-Academy.png",
      },
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
      {
        id: 1,
        title: 'Tata Group vs Reliance Group',
        type: 'infographic',
        exercises: [],
        date: '2022-02-25',
        description: 'Did you know? Tata Sons (Parent company of all major Tata companies)  is the biggest promoter group in India and Reliance Industries is the company with the highest market capitalisation in India (listed companies)\n' +
          '\n' +
          "Both are major groups and have helped India grow. Don't forget to swipe left and see a development we observed on Mukesh Ambani's Reliance Group",
        thumbnail: 'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
        data: [
          'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
          'https://cdn.cosmicjs.com/44dbd4f0-9fb4-11ec-a634-2f1716dd45af-tatavreliance1.png'
        ]
      },
      {
        id: 1,
        title: 'Results of Top Steel Stocks for Q3',
        type: 'infographic',
        exercises: [],
        date: '2022-02-28',
        description: 'Results of Top 5 Steel Stocks:\n' +
          '\n' +
          'Tata Steel\n' +
          'JSW Steel\n' +
          'SAIL\n' +
          'APL Apollo Tubes\n' +
          'Jindal Stainless\n' +
          '\n' +
          "Don't forget to swipe left and check out an opportunity in another hidden metal sector gem",
        thumbnail: 'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
        data: [
          'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
          'https://cdn.cosmicjs.com/59be2a40-9fb3-11ec-a634-2f1716dd45af-metal2.png'
        ]
      },
      {
        id: 1,
        title: "FY21 Revenue of India's Leading Textile Companies",
        type: 'infographic',
        exercises: [],
        date: '2022-05-12',
        description: '',
        thumbnail: 'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png',
        data: [
          'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png'
        ]
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

const home_info = [
  {
    id: 1,
    title: 'Trade of the day: INFY',
    type: 'infographic',
    exercises: [],
    date: '2022-06-03',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/1e1e1020-e2fe-11ec-860e-596765832fd7-trade-of-the-day-infy.png',
    data: [
      'https://cdn.cosmicjs.com/1e1e1020-e2fe-11ec-860e-596765832fd7-trade-of-the-day-infy.png'
    ]
  },
  {
    id: 1,
    title: 'Kotak Mahindra on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-06-02',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/bdf48a20-e24a-11ec-9f15-f79bd5847752-Kotak-Mahindra-on-a.png',
    data: [
      'https://cdn.cosmicjs.com/bdf48a20-e24a-11ec-9f15-f79bd5847752-Kotak-Mahindra-on-a.png'
    ]
  },
  {
    id: 1,
    title: 'TV18 Broadcast on a weekly time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-06-01',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/392882b0-e18c-11ec-9bc3-51ff01941523-TV18-Broadcast-on-a-weekly-time-frame.png',
    data: [
      'https://cdn.cosmicjs.com/392882b0-e18c-11ec-9bc3-51ff01941523-TV18-Broadcast-on-a-weekly-time-frame.png'
    ]
  },
  {
    id: 1,
    title: 'Nifty FMCG on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-05-31',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/76ab9e50-e0d4-11ec-bb19-d9085ce408df-FMCG-Index-Daily-Chart.png',
    data: [
      'https://cdn.cosmicjs.com/76ab9e50-e0d4-11ec-bb19-d9085ce408df-FMCG-Index-Daily-Chart.png'
    ]
  },
  {
    id: 1,
    title: 'FMCG Sector in movement',
    type: 'infographic',
    exercises: [],
    date: '2022-05-30',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/399401c0-dff7-11ec-bb19-d9085ce408df-FMCG-Sector-in-movement.png',
    data: [
      'https://cdn.cosmicjs.com/399401c0-dff7-11ec-bb19-d9085ce408df-FMCG-Sector-in-movement.png'
    ]
  },
  {
    id: 1,
    title: 'Bajaj Auto on a daily time-frame',
    type: 'infographic',
    exercises: [],
    date: '2022-05-27',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/f7a290c0-dd93-11ec-bb19-d9085ce408df-Bajaj.png',
    data: [
      'https://cdn.cosmicjs.com/f7a290c0-dd93-11ec-bb19-d9085ce408df-Bajaj.png'
    ]
  },
  {
    id: 1,
    title: 'Major Global Index returns in past 5 years',
    type: 'infographic',
    exercises: [],
    date: '2022-03-01',
    description: 'Mera desh badal raha hai, aage badh raha hai?\n' +
      'Top 5 countries giving the best returns (index)\n' +
      '\n' +
      'USA\n' +
      'India\n' +
      'France\n' +
      'Japan\n' +
      'Germany\n' +
      '\n' +
      'Which index is most likely to yield the most returns in the next 5 years?',
    thumbnail: 'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png',
    data: [
      'https://cdn.cosmicjs.com/1274c6f0-9fb6-11ec-a634-2f1716dd45af-2.png'
    ]
  },
  {
    id: 1,
    title: 'Major Stocks in 52 week low',
    type: 'infographic',
    exercises: [],
    date: '2022-03-05',
    description: 'Nifty after making a high of 18,604.45 and Sensex making a high of 62,245.43 have corrected over 10%. Situations like these get investors interested because everyone buys the dip :p\n' +
      '\n' +
      'These are a few stocks currently trading close to their 52-week lows. Good time to buy?',
    thumbnail: 'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png',
    data: [
      'https://cdn.cosmicjs.com/657e3670-9fb5-11ec-a634-2f1716dd45af-1.png'
    ]
  },
  {
    id: 1,
    title: 'Brands operated by ITC',
    type: 'infographic',
    exercises: [],
    date: '2022-03-03',
    description: 'ITC - the meme stock has been focusing a lot on growing its FMCG and Agriculture business. Here are a few brands operated by the tobacco giant.\n' +
      '\n' +
      "Don't forget to swipe left and capitalise on an opportunity in ITC",
    thumbnail: 'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
    data: [
      'https://cdn.cosmicjs.com/6c6de820-9fb2-11ec-a634-2f1716dd45af-ITC-1.png',
      'https://cdn.cosmicjs.com/6fd248d0-9fb2-11ec-a634-2f1716dd45af-ITC2.png'
    ]
  },
  {
    id: 1,
    title: 'Rupee depreciates to an all-time low',
    type: 'infographic',
    exercises: [],
    date: '2022-05-10',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png',
    data: [
      'https://cdn.cosmicjs.com/38ef10c0-d697-11ec-bb19-d9085ce408df-rupee-histroy.png'
    ]
  },
  {
    id: 1,
    title: "Big IPO's don't make money for Investors",
    type: 'infographic',
    exercises: [],
    date: '2022-05-13',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
    data: [
      'https://cdn.cosmicjs.com/8a06f400-d697-11ec-bb19-d9085ce408df-1.png',
      'https://cdn.cosmicjs.com/9108c6c0-d697-11ec-bb19-d9085ce408df-2-1.png',
      'https://cdn.cosmicjs.com/9382c770-d697-11ec-bb19-d9085ce408df-3.png',
      'https://cdn.cosmicjs.com/95d6c990-d697-11ec-bb19-d9085ce408df-4.png'
    ]
  },
  {
    id: 1,
    title: 'Tata Group vs Reliance Group',
    type: 'infographic',
    exercises: [],
    date: '2022-02-25',
    description: 'Did you know? Tata Sons (Parent company of all major Tata companies)  is the biggest promoter group in India and Reliance Industries is the company with the highest market capitalisation in India (listed companies)\n' +
      '\n' +
      "Both are major groups and have helped India grow. Don't forget to swipe left and see a development we observed on Mukesh Ambani's Reliance Group",
    thumbnail: 'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
    data: [
      'https://cdn.cosmicjs.com/33e72a00-9fb4-11ec-a634-2f1716dd45af-tatavreliance.png',
      'https://cdn.cosmicjs.com/44dbd4f0-9fb4-11ec-a634-2f1716dd45af-tatavreliance1.png'
    ]
  },
  {
    id: 1,
    title: 'Results of Top Steel Stocks for Q3',
    type: 'infographic',
    exercises: [],
    date: '2022-02-28',
    description: 'Results of Top 5 Steel Stocks:\n' +
      '\n' +
      'Tata Steel\n' +
      'JSW Steel\n' +
      'SAIL\n' +
      'APL Apollo Tubes\n' +
      'Jindal Stainless\n' +
      '\n' +
      "Don't forget to swipe left and check out an opportunity in another hidden metal sector gem",
    thumbnail: 'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
    data: [
      'https://cdn.cosmicjs.com/0da14d40-9fb3-11ec-a634-2f1716dd45af-metal1.png',
      'https://cdn.cosmicjs.com/59be2a40-9fb3-11ec-a634-2f1716dd45af-metal2.png'
    ]
  },
  {
    id: 1,
    title: "FY21 Revenue of India's Leading Textile Companies",
    type: 'infographic',
    exercises: [],
    date: '2022-05-12',
    description: '',
    thumbnail: 'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png',
    data: [
      'https://cdn.cosmicjs.com/7b081b10-d696-11ec-bb19-d9085ce408df-textile-fy21.png'
    ]
  },
]

module.exports = { future_and_options, long_term_investing, short_term_investing, dummy, latest_update, sector_trends, back_to_basic, infographics, new_this_week, home_info }