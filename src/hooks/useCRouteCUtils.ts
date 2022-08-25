import { useMemo } from "react";
import { useCRouteName } from "./useCRouteName";

interface CRouteCUtilsReturnType {
  statusBarHidden: boolean;
}

interface StatusBarHiderParams {
  routeName?: string;
}

export const useCRouteCUtils = (): CRouteCUtilsReturnType => {
  const { routeName } = useCRouteName();

  const getShouldHideStatusBar = ({ routeName }: StatusBarHiderParams) => {
    switch (routeName) {
      //TODO AssetsDetail should come from global definition of screens
      case "AssetDetail":
        return true;
      default:
        return false;
    }
  };

  const isHidden = useMemo(() => getShouldHideStatusBar({ routeName }), [routeName]);

  return {
    statusBarHidden: isHidden,
  };
};
