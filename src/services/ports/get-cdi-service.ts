import { CDI } from "../types/cdi";

export interface GetCdiService {
  getCdi({
    startDate,
    endDate,
  }: GetCdiService.Input): Promise<GetCdiService.Output>;
}

export namespace GetCdiService {
  export interface Input {
    startDate?: string;
    endDate?: string;
  }

  export type Output = CDI[];
}
