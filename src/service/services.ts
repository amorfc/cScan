import { API_SERVICE_METHOD } from "../common/constants/apiService";
import { ApiService } from "./api";
import { URL } from "./urls";

const Api = new ApiService();

const CryptoCurrencyApi = () => ({
  getHistoricalList: (params?) => {
    const url = `${URL.CRYPTOCURRENY}${URL.LISTINGS}${URL.HISTORICAL}`;
    const method = API_SERVICE_METHOD.GET;

    return Api.start({ url, method });
  },
});

export const cryptoCurrencyApi = CryptoCurrencyApi();
