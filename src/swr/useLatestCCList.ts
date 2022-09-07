import useSWR from "swr";
import { cryptoCurrencyApi } from "../service/services";
import { BaseSWRHookParams, SWRReturnType } from "./types";

const latestListFetcher = ({ reqParams }) => {
  return cryptoCurrencyApi.getLatestList(reqParams);
};
const cacheKey = "latestList";

type LatestCCListUSWRParams = BaseSWRHookParams;

export const useLatestCCList = <D, E>(params: LatestCCListUSWRParams = {}): SWRReturnType<D, E> => {
  const { reqParams, swrOptions } = params;
  const { data, error, isValidating } = useSWR(
    { cacheKey, reqParams },
    latestListFetcher,
    swrOptions,
  );

  return { data: data?.data, error, isValidating };
};
