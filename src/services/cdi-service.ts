export class CdiService {
  getvalue() {
    const mensal = [
      {
        date: "01/2000",
        value: 1.44,
      },
      {
        date: "02/2000",
        value: 1.44,
      },
      {
        date: "03/2000",
        value: 1.44,
      },
      {
        date: "04/2000",
        value: 1.28,
      },
      {
        date: "05/2000",
        value: 1.49,
      },
      {
        date: "06/2000",
        value: 1.39,
      },
      {
        date: "07/2000",
        value: 1.3,
      },
      {
        date: "08/2000",
        value: 1.4,
      },
      {
        date: "09/2000",
        value: 1.22,
      },
      {
        date: "10/2000",
        value: 1.28,
      },
      {
        date: "11/2000",
        value: 1.22,
      },
      {
        date: "12/2000",
        value: 1.19,
      },
      {
        date: "01/2001",
        value: 1.26,
      },
      {
        date: "02/2001",
        value: 1.01,
      },
      {
        date: "03/2001",
        value: 1.25,
      },
      {
        date: "04/2001",
        value: 1.18,
      },
      {
        date: "05/2001",
        value: 1.33,
      },
      {
        date: "06/2001",
        value: 1.27,
      },
      {
        date: "07/2001",
        value: 1.5,
      },
      {
        date: "08/2001",
        value: 1.6,
      },
      {
        date: "09/2001",
        value: 1.32,
      },
      {
        date: "10/2001",
        value: 1.53,
      },
      {
        date: "11/2001",
        value: 1.39,
      },
      {
        date: "12/2001",
        value: 1.39,
      },
      {
        date: "01/2002",
        value: 1.53,
      },
      {
        date: "02/2002",
        value: 1.25,
      },
      {
        date: "03/2002",
        value: 1.37,
      },
      {
        date: "04/2002",
        value: 1.48,
      },
      {
        date: "05/2002",
        value: 1.4,
      },
      {
        date: "06/2002",
        value: 1.31,
      },
      {
        date: "07/2002",
        value: 1.53,
      },
      {
        date: "08/2002",
        value: 1.45,
      },
      {
        date: "09/2002",
        value: 1.38,
      },
      {
        date: "10/2002",
        value: 1.64,
      },
      {
        date: "11/2002",
        value: 1.53,
      },
      {
        date: "12/2002",
        value: 1.73,
      },
      {
        date: "01/2003",
        value: 1.97,
      },
      {
        date: "02/2003",
        value: 1.83,
      },
      {
        date: "03/2003",
        value: 1.77,
      },
      {
        date: "04/2003",
        value: 1.87,
      },
      {
        date: "05/2003",
        value: 1.96,
      },
      {
        date: "06/2003",
        value: 1.85,
      },
      {
        date: "07/2003",
        value: 2.08,
      },
      {
        date: "08/2003",
        value: 1.76,
      },
      {
        date: "09/2003",
        value: 1.67,
      },
      {
        date: "10/2003",
        value: 1.63,
      },
      {
        date: "11/2003",
        value: 1.34,
      },
      {
        date: "12/2003",
        value: 1.37,
      },
      {
        date: "01/2004",
        value: 1.26,
      },
      {
        date: "02/2004",
        value: 1.08,
      },
      {
        date: "03/2004",
        value: 1.37,
      },
      {
        date: "04/2004",
        value: 1.17,
      },
      {
        date: "05/2004",
        value: 1.22,
      },
      {
        date: "06/2004",
        value: 1.22,
      },
      {
        date: "07/2004",
        value: 1.28,
      },
      {
        date: "08/2004",
        value: 1.29,
      },
      {
        date: "09/2004",
        value: 1.24,
      },
      {
        date: "10/2004",
        value: 1.21,
      },
      {
        date: "11/2004",
        value: 1.25,
      },
      {
        date: "12/2004",
        value: 1.48,
      },
      {
        date: "01/2005",
        value: 1.38,
      },
      {
        date: "02/2005",
        value: 1.22,
      },
      {
        date: "03/2005",
        value: 1.52,
      },
      {
        date: "04/2005",
        value: 1.41,
      },
      {
        date: "05/2005",
        value: 1.5,
      },
      {
        date: "06/2005",
        value: 1.58,
      },
      {
        date: "07/2005",
        value: 1.51,
      },
      {
        date: "08/2005",
        value: 1.65,
      },
      {
        date: "09/2005",
        value: 1.5,
      },
      {
        date: "10/2005",
        value: 1.4,
      },
      {
        date: "11/2005",
        value: 1.38,
      },
      {
        date: "12/2005",
        value: 1.47,
      },
      {
        date: "01/2006",
        value: 1.43,
      },
      {
        date: "02/2006",
        value: 1.14,
      },
      {
        date: "03/2006",
        value: 1.42,
      },
      {
        date: "04/2006",
        value: 1.08,
      },
      {
        date: "05/2006",
        value: 1.28,
      },
      {
        date: "06/2006",
        value: 1.18,
      },
      {
        date: "07/2006",
        value: 1.17,
      },
      {
        date: "08/2006",
        value: 1.25,
      },
      {
        date: "09/2006",
        value: 1.05,
      },
      {
        date: "10/2006",
        value: 1.09,
      },
      {
        date: "11/2006",
        value: 1.02,
      },
      {
        date: "12/2006",
        value: 0.98,
      },
      {
        date: "01/2007",
        value: 1.08,
      },
      {
        date: "02/2007",
        value: 0.87,
      },
      {
        date: "03/2007",
        value: 1.05,
      },
      {
        date: "04/2007",
        value: 0.94,
      },
      {
        date: "05/2007",
        value: 1.02,
      },
      {
        date: "06/2007",
        value: 0.9,
      },
      {
        date: "07/2007",
        value: 0.97,
      },
      {
        date: "08/2007",
        value: 0.99,
      },
      {
        date: "09/2007",
        value: 0.8,
      },
      {
        date: "10/2007",
        value: 0.92,
      },
      {
        date: "11/2007",
        value: 0.84,
      },
      {
        date: "12/2007",
        value: 0.84,
      },
      {
        date: "01/2008",
        value: 0.92,
      },
      {
        date: "02/2008",
        value: 0.8,
      },
      {
        date: "03/2008",
        value: 0.84,
      },
      {
        date: "04/2008",
        value: 0.9,
      },
      {
        date: "05/2008",
        value: 0.87,
      },
      {
        date: "06/2008",
        value: 0.95,
      },
      {
        date: "07/2008",
        value: 1.06,
      },
      {
        date: "08/2008",
        value: 1.01,
      },
      {
        date: "09/2008",
        value: 1.1,
      },
      {
        date: "10/2008",
        value: 1.17,
      },
      {
        date: "11/2008",
        value: 1.0,
      },
      {
        date: "12/2008",
        value: 1.11,
      },
      {
        date: "01/2009",
        value: 1.04,
      },
      {
        date: "02/2009",
        value: 0.85,
      },
      {
        date: "03/2009",
        value: 0.97,
      },
      {
        date: "04/2009",
        value: 0.84,
      },
      {
        date: "05/2009",
        value: 0.77,
      },
      {
        date: "06/2009",
        value: 0.75,
      },
      {
        date: "07/2009",
        value: 0.78,
      },
      {
        date: "08/2009",
        value: 0.69,
      },
      {
        date: "09/2009",
        value: 0.69,
      },
      {
        date: "10/2009",
        value: 0.69,
      },
      {
        date: "11/2009",
        value: 0.66,
      },
      {
        date: "12/2009",
        value: 0.72,
      },
      {
        date: "01/2010",
        value: 0.66,
      },
      {
        date: "02/2010",
        value: 0.59,
      },
      {
        date: "03/2010",
        value: 0.76,
      },
      {
        date: "04/2010",
        value: 0.66,
      },
      {
        date: "05/2010",
        value: 0.75,
      },
      {
        date: "06/2010",
        value: 0.79,
      },
      {
        date: "07/2010",
        value: 0.86,
      },
      {
        date: "08/2010",
        value: 0.89,
      },
      {
        date: "09/2010",
        value: 0.84,
      },
      {
        date: "10/2010",
        value: 0.81,
      },
      {
        date: "11/2010",
        value: 0.81,
      },
      {
        date: "12/2010",
        value: 0.93,
      },
      {
        date: "01/2011",
        value: 0.86,
      },
      {
        date: "02/2011",
        value: 0.84,
      },
      {
        date: "03/2011",
        value: 0.92,
      },
      {
        date: "04/2011",
        value: 0.84,
      },
      {
        date: "05/2011",
        value: 0.99,
      },
      {
        date: "06/2011",
        value: 0.95,
      },
      {
        date: "07/2011",
        value: 0.97,
      },
      {
        date: "08/2011",
        value: 1.07,
      },
      {
        date: "09/2011",
        value: 0.94,
      },
      {
        date: "10/2011",
        value: 0.88,
      },
      {
        date: "11/2011",
        value: 0.86,
      },
      {
        date: "12/2011",
        value: 0.9,
      },
      {
        date: "01/2012",
        value: 0.89,
      },
      {
        date: "02/2012",
        value: 0.74,
      },
      {
        date: "03/2012",
        value: 0.81,
      },
      {
        date: "04/2012",
        value: 0.7,
      },
      {
        date: "05/2012",
        value: 0.73,
      },
      {
        date: "06/2012",
        value: 0.64,
      },
      {
        date: "07/2012",
        value: 0.68,
      },
      {
        date: "08/2012",
        value: 0.69,
      },
      {
        date: "09/2012",
        value: 0.54,
      },
      {
        date: "10/2012",
        value: 0.61,
      },
      {
        date: "11/2012",
        value: 0.54,
      },
      {
        date: "12/2012",
        value: 0.53,
      },
      {
        date: "01/2013",
        value: 0.59,
      },
      {
        date: "02/2013",
        value: 0.48,
      },
      {
        date: "03/2013",
        value: 0.54,
      },
      {
        date: "04/2013",
        value: 0.6,
      },
      {
        date: "05/2013",
        value: 0.58,
      },
      {
        date: "06/2013",
        value: 0.59,
      },
      {
        date: "07/2013",
        value: 0.71,
      },
      {
        date: "08/2013",
        value: 0.7,
      },
      {
        date: "09/2013",
        value: 0.7,
      },
      {
        date: "10/2013",
        value: 0.8,
      },
      {
        date: "11/2013",
        value: 0.71,
      },
      {
        date: "12/2013",
        value: 0.78,
      },
      {
        date: "01/2014",
        value: 0.84,
      },
      {
        date: "02/2014",
        value: 0.78,
      },
      {
        date: "03/2014",
        value: 0.76,
      },
      {
        date: "04/2014",
        value: 0.82,
      },
      {
        date: "05/2014",
        value: 0.86,
      },
      {
        date: "06/2014",
        value: 0.82,
      },
      {
        date: "07/2014",
        value: 0.94,
      },
      {
        date: "08/2014",
        value: 0.86,
      },
      {
        date: "09/2014",
        value: 0.9,
      },
      {
        date: "10/2014",
        value: 0.94,
      },
      {
        date: "11/2014",
        value: 0.84,
      },
      {
        date: "12/2014",
        value: 0.96,
      },
      {
        date: "01/2015",
        value: 0.93,
      },
      {
        date: "02/2015",
        value: 0.82,
      },
      {
        date: "03/2015",
        value: 1.04,
      },
      {
        date: "04/2015",
        value: 0.95,
      },
      {
        date: "05/2015",
        value: 0.98,
      },
      {
        date: "06/2015",
        value: 1.07,
      },
      {
        date: "07/2015",
        value: 1.18,
      },
      {
        date: "08/2015",
        value: 1.11,
      },
      {
        date: "09/2015",
        value: 1.11,
      },
      {
        date: "10/2015",
        value: 1.11,
      },
      {
        date: "11/2015",
        value: 1.06,
      },
      {
        date: "12/2015",
        value: 1.16,
      },
      {
        date: "01/2016",
        value: 1.05,
      },
      {
        date: "02/2016",
        value: 1.0,
      },
      {
        date: "03/2016",
        value: 1.16,
      },
      {
        date: "04/2016",
        value: 1.05,
      },
      {
        date: "05/2016",
        value: 1.11,
      },
      {
        date: "06/2016",
        value: 1.16,
      },
      {
        date: "07/2016",
        value: 1.11,
      },
      {
        date: "08/2016",
        value: 1.21,
      },
      {
        date: "09/2016",
        value: 1.11,
      },
      {
        date: "10/2016",
        value: 1.05,
      },
      {
        date: "11/2016",
        value: 1.04,
      },
      {
        date: "12/2016",
        value: 1.12,
      },
      {
        date: "01/2017",
        value: 1.08,
      },
      {
        date: "02/2017",
        value: 0.86,
      },
      {
        date: "03/2017",
        value: 1.05,
      },
      {
        date: "04/2017",
        value: 0.79,
      },
      {
        date: "05/2017",
        value: 0.93,
      },
      {
        date: "06/2017",
        value: 0.81,
      },
      {
        date: "07/2017",
        value: 0.8,
      },
      {
        date: "08/2017",
        value: 0.8,
      },
      {
        date: "09/2017",
        value: 0.64,
      },
      {
        date: "10/2017",
        value: 0.64,
      },
      {
        date: "11/2017",
        value: 0.57,
      },
      {
        date: "12/2017",
        value: 0.54,
      },
      {
        date: "01/2018",
        value: 0.58,
      },
      {
        date: "02/2018",
        value: 0.46,
      },
      {
        date: "03/2018",
        value: 0.53,
      },
      {
        date: "04/2018",
        value: 0.52,
      },
      {
        date: "05/2018",
        value: 0.52,
      },
      {
        date: "06/2018",
        value: 0.52,
      },
      {
        date: "07/2018",
        value: 0.54,
      },
      {
        date: "08/2018",
        value: 0.57,
      },
      {
        date: "09/2018",
        value: 0.47,
      },
      {
        date: "10/2018",
        value: 0.54,
      },
      {
        date: "11/2018",
        value: 0.49,
      },
      {
        date: "12/2018",
        value: 0.49,
      },
      {
        date: "01/2019",
        value: 0.54,
      },
      {
        date: "02/2019",
        value: 0.49,
      },
      {
        date: "03/2019",
        value: 0.47,
      },
      {
        date: "04/2019",
        value: 0.52,
      },
      {
        date: "05/2019",
        value: 0.54,
      },
      {
        date: "06/2019",
        value: 0.47,
      },
      {
        date: "07/2019",
        value: 0.57,
      },
      {
        date: "08/2019",
        value: 0.5,
      },
      {
        date: "09/2019",
        value: 0.46,
      },
      {
        date: "10/2019",
        value: 0.48,
      },
      {
        date: "11/2019",
        value: 0.38,
      },
      {
        date: "12/2019",
        value: 0.37,
      },
      {
        date: "01/2020",
        value: 0.38,
      },
      {
        date: "02/2020",
        value: 0.29,
      },
      {
        date: "03/2020",
        value: 0.34,
      },
      {
        date: "04/2020",
        value: 0.28,
      },
      {
        date: "05/2020",
        value: 0.24,
      },
      {
        date: "06/2020",
        value: 0.21,
      },
      {
        date: "07/2020",
        value: 0.19,
      },
      {
        date: "08/2020",
        value: 0.16,
      },
      {
        date: "09/2020",
        value: 0.16,
      },
      {
        date: "10/2020",
        value: 0.16,
      },
      {
        date: "11/2020",
        value: 0.15,
      },
      {
        date: "12/2020",
        value: 0.16,
      },
      {
        date: "01/2021",
        value: 0.15,
      },
      {
        date: "02/2021",
        value: 0.13,
      },
      {
        date: "03/2021",
        value: 0.2,
      },
      {
        date: "04/2021",
        value: 0.21,
      },
      {
        date: "05/2021",
        value: 0.27,
      },
      {
        date: "06/2021",
        value: 0.31,
      },
      {
        date: "07/2021",
        value: 0.36,
      },
      {
        date: "08/2021",
        value: 0.43,
      },
      {
        date: "09/2021",
        value: 0.44,
      },
      {
        date: "10/2021",
        value: 0.49,
      },
      {
        date: "11/2021",
        value: 0.59,
      },
      {
        date: "12/2021",
        value: 0.77,
      },
      {
        date: "01/2022",
        value: 0.73,
      },
      {
        date: "02/2022",
        value: 0.76,
      },
      {
        date: "03/2022",
        value: 0.93,
      },
      {
        date: "04/2022",
        value: 0.83,
      },
      {
        date: "05/2022",
        value: 1.03,
      },
      {
        date: "06/2022",
        value: 1.02,
      },
      {
        date: "07/2022",
        value: 1.03,
      },
      {
        date: "08/2022",
        value: 1.17,
      },
      {
        date: "09/2022",
        value: 1.07,
      },
      {
        date: "10/2022",
        value: 1.02,
      },
      {
        date: "11/2022",
        value: 1.02,
      },
      {
        date: "12/2022",
        value: 1.12,
      },
    ];

    const anual = [
      { value: 12.39, date: "2022" },
      { value: 4.42, date: "2021" },
      { value: 2.76, date: "2020" },
      { value: 5.96, date: "2019" },
      { value: 6.42, date: "2018" },
      { value: 9.93, date: "2017" },
      { value: 14.0, date: "2016" },
      { value: 13.24, date: "2015" },
      { value: 10.81, date: "2014" },
      { value: 8.06, date: "2013" },
      { value: 8.4, date: "2012" },
      { value: 11.6, date: "2011" },
      { value: 9.75, date: "2010" },
      { value: 9.88, date: "2009" },
      { value: 12.38, date: "2008" },
      { value: 11.82, date: "2007" },
      { value: 15.03, date: "2006" },
      { value: 19.0, date: "2005" },
      { value: 16.17, date: "2004" },
      { value: 23.25, date: "2003" },
      { value: 19.11, date: "2002" },
      { value: 17.29, date: "2001" },
      { value: 17.32, date: "2000" },
    ].reverse();

    return mensal;
  }
}
