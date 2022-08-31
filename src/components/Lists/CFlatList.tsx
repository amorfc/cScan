import { FlatList as NBFlatList } from "native-base";
import React, { useMemo } from "react";
import { FlatListProps } from "react-native";
import CRefreshControl from "../RefreshControl/CRefreshControl";

interface TItem {
  id: number | string;
}

export interface TRenderItem<T> {
  item: T;
  index: number;
}

interface CFlatListProps<T extends TItem> extends FlatListProps<T> {
  data: T[];
  renderItem: (params: TRenderItem<T>) => JSX.Element | null;
  renderRefreshControl?: () => JSX.Element;
  isRefreshing?: boolean;
}

const CFlatList = <T extends TItem>(props: CFlatListProps<T>) => {
  const { renderRefreshControl, isRefreshing = false } = props;

  const refreshControl = useMemo(
    () =>
      renderRefreshControl ? renderRefreshControl() : <CRefreshControl refreshing={isRefreshing} />,
    [isRefreshing, renderRefreshControl],
  );

  return <NBFlatList {...props} refreshControl={refreshControl} />;
};

export default CFlatList;
