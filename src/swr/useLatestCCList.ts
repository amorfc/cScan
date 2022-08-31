import useSWR from "swr";
import { cryptoCurrencyApi } from "../service/services";
import { SWRReturnType } from "./types";

const latestListFetcher = ({ reqParams }) => {
  return cryptoCurrencyApi.getLatestList(reqParams);
};
const cacheKey = "latestList";

interface LatestCCListUSWRParams {
  reqParams?: object;
  swrOptions?: object;
}

export const useLatestCCList = <D, E>(params: LatestCCListUSWRParams = {}): SWRReturnType<D, E> => {
  const { reqParams, swrOptions } = params;
  const { data, error, isValidating } = useSWR(
    { cacheKey, reqParams },
    latestListFetcher,
    swrOptions,
  );

  return { data: data?.data, error, isValidating };
};
