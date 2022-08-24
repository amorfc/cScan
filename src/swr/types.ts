export interface SWRReturnType<D, E> {
  data: D | null | undefined;
  error: E | null | undefined;
  isValidating: boolean;
}
