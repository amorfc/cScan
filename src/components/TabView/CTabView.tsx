import React from "react";
import { useWindowDimensions } from "react-native";
import { Route, TabBar, TabView, TabViewProps } from "react-native-tab-view";
import CText from "../Text/CText";

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
  const { onChange, routes, renderCustomTabBar } = props;

  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

  const onChangeTab = (index: number) => {
    setIndex(index);
    onChange && onChange({ index, route: routes[index] });
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ height: 0 }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route, focused }: { route: TCTabViewRoute; focused: boolean }) => (
        <CText text={route.title} />
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      renderScene={({ route }) => route.render}
      onIndexChange={onChangeTab}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      {...props}
    />
  );
};

export default CTabView;
