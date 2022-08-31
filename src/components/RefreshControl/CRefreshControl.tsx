import React from "react";
import { RefreshControl, RefreshControlProps } from "react-native";

interface CRefreshControl extends RefreshControlProps {
  refreshing: boolean;
}

const CRefreshControl = (props: CRefreshControl) => {
  const { refreshing, onRefresh } = props;

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default CRefreshControl;
