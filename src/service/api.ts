//Import Axios
import axios, { Method } from "axios";

//Import Models

type IBody = Record<string, unknown> | string | null;

interface IRequestConfig {
  method: Method;
  url: string;
  body?: IBody;
  params?: any;
  rest?: any;
}

let baseURL = "";
let headers = {};

export class ApiService {
  constructor() {
    this.setBaseUrl();
    this.setHeaders();
    this.setHeaderApiKey();
    this.setResponseInterceptors();
  }

  private setBaseUrl() {
    baseURL = "https://pro-api.coinmarketcap.com";
  }

  private setHeaders() {
    headers = {
      Accept: "application/json",
      "Accept-Encoding": ["deflate", "gzip"],
      "User-Agent": "mobile",
    };
  }

  public setHeaderApiKey() {
    headers = {
      ...headers,
      "X-CMC_PRO_API_KEY": "f557a9ed-eb6f-4702-9776-e96f7690975d",
    };
  }

  private setResponseInterceptors() {
    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401) {
            // handle unauth
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public async start(reqParams: IRequestConfig) {
    const { method, url, body, params, ...rest } = reqParams;
    const axiosResponse = await axios({
      method,
      url,
      headers,
      baseURL,
      data: body,
      params,
      ...rest,
    });

    return axiosResponse;
  }
}
