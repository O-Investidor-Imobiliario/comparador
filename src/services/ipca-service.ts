export class IpcaService {
  getValues() {
    const mensal = [
      {
        date: "01/2000",
        value: 0.62,
      },
      {
        date: "02/2000",
        value: 0.13,
      },
      {
        date: "03/2000",
        value: 0.22,
      },
      {
        date: "04/2000",
        value: 0.42,
      },
      {
        date: "05/2000",
        value: 0.01,
      },
      {
        date: "06/2000",
        value: 0.23,
      },
      {
        date: "07/2000",
        value: 1.61,
      },
      {
        date: "08/2000",
        value: 1.31,
      },
      {
        date: "09/2000",
        value: 0.23,
      },
      {
        date: "10/2000",
        value: 0.14,
      },
      {
        date: "11/2000",
        value: 0.32,
      },
      {
        date: "12/2000",
        value: 0.59,
      },
      {
        date: "01/2001",
        value: 0.57,
      },
      {
        date: "02/2001",
        value: 0.46,
      },
      {
        date: "03/2001",
        value: 0.38,
      },
      {
        date: "04/2001",
        value: 0.58,
      },
      {
        date: "05/2001",
        value: 0.41,
      },
      {
        date: "06/2001",
        value: 0.52,
      },
      {
        date: "07/2001",
        value: 1.33,
      },
      {
        date: "08/2001",
        value: 0.7,
      },
      {
        date: "09/2001",
        value: 0.28,
      },
      {
        date: "10/2001",
        value: 0.83,
      },
      {
        date: "11/2001",
        value: 0.71,
      },
      {
        date: "12/2001",
        value: 0.65,
      },
      {
        date: "01/2002",
        value: 0.52,
      },
      {
        date: "02/2002",
        value: 0.36,
      },
      {
        date: "03/2002",
        value: 0.6,
      },
      {
        date: "04/2002",
        value: 0.8,
      },
      {
        date: "05/2002",
        value: 0.21,
      },
      {
        date: "06/2002",
        value: 0.42,
      },
      {
        date: "07/2002",
        value: 1.19,
      },
      {
        date: "08/2002",
        value: 0.65,
      },
      {
        date: "09/2002",
        value: 0.72,
      },
      {
        date: "10/2002",
        value: 1.31,
      },
      {
        date: "11/2002",
        value: 3.02,
      },
      {
        date: "12/2002",
        value: 2.1,
      },
      {
        date: "01/2003",
        value: 2.25,
      },
      {
        date: "02/2003",
        value: 1.57,
      },
      {
        date: "03/2003",
        value: 1.23,
      },
      {
        date: "04/2003",
        value: 0.97,
      },
      {
        date: "05/2003",
        value: 0.61,
      },
      {
        date: "06/2003",
        value: -0.15,
      },
      {
        date: "07/2003",
        value: 0.2,
      },
      {
        date: "08/2003",
        value: 0.34,
      },
      {
        date: "09/2003",
        value: 0.78,
      },
      {
        date: "10/2003",
        value: 0.29,
      },
      {
        date: "11/2003",
        value: 0.34,
      },
      {
        date: "12/2003",
        value: 0.52,
      },
      {
        date: "01/2004",
        value: 0.76,
      },
      {
        date: "02/2004",
        value: 0.61,
      },
      {
        date: "03/2004",
        value: 0.47,
      },
      {
        date: "04/2004",
        value: 0.37,
      },
      {
        date: "05/2004",
        value: 0.51,
      },
      {
        date: "06/2004",
        value: 0.71,
      },
      {
        date: "07/2004",
        value: 0.91,
      },
      {
        date: "08/2004",
        value: 0.69,
      },
      {
        date: "09/2004",
        value: 0.33,
      },
      {
        date: "10/2004",
        value: 0.44,
      },
      {
        date: "11/2004",
        value: 0.69,
      },
      {
        date: "12/2004",
        value: 0.86,
      },
      {
        date: "01/2005",
        value: 0.58,
      },
      {
        date: "02/2005",
        value: 0.59,
      },
      {
        date: "03/2005",
        value: 0.61,
      },
      {
        date: "04/2005",
        value: 0.87,
      },
      {
        date: "05/2005",
        value: 0.49,
      },
      {
        date: "06/2005",
        value: -0.02,
      },
      {
        date: "07/2005",
        value: 0.25,
      },
      {
        date: "08/2005",
        value: 0.17,
      },
      {
        date: "09/2005",
        value: 0.35,
      },
      {
        date: "10/2005",
        value: 0.75,
      },
      {
        date: "11/2005",
        value: 0.55,
      },
      {
        date: "12/2005",
        value: 0.36,
      },
      {
        date: "01/2006",
        value: 0.59,
      },
      {
        date: "02/2006",
        value: 0.41,
      },
      {
        date: "03/2006",
        value: 0.43,
      },
      {
        date: "04/2006",
        value: 0.21,
      },
      {
        date: "05/2006",
        value: 0.1,
      },
      {
        date: "06/2006",
        value: -0.21,
      },
      {
        date: "07/2006",
        value: 0.19,
      },
      {
        date: "08/2006",
        value: 0.05,
      },
      {
        date: "09/2006",
        value: 0.21,
      },
      {
        date: "10/2006",
        value: 0.33,
      },
      {
        date: "11/2006",
        value: 0.31,
      },
      {
        date: "12/2006",
        value: 0.48,
      },
      {
        date: "01/2007",
        value: 0.44,
      },
      {
        date: "02/2007",
        value: 0.44,
      },
      {
        date: "03/2007",
        value: 0.37,
      },
      {
        date: "04/2007",
        value: 0.25,
      },
      {
        date: "05/2007",
        value: 0.28,
      },
      {
        date: "06/2007",
        value: 0.28,
      },
      {
        date: "07/2007",
        value: 0.24,
      },
      {
        date: "08/2007",
        value: 0.47,
      },
      {
        date: "09/2007",
        value: 0.18,
      },
      {
        date: "10/2007",
        value: 0.3,
      },
      {
        date: "11/2007",
        value: 0.38,
      },
      {
        date: "12/2007",
        value: 0.74,
      },
      {
        date: "01/2008",
        value: 0.54,
      },
      {
        date: "02/2008",
        value: 0.49,
      },
      {
        date: "03/2008",
        value: 0.48,
      },
      {
        date: "04/2008",
        value: 0.55,
      },
      {
        date: "05/2008",
        value: 0.79,
      },
      {
        date: "06/2008",
        value: 0.74,
      },
      {
        date: "07/2008",
        value: 0.53,
      },
      {
        date: "08/2008",
        value: 0.28,
      },
      {
        date: "09/2008",
        value: 0.26,
      },
      {
        date: "10/2008",
        value: 0.45,
      },
      {
        date: "11/2008",
        value: 0.36,
      },
      {
        date: "12/2008",
        value: 0.28,
      },
      {
        date: "01/2009",
        value: 0.48,
      },
      {
        date: "02/2009",
        value: 0.55,
      },
      {
        date: "03/2009",
        value: 0.2,
      },
      {
        date: "04/2009",
        value: 0.48,
      },
      {
        date: "05/2009",
        value: 0.47,
      },
      {
        date: "06/2009",
        value: 0.36,
      },
      {
        date: "07/2009",
        value: 0.24,
      },
      {
        date: "08/2009",
        value: 0.15,
      },
      {
        date: "09/2009",
        value: 0.24,
      },
      {
        date: "10/2009",
        value: 0.28,
      },
      {
        date: "11/2009",
        value: 0.41,
      },
      {
        date: "12/2009",
        value: 0.37,
      },
      {
        date: "01/2010",
        value: 0.75,
      },
      {
        date: "02/2010",
        value: 0.78,
      },
      {
        date: "03/2010",
        value: 0.52,
      },
      {
        date: "04/2010",
        value: 0.57,
      },
      {
        date: "05/2010",
        value: 0.43,
      },
      {
        date: "06/2010",
        value: 0.0,
      },
      {
        date: "07/2010",
        value: 0.01,
      },
      {
        date: "08/2010",
        value: 0.04,
      },
      {
        date: "09/2010",
        value: 0.45,
      },
      {
        date: "10/2010",
        value: 0.75,
      },
      {
        date: "11/2010",
        value: 0.83,
      },
      {
        date: "12/2010",
        value: 0.63,
      },
      {
        date: "01/2011",
        value: 0.83,
      },
      {
        date: "02/2011",
        value: 0.8,
      },
      {
        date: "03/2011",
        value: 0.79,
      },
      {
        date: "04/2011",
        value: 0.77,
      },
      {
        date: "05/2011",
        value: 0.47,
      },
      {
        date: "06/2011",
        value: 0.15,
      },
      {
        date: "07/2011",
        value: 0.16,
      },
      {
        date: "08/2011",
        value: 0.37,
      },
      {
        date: "09/2011",
        value: 0.53,
      },
      {
        date: "10/2011",
        value: 0.43,
      },
      {
        date: "11/2011",
        value: 0.52,
      },
      {
        date: "12/2011",
        value: 0.5,
      },
      {
        date: "01/2012",
        value: 0.56,
      },
      {
        date: "02/2012",
        value: 0.45,
      },
      {
        date: "03/2012",
        value: 0.21,
      },
      {
        date: "04/2012",
        value: 0.64,
      },
      {
        date: "05/2012",
        value: 0.36,
      },
      {
        date: "06/2012",
        value: 0.08,
      },
      {
        date: "07/2012",
        value: 0.43,
      },
      {
        date: "08/2012",
        value: 0.41,
      },
      {
        date: "09/2012",
        value: 0.57,
      },
      {
        date: "10/2012",
        value: 0.59,
      },
      {
        date: "11/2012",
        value: 0.6,
      },
      {
        date: "12/2012",
        value: 0.79,
      },
      {
        date: "01/2013",
        value: 0.86,
      },
      {
        date: "02/2013",
        value: 0.6,
      },
      {
        date: "03/2013",
        value: 0.47,
      },
      {
        date: "04/2013",
        value: 0.55,
      },
      {
        date: "05/2013",
        value: 0.37,
      },
      {
        date: "06/2013",
        value: 0.26,
      },
      {
        date: "07/2013",
        value: 0.03,
      },
      {
        date: "08/2013",
        value: 0.24,
      },
      {
        date: "09/2013",
        value: 0.35,
      },
      {
        date: "10/2013",
        value: 0.57,
      },
      {
        date: "11/2013",
        value: 0.54,
      },
      {
        date: "12/2013",
        value: 0.92,
      },
      {
        date: "01/2014",
        value: 0.55,
      },
      {
        date: "02/2014",
        value: 0.69,
      },
      {
        date: "03/2014",
        value: 0.92,
      },
      {
        date: "04/2014",
        value: 0.67,
      },
      {
        date: "05/2014",
        value: 0.46,
      },
      {
        date: "06/2014",
        value: 0.4,
      },
      {
        date: "07/2014",
        value: 0.01,
      },
      {
        date: "08/2014",
        value: 0.25,
      },
      {
        date: "09/2014",
        value: 0.57,
      },
      {
        date: "10/2014",
        value: 0.42,
      },
      {
        date: "11/2014",
        value: 0.51,
      },
      {
        date: "12/2014",
        value: 0.78,
      },
      {
        date: "01/2015",
        value: 1.24,
      },
      {
        date: "02/2015",
        value: 1.22,
      },
      {
        date: "03/2015",
        value: 1.32,
      },
      {
        date: "04/2015",
        value: 0.71,
      },
      {
        date: "05/2015",
        value: 0.74,
      },
      {
        date: "06/2015",
        value: 0.79,
      },
      {
        date: "07/2015",
        value: 0.62,
      },
      {
        date: "08/2015",
        value: 0.22,
      },
      {
        date: "09/2015",
        value: 0.54,
      },
      {
        date: "10/2015",
        value: 0.82,
      },
      {
        date: "11/2015",
        value: 1.01,
      },
      {
        date: "12/2015",
        value: 0.96,
      },
      {
        date: "01/2016",
        value: 1.27,
      },
      {
        date: "02/2016",
        value: 0.9,
      },
      {
        date: "03/2016",
        value: 0.43,
      },
      {
        date: "04/2016",
        value: 0.61,
      },
      {
        date: "05/2016",
        value: 0.78,
      },
      {
        date: "06/2016",
        value: 0.35,
      },
      {
        date: "07/2016",
        value: 0.52,
      },
      {
        date: "08/2016",
        value: 0.44,
      },
      {
        date: "09/2016",
        value: 0.08,
      },
      {
        date: "10/2016",
        value: 0.26,
      },
      {
        date: "11/2016",
        value: 0.18,
      },
      {
        date: "12/2016",
        value: 0.3,
      },
      {
        date: "01/2017",
        value: 0.38,
      },
      {
        date: "02/2017",
        value: 0.33,
      },
      {
        date: "03/2017",
        value: 0.25,
      },
      {
        date: "04/2017",
        value: 0.14,
      },
      {
        date: "05/2017",
        value: 0.31,
      },
      {
        date: "06/2017",
        value: -0.23,
      },
      {
        date: "07/2017",
        value: 0.24,
      },
      {
        date: "08/2017",
        value: 0.19,
      },
      {
        date: "09/2017",
        value: 0.16,
      },
      {
        date: "10/2017",
        value: 0.42,
      },
      {
        date: "11/2017",
        value: 0.28,
      },
      {
        date: "12/2017",
        value: 0.44,
      },
      {
        date: "01/2018",
        value: 0.29,
      },
      {
        date: "02/2018",
        value: 0.32,
      },
      {
        date: "03/2018",
        value: 0.09,
      },
      {
        date: "04/2018",
        value: 0.22,
      },
      {
        date: "05/2018",
        value: 0.4,
      },
      {
        date: "06/2018",
        value: 1.26,
      },
      {
        date: "07/2018",
        value: 0.33,
      },
      {
        date: "08/2018",
        value: -0.09,
      },
      {
        date: "09/2018",
        value: 0.48,
      },
      {
        date: "10/2018",
        value: 0.45,
      },
      {
        date: "11/2018",
        value: -0.21,
      },
      {
        date: "12/2018",
        value: 0.15,
      },
      {
        date: "01/2019",
        value: 0.32,
      },
      {
        date: "02/2019",
        value: 0.43,
      },
      {
        date: "03/2019",
        value: 0.75,
      },
      {
        date: "04/2019",
        value: 0.57,
      },
      {
        date: "05/2019",
        value: 0.13,
      },
      {
        date: "06/2019",
        value: 0.01,
      },
      {
        date: "07/2019",
        value: 0.19,
      },
      {
        date: "08/2019",
        value: 0.11,
      },
      {
        date: "09/2019",
        value: -0.04,
      },
      {
        date: "10/2019",
        value: 0.1,
      },
      {
        date: "11/2019",
        value: 0.51,
      },
      {
        date: "12/2019",
        value: 1.15,
      },
      {
        date: "01/2020",
        value: 0.21,
      },
      {
        date: "02/2020",
        value: 0.25,
      },
      {
        date: "03/2020",
        value: 0.07,
      },
      {
        date: "04/2020",
        value: -0.31,
      },
      {
        date: "05/2020",
        value: -0.38,
      },
      {
        date: "06/2020",
        value: 0.26,
      },
      {
        date: "07/2020",
        value: 0.36,
      },
      {
        date: "08/2020",
        value: 0.24,
      },
      {
        date: "09/2020",
        value: 0.64,
      },
      {
        date: "10/2020",
        value: 0.86,
      },
      {
        date: "11/2020",
        value: 0.89,
      },
      {
        date: "12/2020",
        value: 1.35,
      },
      {
        date: "01/2021",
        value: 0.25,
      },
      {
        date: "02/2021",
        value: 0.86,
      },
      {
        date: "03/2021",
        value: 0.93,
      },
      {
        date: "04/2021",
        value: 0.31,
      },
      {
        date: "05/2021",
        value: 0.83,
      },
      {
        date: "06/2021",
        value: 0.53,
      },
      {
        date: "07/2021",
        value: 0.96,
      },
      {
        date: "08/2021",
        value: 0.87,
      },
      {
        date: "09/2021",
        value: 1.16,
      },
      {
        date: "10/2021",
        value: 1.25,
      },
      {
        date: "11/2021",
        value: 0.95,
      },
      {
        date: "12/2021",
        value: 0.73,
      },
      {
        date: "01/2022",
        value: 0.54,
      },
      {
        date: "02/2022",
        value: 1.01,
      },
      {
        date: "03/2022",
        value: 1.62,
      },
      {
        date: "04/2022",
        value: 1.06,
      },
      {
        date: "05/2022",
        value: 0.47,
      },
      {
        date: "06/2022",
        value: 0.67,
      },
      {
        date: "07/2022",
        value: -0.68,
      },
      {
        date: "08/2022",
        value: -0.36,
      },
      {
        date: "09/2022",
        value: -0.29,
      },
      {
        date: "10/2022",
        value: 0.59,
      },
      {
        date: "11/2022",
        value: 0.41,
      },
      {
        date: "12/2022",
        value: 0.62,
      },
      {
        date: "01/2023",
        value: 0.53,
      },
      {
        date: "01/2023",
        value: 0.84,
      },
      {
        date: "03/2023",
        value: 0.71,
      },
    ];

    return mensal;
  }
}
