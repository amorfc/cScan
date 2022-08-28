import { FlatList as NBFlatList } from "native-base";
import React from "react";
import { FlatListProps } from "react-native";

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
}

const CFlatList = <T extends TItem>(props: CFlatListProps<T>) => {
  return <NBFlatList {...props} />;
};

export default CFlatList;
