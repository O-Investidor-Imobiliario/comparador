export class IbovespaService {
  getValues(): { date: string; value: number }[] {
    const anual = [
      {
        date: "2022",
        value: 4.69,
      },
      {
        date: "2021",
        value: -11.93,
      },
      {
        date: "2020",
        value: 2.92,
      },
      {
        date: "2019",
        value: 31.58,
      },
      {
        date: "2018",
        value: 15.03,
      },
      {
        date: "2017",
        value: 26.83,
      },
      {
        date: "2016",
        value: 38.93,
      },
      {
        date: "2015",
        value: -13.31,
      },
      {
        date: "2014",
        value: -2.91,
      },
      {
        date: "2013",
        value: -15.5,
      },
      {
        date: "2012",
        value: 7.4,
      },
      {
        date: "2011",
        value: -18.11,
      },
      {
        date: "2010",
        value: 1.04,
      },
      {
        date: "2009",
        value: 82.66,
      },
      {
        date: "2008",
        value: -41.22,
      },
      {
        date: "2007",
        value: 43.65,
      },
      {
        date: "2006",
        value: 32.93,
      },
      {
        date: "2005",
        value: 27.71,
      },
      {
        date: "2004",
        value: 17.81,
      },
      {
        date: "2003",
        value: 97.33,
      },
      {
        date: "2002",
        value: -17.01,
      },
      {
        date: "2001",
        value: -11.02,
      },
      {
        date: "2000",
        value: -10.72,
      },
    ].reverse();

    const mensal = [
      {
        date: "01/2000",
        value: -4.12,
      },
      {
        date: "02/2000",
        value: 7.76,
      },
      {
        date: "03/2000",
        value: 0.91,
      },
      {
        date: "04/2000",
        value: -12.81,
      },
      {
        date: "05/2000",
        value: -3.74,
      },
      {
        date: "06/2000",
        value: 11.84,
      },
      {
        date: "07/2000",
        value: -1.63,
      },
      {
        date: "08/2000",
        value: 5.42,
      },
      {
        date: "09/2000",
        value: -8.18,
      },
      {
        date: "10/2000",
        value: -6.66,
      },
      {
        date: "11/2000",
        value: -10.63,
      },
      {
        date: "12/2000",
        value: 14.84,
      },
      {
        date: "01/2001",
        value: 15.82,
      },
      {
        date: "02/2001",
        value: -10.08,
      },
      {
        date: "03/2001",
        value: -9.14,
      },
      {
        date: "04/2001",
        value: 3.32,
      },
      {
        date: "05/2001",
        value: -1.79,
      },
      {
        date: "06/2001",
        value: -0.62,
      },
      {
        date: "07/2001",
        value: -5.53,
      },
      {
        date: "08/2001",
        value: -6.64,
      },
      {
        date: "09/2001",
        value: -17.17,
      },
      {
        date: "10/2001",
        value: 6.85,
      },
      {
        date: "11/2001",
        value: 13.79,
      },
      {
        date: "12/2001",
        value: 4.99,
      },
      {
        date: "01/2002",
        value: -6.31,
      },
      {
        date: "02/2002",
        value: 10.31,
      },
      {
        date: "03/2002",
        value: -5.55,
      },
      {
        date: "04/2002",
        value: -1.28,
      },
      {
        date: "05/2002",
        value: -1.71,
      },
      {
        date: "06/2002",
        value: -13.39,
      },
      {
        date: "07/2002",
        value: -12.36,
      },
      {
        date: "08/2002",
        value: 6.35,
      },
      {
        date: "09/2002",
        value: -16.95,
      },
      {
        date: "10/2002",
        value: 17.92,
      },
      {
        date: "11/2002",
        value: 3.35,
      },
      {
        date: "12/2002",
        value: 7.23,
      },
      {
        date: "01/2003",
        value: -2.91,
      },
      {
        date: "02/2003",
        value: -6.04,
      },
      {
        date: "03/2003",
        value: 9.66,
      },
      {
        date: "04/2003",
        value: 11.38,
      },
      {
        date: "05/2003",
        value: 6.89,
      },
      {
        date: "06/2003",
        value: -3.35,
      },
      {
        date: "07/2003",
        value: 4.62,
      },
      {
        date: "08/2003",
        value: 11.81,
      },
      {
        date: "09/2003",
        value: 5.51,
      },
      {
        date: "10/2003",
        value: 12.32,
      },
      {
        date: "11/2003",
        value: 12.24,
      },
      {
        date: "12/2003",
        value: 10.17,
      },
      {
        date: "01/2004",
        value: -1.73,
      },
      {
        date: "02/2004",
        value: -0.44,
      },
      {
        date: "03/2004",
        value: 1.78,
      },
      {
        date: "04/2004",
        value: -11.45,
      },
      {
        date: "05/2004",
        value: -0.32,
      },
      {
        date: "06/2004",
        value: 8.21,
      },
      {
        date: "07/2004",
        value: 5.62,
      },
      {
        date: "08/2004",
        value: 2.09,
      },
      {
        date: "09/2004",
        value: 1.94,
      },
      {
        date: "10/2004",
        value: -0.83,
      },
      {
        date: "11/2004",
        value: 9.01,
      },
      {
        date: "12/2004",
        value: 4.25,
      },
      {
        date: "01/2005",
        value: -7.04,
      },
      {
        date: "02/2005",
        value: 15.55,
      },
      {
        date: "03/2005",
        value: -5.43,
      },
      {
        date: "04/2005",
        value: -6.64,
      },
      {
        date: "05/2005",
        value: 1.46,
      },
      {
        date: "06/2005",
        value: -0.62,
      },
      {
        date: "07/2005",
        value: 3.96,
      },
      {
        date: "08/2005",
        value: 7.69,
      },
      {
        date: "09/2005",
        value: 12.62,
      },
      {
        date: "10/2005",
        value: -4.4,
      },
      {
        date: "11/2005",
        value: 5.71,
      },
      {
        date: "12/2005",
        value: 4.82,
      },
      {
        date: "01/2006",
        value: 14.73,
      },
      {
        date: "02/2006",
        value: 0.59,
      },
      {
        date: "03/2006",
        value: -1.71,
      },
      {
        date: "04/2006",
        value: 6.35,
      },
      {
        date: "05/2006",
        value: -9.5,
      },
      {
        date: "06/2006",
        value: 0.28,
      },
      {
        date: "07/2006",
        value: 1.22,
      },
      {
        date: "08/2006",
        value: -2.28,
      },
      {
        date: "09/2006",
        value: 0.6,
      },
      {
        date: "10/2006",
        value: 7.72,
      },
      {
        date: "11/2006",
        value: 6.8,
      },
      {
        date: "12/2006",
        value: 6.06,
      },
      {
        date: "01/2007",
        value: 0.38,
      },
      {
        date: "02/2007",
        value: -1.68,
      },
      {
        date: "03/2007",
        value: 4.36,
      },
      {
        date: "04/2007",
        value: 6.88,
      },
      {
        date: "05/2007",
        value: 6.77,
      },
      {
        date: "06/2007",
        value: 4.06,
      },
      {
        date: "07/2007",
        value: -0.39,
      },
      {
        date: "08/2007",
        value: 0.84,
      },
      {
        date: "09/2007",
        value: 10.67,
      },
      {
        date: "10/2007",
        value: 8.03,
      },
      {
        date: "11/2007",
        value: -3.54,
      },
      {
        date: "12/2007",
        value: 1.4,
      },
      {
        date: "01/2008",
        value: -6.88,
      },
      {
        date: "02/2008",
        value: 6.72,
      },
      {
        date: "03/2008",
        value: -3.97,
      },
      {
        date: "04/2008",
        value: 11.32,
      },
      {
        date: "05/2008",
        value: 6.96,
      },
      {
        date: "06/2008",
        value: -10.43,
      },
      {
        date: "07/2008",
        value: -8.48,
      },
      {
        date: "08/2008",
        value: -6.43,
      },
      {
        date: "09/2008",
        value: -11.03,
      },
      {
        date: "10/2008",
        value: -24.8,
      },
      {
        date: "11/2008",
        value: -1.77,
      },
      {
        date: "12/2008",
        value: 2.61,
      },
      {
        date: "01/2009",
        value: 4.66,
      },
      {
        date: "02/2009",
        value: -2.84,
      },
      {
        date: "03/2009",
        value: 7.18,
      },
      {
        date: "04/2009",
        value: 15.55,
      },
      {
        date: "05/2009",
        value: 12.49,
      },
      {
        date: "06/2009",
        value: -3.26,
      },
      {
        date: "07/2009",
        value: 6.41,
      },
      {
        date: "08/2009",
        value: 3.15,
      },
      {
        date: "09/2009",
        value: 8.9,
      },
      {
        date: "10/2009",
        value: 0.04,
      },
      {
        date: "11/2009",
        value: 8.93,
      },
      {
        date: "12/2009",
        value: 2.3,
      },
      {
        date: "01/2010",
        value: -4.65,
      },
      {
        date: "02/2010",
        value: 1.68,
      },
      {
        date: "03/2010",
        value: 5.82,
      },
      {
        date: "04/2010",
        value: -4.04,
      },
      {
        date: "05/2010",
        value: -6.64,
      },
      {
        date: "06/2010",
        value: -3.35,
      },
      {
        date: "07/2010",
        value: 10.8,
      },
      {
        date: "08/2010",
        value: -3.51,
      },
      {
        date: "09/2010",
        value: 6.58,
      },
      {
        date: "10/2010",
        value: 1.79,
      },
      {
        date: "11/2010",
        value: -4.2,
      },
      {
        date: "12/2010",
        value: 2.36,
      },
      {
        date: "01/2011",
        value: -3.94,
      },
      {
        date: "02/2011",
        value: 1.21,
      },
      {
        date: "03/2011",
        value: 1.79,
      },
      {
        date: "04/2011",
        value: -3.58,
      },
      {
        date: "05/2011",
        value: -2.29,
      },
      {
        date: "06/2011",
        value: -3.43,
      },
      {
        date: "07/2011",
        value: -5.74,
      },
      {
        date: "08/2011",
        value: -3.96,
      },
      {
        date: "09/2011",
        value: -7.38,
      },
      {
        date: "10/2011",
        value: 11.49,
      },
      {
        date: "11/2011",
        value: -2.51,
      },
      {
        date: "12/2011",
        value: -0.21,
      },
      {
        date: "01/2012",
        value: 11.13,
      },
      {
        date: "02/2012",
        value: 4.34,
      },
      {
        date: "03/2012",
        value: -1.98,
      },
      {
        date: "04/2012",
        value: -4.17,
      },
      {
        date: "05/2012",
        value: -11.86,
      },
      {
        date: "06/2012",
        value: -0.25,
      },
      {
        date: "07/2012",
        value: 3.21,
      },
      {
        date: "08/2012",
        value: 1.72,
      },
      {
        date: "09/2012",
        value: 3.71,
      },
      {
        date: "10/2012",
        value: -3.56,
      },
      {
        date: "11/2012",
        value: 0.71,
      },
      {
        date: "12/2012",
        value: 6.05,
      },
      {
        date: "01/2013",
        value: -1.95,
      },
      {
        date: "02/2013",
        value: -3.91,
      },
      {
        date: "03/2013",
        value: -1.87,
      },
      {
        date: "04/2013",
        value: -0.78,
      },
      {
        date: "05/2013",
        value: -4.3,
      },
      {
        date: "06/2013",
        value: -11.31,
      },
      {
        date: "07/2013",
        value: 1.64,
      },
      {
        date: "08/2013",
        value: 3.68,
      },
      {
        date: "09/2013",
        value: 4.65,
      },
      {
        date: "10/2013",
        value: 3.66,
      },
      {
        date: "11/2013",
        value: -3.27,
      },
      {
        date: "12/2013",
        value: -1.86,
      },
      {
        date: "01/2014",
        value: -7.51,
      },
      {
        date: "02/2014",
        value: -1.14,
      },
      {
        date: "03/2014",
        value: 7.05,
      },
      {
        date: "04/2014",
        value: 2.4,
      },
      {
        date: "05/2014",
        value: -0.75,
      },
      {
        date: "06/2014",
        value: 3.76,
      },
      {
        date: "07/2014",
        value: 5.01,
      },
      {
        date: "08/2014",
        value: 9.78,
      },
      {
        date: "09/2014",
        value: -11.7,
      },
      {
        date: "10/2014",
        value: 0.95,
      },
      {
        date: "11/2014",
        value: 0.17,
      },
      {
        date: "12/2014",
        value: -8.62,
      },
      {
        date: "01/2015",
        value: -6.2,
      },
      {
        date: "02/2015",
        value: 9.97,
      },
      {
        date: "03/2015",
        value: -0.84,
      },
      {
        date: "04/2015",
        value: 9.93,
      },
      {
        date: "05/2015",
        value: -6.17,
      },
      {
        date: "06/2015",
        value: 0.61,
      },
      {
        date: "07/2015",
        value: -4.17,
      },
      {
        date: "08/2015",
        value: -8.33,
      },
      {
        date: "09/2015",
        value: -3.36,
      },
      {
        date: "10/2015",
        value: 1.8,
      },
      {
        date: "11/2015",
        value: -1.63,
      },
      {
        date: "12/2015",
        value: -3.92,
      },
      {
        date: "01/2016",
        value: -6.79,
      },
      {
        date: "02/2016",
        value: 5.91,
      },
      {
        date: "03/2016",
        value: 16.97,
      },
      {
        date: "04/2016",
        value: 7.7,
      },
      {
        date: "05/2016",
        value: -10.09,
      },
      {
        date: "06/2016",
        value: 6.3,
      },
      {
        date: "07/2016",
        value: 11.22,
      },
      {
        date: "08/2016",
        value: 1.03,
      },
      {
        date: "09/2016",
        value: 0.8,
      },
      {
        date: "10/2016",
        value: 11.23,
      },
      {
        date: "11/2016",
        value: -4.65,
      },
      {
        date: "12/2016",
        value: -2.71,
      },
      {
        date: "01/2017",
        value: 7.38,
      },
      {
        date: "02/2017",
        value: 3.08,
      },
      {
        date: "03/2017",
        value: -2.52,
      },
      {
        date: "04/2017",
        value: 0.64,
      },
      {
        date: "05/2017",
        value: -4.12,
      },
      {
        date: "06/2017",
        value: 0.3,
      },
      {
        date: "07/2017",
        value: 4.8,
      },
      {
        date: "08/2017",
        value: 7.46,
      },
      {
        date: "09/2017",
        value: 4.88,
      },
      {
        date: "10/2017",
        value: 0.02,
      },
      {
        date: "11/2017",
        value: -3.15,
      },
      {
        date: "12/2017",
        value: 6.16,
      },
      {
        date: "01/2018",
        value: 11.14,
      },
      {
        date: "02/2018",
        value: 0.52,
      },
      {
        date: "03/2018",
        value: 0.01,
      },
      {
        date: "04/2018",
        value: 0.88,
      },
      {
        date: "05/2018",
        value: -10.87,
      },
      {
        date: "06/2018",
        value: -5.2,
      },
      {
        date: "07/2018",
        value: 8.88,
      },
      {
        date: "08/2018",
        value: -3.21,
      },
      {
        date: "09/2018",
        value: 3.48,
      },
      {
        date: "10/2018",
        value: 10.19,
      },
      {
        date: "11/2018",
        value: 2.38,
      },
      {
        date: "12/2018",
        value: -1.81,
      },
      {
        date: "01/2019",
        value: 10.82,
      },
      {
        date: "02/2019",
        value: -1.86,
      },
      {
        date: "03/2019",
        value: -0.18,
      },
      {
        date: "04/2019",
        value: 0.98,
      },
      {
        date: "05/2019",
        value: 0.7,
      },
      {
        date: "06/2019",
        value: 4.06,
      },
      {
        date: "07/2019",
        value: 0.84,
      },
      {
        date: "08/2019",
        value: -0.67,
      },
      {
        date: "09/2019",
        value: 3.57,
      },
      {
        date: "10/2019",
        value: 2.36,
      },
      {
        date: "11/2019",
        value: 0.95,
      },
      {
        date: "12/2019",
        value: 6.85,
      },
      {
        date: "01/2020",
        value: -1.63,
      },
      {
        date: "02/2020",
        value: -8.43,
      },
      {
        date: "03/2020",
        value: -29.9,
      },
      {
        date: "04/2020",
        value: 10.25,
      },
      {
        date: "05/2020",
        value: 8.57,
      },
      {
        date: "06/2020",
        value: 8.76,
      },
      {
        date: "07/2020",
        value: 8.27,
      },
      {
        date: "08/2020",
        value: -3.44,
      },
      {
        date: "09/2020",
        value: -4.8,
      },
      {
        date: "10/2020",
        value: -0.69,
      },
      {
        date: "11/2020",
        value: 15.9,
      },
      {
        date: "12/2020",
        value: 9.3,
      },
      {
        date: "01/2021",
        value: -3.32,
      },
      {
        date: "02/2021",
        value: -4.37,
      },
      {
        date: "03/2021",
        value: 6.0,
      },
      {
        date: "04/2021",
        value: 1.94,
      },
      {
        date: "05/2021",
        value: 6.16,
      },
      {
        date: "06/2021",
        value: 0.46,
      },
      {
        date: "07/2021",
        value: -3.94,
      },
      {
        date: "08/2021",
        value: -2.48,
      },
      {
        date: "09/2021",
        value: -6.57,
      },
      {
        date: "10/2021",
        value: -6.74,
      },
      {
        date: "11/2021",
        value: -1.53,
      },
      {
        date: "12/2021",
        value: 2.85,
      },
      {
        date: "01/2022",
        value: 6.98,
      },
      {
        date: "02/2022",
        value: 0.89,
      },
      {
        date: "03/2022",
        value: 6.06,
      },
      {
        date: "04/2022",
        value: -10.1,
      },
      {
        date: "05/2022",
        value: 3.22,
      },
      {
        date: "06/2022",
        value: -11.5,
      },
      {
        date: "07/2022",
        value: 4.69,
      },
      {
        date: "08/2022",
        value: 6.16,
      },
      {
        date: "09/2022",
        value: 0.47,
      },
      {
        date: "10/2022",
        value: 5.45,
      },
      {
        date: "11/2022",
        value: -3.06,
      },
      {
        date: "12/2022",
        value: -2.45,
      },
    ];

    return mensal;
  }
}
