export interface SWRReturnType<D, E> {
  data: D | null | undefined;
  error: E | null | undefined;
  isValidating: boolean;
}

export interface BaseSWRHookParams {
  reqParams?: object;
  swrOptions?: object;
}
