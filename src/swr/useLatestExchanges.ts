import useSWR from "swr";
import { exchangeApi } from "../service/services";
import { BaseSWRHookParams, SWRReturnType } from "./types";

const latesExchangesFetcher = ({ reqParams }) => {
  return exchangeApi.getLatestExchanges(reqParams);
};
const cacheKey = "latestExchanges";

type LatestExchangesUSWRParams = BaseSWRHookParams;

export const useLatestExchanges = <D, E>(
  params: LatestExchangesUSWRParams = {},
): SWRReturnType<D, E> => {
  const { reqParams, swrOptions } = params;
  const { data, error, isValidating } = useSWR(
    { cacheKey, reqParams },
    latesExchangesFetcher,
    swrOptions,
  );

  return { data: data?.data, error, isValidating };
};
