import useSWR from "swr";
import { cryptoCurrencyApi } from "../service/services";
import { SWRReturnType } from "./types";

const latestListFetcher = ({ params }) => {
  return cryptoCurrencyApi.getLatestList(params);
};
const cacheKey = "latestList";

export const useLatestCCList = <D, E>(params?): SWRReturnType<D, E> => {
  const { data, error, isValidating } = useSWR({ cacheKey, params }, latestListFetcher);

  return { data: data?.data, error, isValidating };
};
