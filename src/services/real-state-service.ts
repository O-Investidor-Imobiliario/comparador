export class RealStateService {
  getRealState(): { date: string; value: number }[] {
    const mensal = [
      {
        date: "01/2000",
        value: 10 / 12,
      },
      {
        date: "02/2000",
        value: 10 / 12,
      },
      {
        date: "03/2000",
        value: 10 / 12,
      },
      {
        date: "04/2000",
        value: 10 / 12,
      },
      {
        date: "05/2000",
        value: 10 / 12,
      },
      {
        date: "06/2000",
        value: 10 / 12,
      },
      {
        date: "07/2000",
        value: 10 / 12,
      },
      {
        date: "08/2000",
        value: 10 / 12,
      },
      {
        date: "09/2000",
        value: 10 / 12,
      },
      {
        date: "10/2000",
        value: 10 / 12,
      },
      {
        date: "11/2000",
        value: 10 / 12,
      },
      {
        date: "12/2000",
        value: 10 / 12,
      },
      {
        date: "01/2001",
        value: 10 / 12,
      },
      {
        date: "02/2001",
        value: 10 / 12,
      },
      {
        date: "03/2001",
        value: 10 / 12,
      },
      {
        date: "04/2001",
        value: 10 / 12,
      },
      {
        date: "05/2001",
        value: 10 / 12,
      },
      {
        date: "06/2001",
        value: 10 / 12,
      },
      {
        date: "07/2001",
        value: 10 / 12,
      },
      {
        date: "08/2001",
        value: 10 / 12,
      },
      {
        date: "09/2001",
        value: 10 / 12,
      },
      {
        date: "10/2001",
        value: 10 / 12,
      },
      {
        date: "11/2001",
        value: 10 / 12,
      },
      {
        date: "12/2001",
        value: 10 / 12,
      },
      {
        date: "01/2002",
        value: 10 / 12,
      },
      {
        date: "02/2002",
        value: 10 / 12,
      },
      {
        date: "03/2002",
        value: 10 / 12,
      },
      {
        date: "04/2002",
        value: 10 / 12,
      },
      {
        date: "05/2002",
        value: 10 / 12,
      },
      {
        date: "06/2002",
        value: 10 / 12,
      },
      {
        date: "07/2002",
        value: 10 / 12,
      },
      {
        date: "08/2002",
        value: 10 / 12,
      },
      {
        date: "09/2002",
        value: 10 / 12,
      },
      {
        date: "10/2002",
        value: 10 / 12,
      },
      {
        date: "11/2002",
        value: 10 / 12,
      },
      {
        date: "12/2002",
        value: 10 / 12,
      },
      {
        date: "01/2003",
        value: 10 / 12,
      },
      {
        date: "02/2003",
        value: 10 / 12,
      },
      {
        date: "03/2003",
        value: 10 / 12,
      },
      {
        date: "04/2003",
        value: 10 / 12,
      },
      {
        date: "05/2003",
        value: 10 / 12,
      },
      {
        date: "06/2003",
        value: 10 / 12,
      },
      {
        date: "07/2003",
        value: 10 / 12,
      },
      {
        date: "08/2003",
        value: 10 / 12,
      },
      {
        date: "09/2003",
        value: 10 / 12,
      },
      {
        date: "10/2003",
        value: 10 / 12,
      },
      {
        date: "11/2003",
        value: 10 / 12,
      },
      {
        date: "12/2003",
        value: 10 / 12,
      },
      {
        date: "01/2004",
        value: 10 / 12,
      },
      {
        date: "02/2004",
        value: 10 / 12,
      },
      {
        date: "03/2004",
        value: 10 / 12,
      },
      {
        date: "04/2004",
        value: 10 / 12,
      },
      {
        date: "05/2004",
        value: 10 / 12,
      },
      {
        date: "06/2004",
        value: 10 / 12,
      },
      {
        date: "07/2004",
        value: 10 / 12,
      },
      {
        date: "08/2004",
        value: 10 / 12,
      },
      {
        date: "09/2004",
        value: 10 / 12,
      },
      {
        date: "10/2004",
        value: 10 / 12,
      },
      {
        date: "11/2004",
        value: 10 / 12,
      },
      {
        date: "12/2004",
        value: 10 / 12,
      },
      {
        date: "01/2005",
        value: 10 / 12,
      },
      {
        date: "02/2005",
        value: 10 / 12,
      },
      {
        date: "03/2005",
        value: 10 / 12,
      },
      {
        date: "04/2005",
        value: 10 / 12,
      },
      {
        date: "05/2005",
        value: 10 / 12,
      },
      {
        date: "06/2005",
        value: 10 / 12,
      },
      {
        date: "07/2005",
        value: 10 / 12,
      },
      {
        date: "08/2005",
        value: 10 / 12,
      },
      {
        date: "09/2005",
        value: 10 / 12,
      },
      {
        date: "10/2005",
        value: 10 / 12,
      },
      {
        date: "11/2005",
        value: 10 / 12,
      },
      {
        date: "12/2005",
        value: 10 / 12,
      },
      {
        date: "01/2006",
        value: 10 / 12,
      },
      {
        date: "02/2006",
        value: 10 / 12,
      },
      {
        date: "03/2006",
        value: 10 / 12,
      },
      {
        date: "04/2006",
        value: 10 / 12,
      },
      {
        date: "05/2006",
        value: 10 / 12,
      },
      {
        date: "06/2006",
        value: 10 / 12,
      },
      {
        date: "07/2006",
        value: 10 / 12,
      },
      {
        date: "08/2006",
        value: 10 / 12,
      },
      {
        date: "09/2006",
        value: 10 / 12,
      },
      {
        date: "10/2006",
        value: 10 / 12,
      },
      {
        date: "11/2006",
        value: 10 / 12,
      },
      {
        date: "12/2006",
        value: 10 / 12,
      },
      {
        date: "01/2007",
        value: 10 / 12,
      },
      {
        date: "02/2007",
        value: 10 / 12,
      },
      {
        date: "03/2007",
        value: 10 / 12,
      },
      {
        date: "04/2007",
        value: 10 / 12,
      },
      {
        date: "05/2007",
        value: 10 / 12,
      },
      {
        date: "06/2007",
        value: 10 / 12,
      },
      {
        date: "07/2007",
        value: 10 / 12,
      },
      {
        date: "08/2007",
        value: 10 / 12,
      },
      {
        date: "09/2007",
        value: 10 / 12,
      },
      {
        date: "10/2007",
        value: 10 / 12,
      },
      {
        date: "11/2007",
        value: 10 / 12,
      },
      {
        date: "12/2007",
        value: 10 / 12,
      },
      {
        date: "01/2008",
        value: 10 / 12,
      },
      {
        date: "02/2008",
        value: 10 / 12,
      },
      {
        date: "03/2008",
        value: 10 / 12,
      },
      {
        date: "04/2008",
        value: 10 / 12,
      },
      {
        date: "05/2008",
        value: 10 / 12,
      },
      {
        date: "06/2008",
        value: 10 / 12,
      },
      {
        date: "07/2008",
        value: 10 / 12,
      },
      {
        date: "08/2008",
        value: 10 / 12,
      },
      {
        date: "09/2008",
        value: 10 / 12,
      },
      {
        date: "10/2008",
        value: 10 / 12,
      },
      {
        date: "11/2008",
        value: 10 / 12,
      },
      {
        date: "12/2008",
        value: 10 / 12,
      },
      {
        date: "01/2009",
        value: 10 / 12,
      },
      {
        date: "02/2009",
        value: 10 / 12,
      },
      {
        date: "03/2009",
        value: 10 / 12,
      },
      {
        date: "04/2009",
        value: 10 / 12,
      },
      {
        date: "05/2009",
        value: 10 / 12,
      },
      {
        date: "06/2009",
        value: 10 / 12,
      },
      {
        date: "07/2009",
        value: 10 / 12,
      },
      {
        date: "08/2009",
        value: 10 / 12,
      },
      {
        date: "09/2009",
        value: 10 / 12,
      },
      {
        date: "10/2009",
        value: 10 / 12,
      },
      {
        date: "11/2009",
        value: 10 / 12,
      },
      {
        date: "12/2009",
        value: 10 / 12,
      },
      {
        date: "01/2010",
        value: 10 / 12,
      },
      {
        date: "02/2010",
        value: 10 / 12,
      },
      {
        date: "03/2010",
        value: 10 / 12,
      },
      {
        date: "04/2010",
        value: 10 / 12,
      },
      {
        date: "05/2010",
        value: 10 / 12,
      },
      {
        date: "06/2010",
        value: 10 / 12,
      },
      {
        date: "07/2010",
        value: 10 / 12,
      },
      {
        date: "08/2010",
        value: 10 / 12,
      },
      {
        date: "09/2010",
        value: 10 / 12,
      },
      {
        date: "10/2010",
        value: 10 / 12,
      },
      {
        date: "11/2010",
        value: 10 / 12,
      },
      {
        date: "12/2010",
        value: 10 / 12,
      },
      {
        date: "01/2011",
        value: 25 / 12,
      },
      {
        date: "02/2011",
        value: 25 / 12,
      },
      {
        date: "03/2011",
        value: 25 / 12,
      },
      {
        date: "04/2011",
        value: 25 / 12,
      },
      {
        date: "05/2011",
        value: 25 / 12,
      },
      {
        date: "06/2011",
        value: 25 / 12,
      },
      {
        date: "07/2011",
        value: 25 / 12,
      },
      {
        date: "08/2011",
        value: 25 / 12,
      },
      {
        date: "09/2011",
        value: 25 / 12,
      },
      {
        date: "10/2011",
        value: 25 / 12,
      },
      {
        date: "11/2011",
        value: 25 / 12,
      },
      {
        date: "12/2011",
        value: 25 / 12,
      },
      {
        date: "01/2012",
        value: 25 / 12,
      },
      {
        date: "02/2012",
        value: 25 / 12,
      },
      {
        date: "03/2012",
        value: 25 / 12,
      },
      {
        date: "04/2012",
        value: 25 / 12,
      },
      {
        date: "05/2012",
        value: 25 / 12,
      },
      {
        date: "06/2012",
        value: 25 / 12,
      },
      {
        date: "07/2012",
        value: 25 / 12,
      },
      {
        date: "08/2012",
        value: 25 / 12,
      },
      {
        date: "09/2012",
        value: 25 / 12,
      },
      {
        date: "10/2012",
        value: 25 / 12,
      },
      {
        date: "11/2012",
        value: 25 / 12,
      },
      {
        date: "12/2012",
        value: 25 / 12,
      },
      {
        date: "01/2013",
        value: 25 / 12,
      },
      {
        date: "02/2013",
        value: 25 / 12,
      },
      {
        date: "03/2013",
        value: 25 / 12,
      },
      {
        date: "04/2013",
        value: 25 / 12,
      },
      {
        date: "05/2013",
        value: 25 / 12,
      },
      {
        date: "06/2013",
        value: 25 / 12,
      },
      {
        date: "07/2013",
        value: 25 / 12,
      },
      {
        date: "08/2013",
        value: 25 / 12,
      },
      {
        date: "09/2013",
        value: 25 / 12,
      },
      {
        date: "10/2013",
        value: 25 / 12,
      },
      {
        date: "11/2013",
        value: 25 / 12,
      },
      {
        date: "12/2013",
        value: 25 / 12,
      },
      {
        date: "01/2014",
        value: 25 / 12,
      },
      {
        date: "02/2014",
        value: 25 / 12,
      },
      {
        date: "03/2014",
        value: 25 / 12,
      },
      {
        date: "04/2014",
        value: 25 / 12,
      },
      {
        date: "05/2014",
        value: 25 / 12,
      },
      {
        date: "06/2014",
        value: 25 / 12,
      },
      {
        date: "07/2014",
        value: 25 / 12,
      },
      {
        date: "08/2014",
        value: 25 / 12,
      },
      {
        date: "09/2014",
        value: 25 / 12,
      },
      {
        date: "10/2014",
        value: 25 / 12,
      },
      {
        date: "11/2014",
        value: 25 / 12,
      },
      {
        date: "12/2014",
        value: 25 / 12,
      },
      {
        date: "01/2015",
        value: 25 / 12,
      },
      {
        date: "02/2015",
        value: 25 / 12,
      },
      {
        date: "03/2015",
        value: 25 / 12,
      },
      {
        date: "04/2015",
        value: 25 / 12,
      },
      {
        date: "05/2015",
        value: 25 / 12,
      },
      {
        date: "06/2015",
        value: 25 / 12,
      },
      {
        date: "07/2015",
        value: 25 / 12,
      },
      {
        date: "08/2015",
        value: 25 / 12,
      },
      {
        date: "09/2015",
        value: 25 / 12,
      },
      {
        date: "10/2015",
        value: 25 / 12,
      },
      {
        date: "11/2015",
        value: 25 / 12,
      },
      {
        date: "12/2015",
        value: 25 / 12,
      },
      {
        date: "01/2016",
        value: 25 / 12,
      },
      {
        date: "02/2016",
        value: 25 / 12,
      },
      {
        date: "03/2016",
        value: 25 / 12,
      },
      {
        date: "04/2016",
        value: 25 / 12,
      },
      {
        date: "05/2016",
        value: 25 / 12,
      },
      {
        date: "06/2016",
        value: 25 / 12,
      },
      {
        date: "07/2016",
        value: 25 / 12,
      },
      {
        date: "08/2016",
        value: 25 / 12,
      },
      {
        date: "09/2016",
        value: 25 / 12,
      },
      {
        date: "10/2016",
        value: 25 / 12,
      },
      {
        date: "11/2016",
        value: 25 / 12,
      },
      {
        date: "12/2016",
        value: 25 / 12,
      },
      {
        date: "01/2017",
        value: 25 / 12,
      },
      {
        date: "02/2017",
        value: 25 / 12,
      },
      {
        date: "03/2017",
        value: 25 / 12,
      },
      {
        date: "04/2017",
        value: 25 / 12,
      },
      {
        date: "05/2017",
        value: 25 / 12,
      },
      {
        date: "06/2017",
        value: 25 / 12,
      },
      {
        date: "07/2017",
        value: 25 / 12,
      },
      {
        date: "08/2017",
        value: 25 / 12,
      },
      {
        date: "09/2017",
        value: 25 / 12,
      },
      {
        date: "10/2017",
        value: 25 / 12,
      },
      {
        date: "11/2017",
        value: 25 / 12,
      },
      {
        date: "12/2017",
        value: 25 / 12,
      },
      {
        date: "01/2018",
        value: 25 / 12,
      },
      {
        date: "02/2018",
        value: 25 / 12,
      },
      {
        date: "03/2018",
        value: 25 / 12,
      },
      {
        date: "04/2018",
        value: 25 / 12,
      },
      {
        date: "05/2018",
        value: 25 / 12,
      },
      {
        date: "06/2018",
        value: 25 / 12,
      },
      {
        date: "07/2018",
        value: 25 / 12,
      },
      {
        date: "08/2018",
        value: 25 / 12,
      },
      {
        date: "09/2018",
        value: 25 / 12,
      },
      {
        date: "10/2018",
        value: 25 / 12,
      },
      {
        date: "11/2018",
        value: 25 / 12,
      },
      {
        date: "12/2018",
        value: 25 / 12,
      },
      {
        date: "01/2019",
        value: 25 / 12,
      },
      {
        date: "02/2019",
        value: 25 / 12,
      },
      {
        date: "03/2019",
        value: 25 / 12,
      },
      {
        date: "04/2019",
        value: 25 / 12,
      },
      {
        date: "05/2019",
        value: 25 / 12,
      },
      {
        date: "06/2019",
        value: 25 / 12,
      },
      {
        date: "07/2019",
        value: 25 / 12,
      },
      {
        date: "08/2019",
        value: 25 / 12,
      },
      {
        date: "09/2019",
        value: 25 / 12,
      },
      {
        date: "10/2019",
        value: 25 / 12,
      },
      {
        date: "11/2019",
        value: 25 / 12,
      },
      {
        date: "12/2019",
        value: 25 / 12,
      },
      {
        date: "01/2020",
        value: 25 / 12,
      },
      {
        date: "02/2020",
        value: 25 / 12,
      },
      {
        date: "03/2020",
        value: 25 / 12,
      },
      {
        date: "04/2020",
        value: 25 / 12,
      },
      {
        date: "05/2020",
        value: 25 / 12,
      },
      {
        date: "06/2020",
        value: 25 / 12,
      },
      {
        date: "07/2020",
        value: 25 / 12,
      },
      {
        date: "08/2020",
        value: 25 / 12,
      },
      {
        date: "09/2020",
        value: 25 / 12,
      },
      {
        date: "10/2020",
        value: 25 / 12,
      },
      {
        date: "11/2020",
        value: 25 / 12,
      },
      {
        date: "12/2020",
        value: 25 / 12,
      },
      {
        date: "01/2021",
        value: 25 / 12,
      },
      {
        date: "02/2021",
        value: 25 / 12,
      },
      {
        date: "03/2021",
        value: 25 / 12,
      },
      {
        date: "04/2021",
        value: 25 / 12,
      },
      {
        date: "05/2021",
        value: 25 / 12,
      },
      {
        date: "06/2021",
        value: 25 / 12,
      },
      {
        date: "07/2021",
        value: 25 / 12,
      },
      {
        date: "08/2021",
        value: 25 / 12,
      },
      {
        date: "09/2021",
        value: 25 / 12,
      },
      {
        date: "10/2021",
        value: 25 / 12,
      },
      {
        date: "11/2021",
        value: 25 / 12,
      },
      {
        date: "12/2021",
        value: 25 / 12,
      },
      {
        date: "01/2022",
        value: 25 / 12,
      },
      {
        date: "02/2022",
        value: 25 / 12,
      },
      {
        date: "03/2022",
        value: 25 / 12,
      },
      {
        date: "04/2022",
        value: 25 / 12,
      },
      {
        date: "05/2022",
        value: 25 / 12,
      },
      {
        date: "06/2022",
        value: 25 / 12,
      },
      {
        date: "07/2022",
        value: 25 / 12,
      },
      {
        date: "08/2022",
        value: 25 / 12,
      },
      {
        date: "09/2022",
        value: 25 / 12,
      },
      {
        date: "10/2022",
        value: 25 / 12,
      },
      {
        date: "11/2022",
        value: 25 / 12,
      },
      {
        date: "12/2022",
        value: 25 / 12,
      },
      {
        date: "01/2023",
        value: 25 / 12,
      },
      {
        date: "02/2023",
        value: 25 / 12,
      },
      {
        date: "03/2023",
        value: 25 / 12,
      },
      {
        date: "04/2023",
        value: 25 / 12,
      },
      {
        date: "05/2023",
        value: 25 / 12,
      },
      {
        date: "06/2023",
        value: 25 / 12,
      },
      {
        date: "07/2023",
        value: 25 / 12,
      },
      {
        date: "08/2023",
        value: 25 / 12,
      },
      {
        date: "09/2023",
        value: 25 / 12,
      },
      {
        date: "10/2023",
        value: 25 / 12,
      },
      {
        date: "11/2023",
        value: 25 / 12,
      },
      {
        date: "12/2023",
        value: 25 / 12,
      },
      {
        date: "01/2024",
        value: 25 / 12,
      },
      {
        date: "02/2024",
        value: 25 / 12,
      },
    ];

    const anual = [
      {
        date: "2022",
        value: 25,
      },
      {
        date: "2021",
        value: 25,
      },
      {
        date: "2020",
        value: 25,
      },
      {
        date: "2019",
        value: 25,
      },
      {
        date: "2018",
        value: 25,
      },
      {
        date: "2017",
        value: 25,
      },
      {
        date: "2016",
        value: 25,
      },
      {
        date: "2015",
        value: 25,
      },
      {
        date: "2014",
        value: 25,
      },
      {
        date: "2013",
        value: 25,
      },
      {
        date: "2012",
        value: 25,
      },
      {
        date: "2011",
        value: 25,
      },
      {
        date: "2010",
        value: 10,
      },
      {
        date: "2009",
        value: 10,
      },
      {
        date: "2008",
        value: 10,
      },
      {
        date: "2007",
        value: 10,
      },
      {
        date: "2006",
        value: 10,
      },
      {
        date: "2005",
        value: 10,
      },
      {
        date: "2004",
        value: 10,
      },
      {
        date: "2003",
        value: 10,
      },
      {
        date: "2002",
        value: 10,
      },
      {
        date: "2001",
        value: 10,
      },
      {
        date: "2000",
        value: 10,
      },
    ].reverse();

    return mensal;
  }
}
