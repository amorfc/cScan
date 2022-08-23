import React from "react";
import { useLatestCCList } from "../../swr/useLatestCCList";
import BaseScreenContainer from "../BaseScreenContainer";

const Markets = () => {
  const { data, error, isValidating } = useLatestCCList();

  return <BaseScreenContainer></BaseScreenContainer>;
};

export default Markets;
