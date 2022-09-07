import React from "react";
import CTabView from "../../components/TabView/CTabView";
import CScreenContainer from "../CScreenContainer";
import ExchangeList from "../Exchanges/ExchangeList";
import MarketList from "./MarketList";

const TAB_VIEW_ROUTES_KEY = {
  MARKET_LIST: "market_list",
  EXCHANGE_LIST: "exchanges_list",
};

const Markets = () => {
  const renderTabs = [
    {
      title: "Markets",
      render: <MarketList />,
      key: TAB_VIEW_ROUTES_KEY.MARKET_LIST,
    },
    {
      title: "Exchanges",
      render: <ExchangeList />,
      key: TAB_VIEW_ROUTES_KEY.EXCHANGE_LIST,
    },
  ];

  return (
    <CScreenContainer headerTitle="Markets">
      <CTabView routes={renderTabs} />
    </CScreenContainer>
  );
};

export default Markets;
