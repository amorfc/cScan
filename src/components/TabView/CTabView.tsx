import React from "react";
import { useWindowDimensions } from "react-native";
import { Route, TabView, TabViewProps } from "react-native-tab-view";

interface TCTabViewRoute extends Route {
  title: string;
  render: any;
  key: string;
  iconEl?: JSX.Element;
}

type OmittedTabViewProps<T extends Route> = Omit<
  TabViewProps<T>,
  "onIndexChange" | "navigationState" | "renderScene"
>;

interface CTabViewProps extends OmittedTabViewProps<TCTabViewRoute> {
  onChange?: ({ index, route }: { index: number; route: TCTabViewRoute }) => void;
  renderCustomTabBar?: (props: any) => JSX.Element;
  routes: Array<TCTabViewRoute>;
}

const CTabView = (props: CTabViewProps) => {
  const { onChange, routes } = props;

  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

  const onChangeTab = (index: number) => {
    setIndex(index);
    onChange && onChange({ index, route: routes[index] });
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      renderScene={({ route }) => route.render}
      onIndexChange={onChangeTab}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default CTabView;
