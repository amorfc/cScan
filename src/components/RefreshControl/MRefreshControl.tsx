import React from "react";
import { RefreshControl, RefreshControlProps } from "react-native";

interface MRefreshControl extends RefreshControlProps {
  refreshing: boolean;
}

const MRefreshControl = (props: MRefreshControl) => {
  const { refreshing, onRefresh } = props;

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default MRefreshControl;
