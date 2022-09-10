import { API_SERVICE_METHOD } from "../common/constants/apiService";
import { ApiService } from "./api";
import { URL } from "./urls";

const Api = new ApiService();

const CryptoCurrencyApi = () => ({
  getHistoricalList: (params?) => {
    const url = `${URL.CRYPTOCURRENY}/${URL.LISTINGS}/${URL.HISTORICAL}`;
    const method = API_SERVICE_METHOD.GET;

    return Api.start({ url, method, params });
  },
  getLatestList: (params?) => {
    const url = `${URL.CRYPTOCURRENY}/${URL.LISTINGS}/${URL.LATEST}`;
    const method = API_SERVICE_METHOD.GET;

    return Api.start({ url, method, params });
  },
});

const ExchangeApi = () => ({
  getLatestExchanges: (params?) => {
    // Subscription does not support this so should call with map
    // const url = `${URL.EXCHANGE}/${URL.LISTINGS}/${URL.LATEST}`;
    const url = `${URL.EXCHANGE}/${URL.MAP}`;
    const method = API_SERVICE_METHOD.GET;

    return Api.start({ url, method, params });
  },
});

export const cryptoCurrencyApi = CryptoCurrencyApi();
export const exchangeApi = ExchangeApi();
