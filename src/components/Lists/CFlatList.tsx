import { FlatList as NBFlatList } from "native-base";
import React from "react";
import { FlatListProps } from "react-native";

interface TItem {
  id: number | string;
}

interface TRenderItem<T> {
  item: T;
}

interface CFlatListProps<T extends TItem> extends FlatListProps<T> {
  data: T[];
  renderItem: ({ item }: TRenderItem<T>) => JSX.Element | null;
}

const CFlatList = <T extends TItem>(props: CFlatListProps<T>) => {
  return <NBFlatList {...props} />;
};

export default CFlatList;
