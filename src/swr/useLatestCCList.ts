import useSWR from "swr";
import { cryptoCurrencyApi } from "../service/services";

const latestListFetcher = ({ params }) => {
  return cryptoCurrencyApi.getLatestList(params);
};
const cacheKey = "latestList";
export const useLatestCCList = (params?) => {
  const swrData = useSWR({ cacheKey, params }, latestListFetcher);

  return { ...swrData };
};
