export class SavingsAccountService {
  getValues(): { date: string; value: number }[] {
    const mensal = [
      {
        date: "01/2000",
        value: 0.716,
      },
      {
        date: "02/2000",
        value: 0.734,
      },
      {
        date: "03/2000",
        value: 0.7253,
      },
      {
        date: "04/2000",
        value: 0.6308,
      },
      {
        date: "05/2000",
        value: 0.7504,
      },
      {
        date: "06/2000",
        value: 0.7151,
      },
      {
        date: "07/2000",
        value: 0.6555,
      },
      {
        date: "08/2000",
        value: 0.7035,
      },
      {
        date: "09/2000",
        value: 0.6043,
      },
      {
        date: "10/2000",
        value: 0.6323,
      },
      {
        date: "11/2000",
        value: 0.6203,
      },
      {
        date: "12/2000",
        value: 0.5996,
      },
      {
        date: "01/2001",
        value: 0.6376,
      },
      {
        date: "02/2001",
        value: 0.537,
      },
      {
        date: "03/2001",
        value: 0.6733,
      },
      {
        date: "04/2001",
        value: 0.6554,
      },
      {
        date: "05/2001",
        value: 0.6836,
      },
      {
        date: "06/2001",
        value: 0.6465,
      },
      {
        date: "07/2001",
        value: 0.7453,
      },
      {
        date: "08/2001",
        value: 0.8453,
      },
      {
        date: "09/2001",
        value: 0.6635,
      },
      {
        date: "10/2001",
        value: 0.7928,
      },
      {
        date: "11/2001",
        value: 0.6938,
      },
      {
        date: "12/2001",
        value: 0.6993,
      },
      {
        date: "01/2002",
        value: 0.7604,
      },
      {
        date: "02/2002",
        value: 0.6177,
      },
      {
        date: "03/2002",
        value: 0.6767,
      },
      {
        date: "04/2002",
        value: 0.7369,
      },
      {
        date: "05/2002",
        value: 0.7113,
      },
      {
        date: "06/2002",
        value: 0.659,
      },
      {
        date: "07/2002",
        value: 0.7669,
      },
      {
        date: "08/2002",
        value: 0.7493,
      },
      {
        date: "09/2002",
        value: 0.6965,
      },
      {
        date: "10/2002",
        value: 0.7782,
      },
      {
        date: "11/2002",
        value: 0.7657,
      },
      {
        date: "12/2002",
        value: 0.8627,
      },
      {
        date: "01/2003",
        value: 0.9902,
      },
      {
        date: "02/2003",
        value: 0.9137,
      },
      {
        date: "03/2003",
        value: 0.8801,
      },
      {
        date: "04/2003",
        value: 0.9205,
      },
      {
        date: "05/2003",
        value: 0.9673,
      },
      {
        date: "06/2003",
        value: 0.9187,
      },
      {
        date: "07/2003",
        value: 1.0492,
      },
      {
        date: "08/2003",
        value: 0.9058,
      },
      {
        date: "09/2003",
        value: 0.8381,
      },
      {
        date: "10/2003",
        value: 0.8229,
      },
      {
        date: "11/2003",
        value: 0.6785,
      },
      {
        date: "12/2003",
        value: 0.6908,
      },
      {
        date: "01/2004",
        value: 0.6286,
      },
      {
        date: "02/2004",
        value: 0.546,
      },
      {
        date: "03/2004",
        value: 0.6787,
      },
      {
        date: "04/2004",
        value: 0.5878,
      },
      {
        date: "05/2004",
        value: 0.6554,
      },
      {
        date: "06/2004",
        value: 0.677,
      },
      {
        date: "07/2004",
        value: 0.6962,
      },
      {
        date: "08/2004",
        value: 0.7015,
      },
      {
        date: "09/2004",
        value: 0.6737,
      },
      {
        date: "10/2004",
        value: 0.6114,
      },
      {
        date: "11/2004",
        value: 0.6152,
      },
      {
        date: "12/2004",
        value: 0.7412,
      },
      {
        date: "01/2005",
        value: 0.6889,
      },
      {
        date: "02/2005",
        value: 0.5967,
      },
      {
        date: "03/2005",
        value: 0.7648,
      },
      {
        date: "04/2005",
        value: 0.7013,
      },
      {
        date: "05/2005",
        value: 0.754,
      },
      {
        date: "06/2005",
        value: 0.8008,
      },
      {
        date: "07/2005",
        value: 0.7588,
      },
      {
        date: "08/2005",
        value: 0.8483,
      },
      {
        date: "09/2005",
        value: 0.765,
      },
      {
        date: "10/2005",
        value: 0.711,
      },
      {
        date: "11/2005",
        value: 0.6939,
      },
      {
        date: "12/2005",
        value: 0.728,
      },
      {
        date: "01/2006",
        value: 0.7338,
      },
      {
        date: "02/2006",
        value: 0.5729,
      },
      {
        date: "03/2006",
        value: 0.7083,
      },
      {
        date: "04/2006",
        value: 0.5859,
      },
      {
        date: "05/2006",
        value: 0.6897,
      },
      {
        date: "06/2006",
        value: 0.6947,
      },
      {
        date: "07/2006",
        value: 0.676,
      },
      {
        date: "08/2006",
        value: 0.7448,
      },
      {
        date: "09/2006",
        value: 0.6529,
      },
      {
        date: "10/2006",
        value: 0.6884,
      },
      {
        date: "11/2006",
        value: 0.6288,
      },
      {
        date: "12/2006",
        value: 0.653,
      },
      {
        date: "01/2007",
        value: 0.72,
      },
      {
        date: "02/2007",
        value: 0.5725,
      },
      {
        date: "03/2007",
        value: 0.6885,
      },
      {
        date: "04/2007",
        value: 0.6278,
      },
      {
        date: "05/2007",
        value: 0.6697,
      },
      {
        date: "06/2007",
        value: 0.5959,
      },
      {
        date: "07/2007",
        value: 0.6476,
      },
      {
        date: "08/2007",
        value: 0.6473,
      },
      {
        date: "09/2007",
        value: 0.5354,
      },
      {
        date: "10/2007",
        value: 0.6148,
      },
      {
        date: "11/2007",
        value: 0.5593,
      },
      {
        date: "12/2007",
        value: 0.5643,
      },
      {
        date: "01/2008",
        value: 0.6015,
      },
      {
        date: "02/2008",
        value: 0.5244,
      },
      {
        date: "03/2008",
        value: 0.5411,
      },
      {
        date: "04/2008",
        value: 0.596,
      },
      {
        date: "05/2008",
        value: 0.574,
      },
      {
        date: "06/2008",
        value: 0.6152,
      },
      {
        date: "07/2008",
        value: 0.6924,
      },
      {
        date: "08/2008",
        value: 0.6582,
      },
      {
        date: "09/2008",
        value: 0.698,
      },
      {
        date: "10/2008",
        value: 0.7519,
      },
      {
        date: "11/2008",
        value: 0.6626,
      },
      {
        date: "12/2008",
        value: 0.716,
      },
      {
        date: "01/2009",
        value: 0.6849,
      },
      {
        date: "02/2009",
        value: 0.5453,
      },
      {
        date: "03/2009",
        value: 0.6445,
      },
      {
        date: "04/2009",
        value: 0.5456,
      },
      {
        date: "05/2009",
        value: 0.5451,
      },
      {
        date: "06/2009",
        value: 0.5659,
      },
      {
        date: "07/2009",
        value: 0.6056,
      },
      {
        date: "08/2009",
        value: 0.5198,
      },
      {
        date: "09/2009",
        value: 0.5,
      },
      {
        date: "10/2009",
        value: 0.5,
      },
      {
        date: "11/2009",
        value: 0.5,
      },
      {
        date: "12/2009",
        value: 0.5536,
      },
      {
        date: "01/2010",
        value: 0.5,
      },
      {
        date: "02/2010",
        value: 0.5,
      },
      {
        date: "03/2010",
        value: 0.5796,
      },
      {
        date: "04/2010",
        value: 0.5,
      },
      {
        date: "05/2010",
        value: 0.5513,
      },
      {
        date: "06/2010",
        value: 0.5592,
      },
      {
        date: "07/2010",
        value: 0.6157,
      },
      {
        date: "08/2010",
        value: 0.5914,
      },
      {
        date: "09/2010",
        value: 0.5706,
      },
      {
        date: "10/2010",
        value: 0.5474,
      },
      {
        date: "11/2010",
        value: 0.5338,
      },
      {
        date: "12/2010",
        value: 0.6413,
      },
      {
        date: "01/2011",
        value: 0.5719,
      },
      {
        date: "02/2011",
        value: 0.5527,
      },
      {
        date: "03/2011",
        value: 0.6218,
      },
      {
        date: "04/2011",
        value: 0.5371,
      },
      {
        date: "05/2011",
        value: 0.6578,
      },
      {
        date: "06/2011",
        value: 0.612,
      },
      {
        date: "07/2011",
        value: 0.6235,
      },
      {
        date: "08/2011",
        value: 0.7086,
      },
      {
        date: "09/2011",
        value: 0.6008,
      },
      {
        date: "10/2011",
        value: 0.5623,
      },
      {
        date: "11/2011",
        value: 0.5648,
      },
      {
        date: "12/2011",
        value: 0.5942,
      },
      {
        date: "01/2012",
        value: 0.5868,
      },
      {
        date: "02/2012",
        value: 0.5,
      },
      {
        date: "03/2012",
        value: 0.6073,
      },
      {
        date: "04/2012",
        value: 0.5228,
      },
      {
        date: "05/2012",
        value: 0.547,
      },
      {
        date: "06/2012",
        value: 0.4828,
      },
      {
        date: "07/2012",
        value: 0.4973,
      },
      {
        date: "08/2012",
        value: 0.4675,
      },
      {
        date: "09/2012",
        value: 0.4273,
      },
      {
        date: "10/2012",
        value: 0.4273,
      },
      {
        date: "11/2012",
        value: 0.4134,
      },
      {
        date: "12/2012",
        value: 0.4134,
      },
      {
        date: "01/2013",
        value: 0.4134,
      },
      {
        date: "02/2013",
        value: 0.4134,
      },
      {
        date: "03/2013",
        value: 0.4134,
      },
      {
        date: "04/2013",
        value: 0.4134,
      },
      {
        date: "05/2013",
        value: 0.4273,
      },
      {
        date: "06/2013",
        value: 0.4551,
      },
      {
        date: "07/2013",
        value: 0.4761,
      },
      {
        date: "08/2013",
        value: 0.4828,
      },
      {
        date: "09/2013",
        value: 0.5079,
      },
      {
        date: "10/2013",
        value: 0.5925,
      },
      {
        date: "11/2013",
        value: 0.5208,
      },
      {
        date: "12/2013",
        value: 0.5496,
      },
      {
        date: "01/2014",
        value: 0.6132,
      },
      {
        date: "02/2014",
        value: 0.554,
      },
      {
        date: "03/2014",
        value: 0.5267,
      },
      {
        date: "04/2014",
        value: 0.5461,
      },
      {
        date: "05/2014",
        value: 0.5607,
      },
      {
        date: "06/2014",
        value: 0.5467,
      },
      {
        date: "07/2014",
        value: 0.6059,
      },
      {
        date: "08/2014",
        value: 0.5605,
      },
      {
        date: "09/2014",
        value: 0.5877,
      },
      {
        date: "10/2014",
        value: 0.6043,
      },
      {
        date: "11/2014",
        value: 0.5485,
      },
      {
        date: "12/2014",
        value: 0.6058,
      },
      {
        date: "01/2015",
        value: 0.5882,
      },
      {
        date: "02/2015",
        value: 0.5169,
      },
      {
        date: "03/2015",
        value: 0.6302,
      },
      {
        date: "04/2015",
        value: 0.6079,
      },
      {
        date: "05/2015",
        value: 0.6159,
      },
      {
        date: "06/2015",
        value: 0.6822,
      },
      {
        date: "07/2015",
        value: 0.7317,
      },
      {
        date: "08/2015",
        value: 0.6876,
      },
      {
        date: "09/2015",
        value: 0.693,
      },
      {
        date: "10/2015",
        value: 0.6799,
      },
      {
        date: "11/2015",
        value: 0.6303,
      },
      {
        date: "12/2015",
        value: 0.7261,
      },
      {
        date: "01/2016",
        value: 0.6327,
      },
      {
        date: "02/2016",
        value: 0.5962,
      },
      {
        date: "03/2016",
        value: 0.7179,
      },
      {
        date: "04/2016",
        value: 0.6311,
      },
      {
        date: "05/2016",
        value: 0.6541,
      },
      {
        date: "06/2016",
        value: 0.7053,
      },
      {
        date: "07/2016",
        value: 0.6629,
      },
      {
        date: "08/2016",
        value: 0.7558,
      },
      {
        date: "09/2016",
        value: 0.6583,
      },
      {
        date: "10/2016",
        value: 0.6609,
      },
      {
        date: "11/2016",
        value: 0.6435,
      },
      {
        date: "12/2016",
        value: 0.6858,
      },
      {
        date: "01/2017",
        value: 0.6708,
      },
      {
        date: "02/2017",
        value: 0.5304,
      },
      {
        date: "03/2017",
        value: 0.6527,
      },
      {
        date: "04/2017",
        value: 0.5,
      },
      {
        date: "05/2017",
        value: 0.5768,
      },
      {
        date: "06/2017",
        value: 0.5539,
      },
      {
        date: "07/2017",
        value: 0.5626,
      },
      {
        date: "08/2017",
        value: 0.5512,
      },
      {
        date: "09/2017",
        value: 0.5,
      },
      {
        date: "10/2017",
        value: 0.469,
      },
      {
        date: "11/2017",
        value: 0.4273,
      },
      {
        date: "12/2017",
        value: 0.4273,
      },
      {
        date: "01/2018",
        value: 0.3994,
      },
      {
        date: "02/2018",
        value: 0.3994,
      },
      {
        date: "03/2018",
        value: 0.3855,
      },
      {
        date: "04/2018",
        value: 0.3715,
      },
      {
        date: "05/2018",
        value: 0.3715,
      },
      {
        date: "06/2018",
        value: 0.3715,
      },
      {
        date: "07/2018",
        value: 0.3715,
      },
      {
        date: "08/2018",
        value: 0.3715,
      },
      {
        date: "09/2018",
        value: 0.3715,
      },
      {
        date: "10/2018",
        value: 0.3715,
      },
      {
        date: "11/2018",
        value: 0.3715,
      },
      {
        date: "12/2018",
        value: 0.3715,
      },
      {
        date: "01/2019",
        value: 0.3715,
      },
      {
        date: "02/2019",
        value: 0.3715,
      },
      {
        date: "03/2019",
        value: 0.3715,
      },
      {
        date: "04/2019",
        value: 0.3715,
      },
      {
        date: "05/2019",
        value: 0.3715,
      },
      {
        date: "06/2019",
        value: 0.3715,
      },
      {
        date: "07/2019",
        value: 0.3715,
      },
      {
        date: "08/2019",
        value: 0.3434,
      },
      {
        date: "09/2019",
        value: 0.3434,
      },
      {
        date: "10/2019",
        value: 0.3153,
      },
      {
        date: "11/2019",
        value: 0.2871,
      },
      {
        date: "12/2019",
        value: 0.2871,
      },
      {
        date: "01/2020",
        value: 0.2588,
      },
      {
        date: "02/2020",
        value: 0.2588,
      },
      {
        date: "03/2020",
        value: 0.2446,
      },
      {
        date: "04/2020",
        value: 0.2162,
      },
      {
        date: "05/2020",
        value: 0.2162,
      },
      {
        date: "06/2020",
        value: 0.1733,
      },
      {
        date: "07/2020",
        value: 0.1303,
      },
      {
        date: "08/2020",
        value: 0.1303,
      },
      {
        date: "09/2020",
        value: 0.1159,
      },
      {
        date: "10/2020",
        value: 0.1159,
      },
      {
        date: "11/2020",
        value: 0.1159,
      },
      {
        date: "12/2020",
        value: 0.1159,
      },
      {
        date: "01/2021",
        value: 0.1159,
      },
      {
        date: "02/2021",
        value: 0.1159,
      },
      {
        date: "03/2021",
        value: 0.1159,
      },
      {
        date: "04/2021",
        value: 0.159,
      },
      {
        date: "05/2021",
        value: 0.159,
      },
      {
        date: "06/2021",
        value: 0.2019,
      },
      {
        date: "07/2021",
        value: 0.2446,
      },
      {
        date: "08/2021",
        value: 0.2446,
      },
      {
        date: "09/2021",
        value: 0.3012,
      },
      {
        date: "10/2021",
        value: 0.3575,
      },
      {
        date: "11/2021",
        value: 0.4412,
      },
      {
        date: "12/2021",
        value: 0.4902,
      },
      {
        date: "01/2022",
        value: 0.5608,
      },
      {
        date: "02/2022",
        value: 0.5,
      },
      {
        date: "03/2022",
        value: 0.5976,
      },
      {
        date: "04/2022",
        value: 0.5558,
      },
      {
        date: "05/2022",
        value: 0.6671,
      },
      {
        date: "06/2022",
        value: 0.6491,
      },
      {
        date: "07/2022",
        value: 0.6639,
      },
      {
        date: "08/2022",
        value: 0.7421,
      },
      {
        date: "09/2022",
        value: 0.6814,
      },
      {
        date: "10/2022",
        value: 0.6501,
      },
      {
        date: "11/2022",
        value: 0.6515,
      },
      {
        date: "12/2022",
        value: 0.7082,
      },
      {
        date: "01/2023",
        value: 0.7091,
      },
      // {
      //   date: "02/2023",
      //   value: 0.5834,
      // },
    ];

    const anual = [
      {
        date: "2022",
        value: 7.9,
      },
      {
        date: "2021",
        value: 6.22,
      },
      {
        date: "2020",
        value: 6.17,
      },
      {
        date: "2019",
        value: 6.17,
      },
      {
        date: "2018",
        value: 6.17,
      },
      {
        date: "2017",
        value: 6.8,
      },
      {
        date: "2016",
        value: 8.3,
      },
      {
        date: "2015",
        value: 8.07,
      },
      {
        date: "2014",
        value: 7.08,
      },
      {
        date: "2013",
        value: 6.37,
      },
      {
        date: "2012",
        value: 6.48,
      },
      {
        date: "2011",
        value: 7.45,
      },
      {
        date: "2010",
        value: 6.9,
      },
      {
        date: "2009",
        value: 6.92,
      },
      {
        date: "2008",
        value: 7.9,
      },
      {
        date: "2007",
        value: 7.7,
      },
      {
        date: "2006",
        value: 8.33,
      },
      {
        date: "2005",
        value: 9.18,
      },
      {
        date: "2004",
        value: 8.1,
      },
      {
        date: "2003",
        value: 11.1,
      },
      {
        date: "2002",
        value: 9.14,
      },
      {
        date: "2001",
        value: 8.59,
      },
      {
        date: "2000",
        value: 8.39,
      },
    ].reverse();

    return mensal;
  }
}
