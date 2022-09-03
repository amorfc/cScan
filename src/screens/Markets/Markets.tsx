import React from "react";
import CTabView from "../../components/TabView/CTabView";
import CScreenContainer from "../CScreenContainer";
import MarketList from "./MarketList";

const TAB_VIEW_ROUTES_KEY = {
  MARKET_LIST: "market_list",
};

const Markets = () => {
  const renderTabs = [
    {
      title: "Market",
      render: <MarketList />,
      key: TAB_VIEW_ROUTES_KEY.MARKET_LIST,
    },
    {
      title: "Market2",
      render: <MarketList />,
      key: "temp1",
    },
  ];

  return (
    <CScreenContainer headerTitle="Markets">
      <CTabView routes={renderTabs} />
    </CScreenContainer>
  );
};

export default Markets;
