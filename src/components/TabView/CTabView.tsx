import React, { createRef, useRef } from "react";
import { Animated, useWindowDimensions, View } from "react-native";
import CTVTabs from "./CTVTabs";

export interface CTVRoute {
  title: string;
  render: JSX.Element;
  key: string;
  ref: React.RefObject<View>;
}

interface CTabViewProps {
  routes: Omit<CTVRoute, "ref">[];
}

const CTabView = (props: CTabViewProps) => {
  const { routes } = props;

  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const tabViewContainerRef = useRef();

  const finalRoutes =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    routes?.map((el) => ({
      ...el,
      ref: createRef(),
    }));

  const onTabPress = (tabIndex) => {
    tabViewContainerRef?.current?.scrollToOffset({
      offset: tabIndex * width,
    });
  };

  return (
    <View>
      <CTVTabs routes={finalRoutes} onTabPress={onTabPress} scrollX={scrollX} />
      <Animated.FlatList
        ref={tabViewContainerRef}
        data={finalRoutes}
        keyExtractor={(item) => item?.key}
        horizontal={true}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        bounces={false}
        pagingEnabled
        renderItem={({ item }) => <View style={{ width, height }}>{item.render}</View>}
      />
    </View>
  );
};

export default CTabView;
