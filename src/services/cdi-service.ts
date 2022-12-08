import { AxiosClient } from "../infra/clients/axios";
import { GetCdiService } from "./ports/get-cdi-service";

export class CdiService extends AxiosClient {
  // implements GetCdiService {
  constructor() {
    super("https://data.nasdaq.com/api/v3/datasets");
  }

  getCdi({ startDate, endDate }: GetCdiService.Input): GetCdiService.Output {
    // const url = this.getUrl("BCB/4391/data.json?api_key=R_SkAhh2nyJv-MGdS5XP");
    // const cdi = await this.get<GetCdiService.Output>(url);
    // return cdi;

    return [
      { date: "2021-12-31", value: 0.77 },
      {
        date: "2021-11-30",
        value: 0.59,
      },
      {
        date: "2021-10-31",
        value: 0.49,
      },
      {
        date: "2021-09-30",
        value: 0.44,
      },
      {
        date: "2021-08-31",
        value: 0.43,
      },
      {
        date: "2021-07-31",
        value: 0.36,
      },
      {
        date: "2021-06-30",
        value: 0.31,
      },
      {
        date: "2021-05-31",
        value: 0.27,
      },
      {
        date: "2021-04-30",
        value: 0.21,
      },
      {
        date: "2021-03-31",
        value: 0.2,
      },
      {
        date: "2021-02-28",
        value: 0.13,
      },
      {
        date: "2021-01-31",
        value: 0.15,
      },
      {
        date: "2020-12-31",
        value: 0.16,
      },
      {
        date: "2020-11-30",
        value: 0.15,
      },
      {
        date: "2020-10-31",
        value: 0.16,
      },
      {
        date: "2020-09-30",
        value: 0.16,
      },
      {
        date: "2020-08-31",
        value: 0.16,
      },
      {
        date: "2020-07-31",
        value: 0.19,
      },
      {
        date: "2020-06-30",
        value: 0.21,
      },
      {
        date: "2020-05-31",
        value: 0.24,
      },
      {
        date: "2020-04-30",
        value: 0.28,
      },
      {
        date: "2020-03-31",
        value: 0.34,
      },
      {
        date: "2020-02-29",
        value: 0.29,
      },
      {
        date: "2020-01-31",
        value: 0.38,
      },
    ];
  }
}
