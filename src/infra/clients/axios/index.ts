import Axios, { AxiosInstance } from "axios";

export abstract class AxiosClient {
  readonly http: AxiosInstance;

  constructor(private endpoint: string) {
    this.http = Axios.create();
  }

  protected getUrl(path?: string): string {
    if (path) {
      return `${this.endpoint}/${path}`;
    }

    return this.endpoint;
  }

  protected async get<RESPONSE>(url: string): Promise<RESPONSE> {
    return this.http.get<RESPONSE>(url).then((response) => response.data);
  }
}
