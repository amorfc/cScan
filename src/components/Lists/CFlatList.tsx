import { FlatList as NBFlatList } from "native-base";
import React from "react";
import { FlatListProps } from "react-native";

type CFlatListProps<T> = FlatListProps<T>;

const CFlatList = <T,>(props: CFlatListProps<T>) => {
  return <NBFlatList {...props} />;
};

export default CFlatList;
