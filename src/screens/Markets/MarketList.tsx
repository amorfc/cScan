import { Center, Flex, Stack } from "native-base";
import React, { useMemo } from "react";
import AssetCard from "../../components/Cards/AssetCard";
import BaseContainer from "../../components/Container/BaseContainer";
import CListHeaderFilterView, {
  ListHeaderFilterItem,
} from "../../components/Filter/CListHeaderFilterView";
import CFlatList, { TRenderItem } from "../../components/Lists/CFlatList";
import CText from "../../components/Text/CText";
import { MarketItem } from "../../models/serviceModels";
import { useLatestCCList } from "../../swr/useLatestCCList";
import { getUuid } from "../../utils/common";

const MarketList = () => {
  const { data: markets } = useLatestCCList<MarketItem[], string>({
    swrOptions: { revalidateIfStale: false },
  });
  //Temp variable to order the list
  const currentCurrency = "USD";
  const currentPercentageType = "24";

  const renderItem = ({ item, index }: TRenderItem<MarketItem>) => {
    //Temp usd
    const quote = item.quote.USD;

    return (
      <AssetCard
        rank={index + 1}
        symbol={item.symbol}
        quote={{
          marketCap: quote.market_cap,
          price: quote.price,
          percentChange: quote.percent_change_24h,
        }}
        id={item.id}
      />
    );
  };

  const ListOrderHeader = () => {
    return (
      <BaseContainer>
        <Stack direction={["row", "row", "row"]}>
          <Center flex={2}>
            <CText text="#" />
          </Center>
          <Center flex={6}>
            <CText text="Market Cap" />
          </Center>
          <Center>
            <CText text={`Price(${currentCurrency})`} />
          </Center>
          <Center flex={4} alignItems={"flex-end"}>
            <CText text={`${currentPercentageType} %`} />
          </Center>
        </Stack>
      </BaseContainer>
    );
  };

  const getListFilterItems = (): ListHeaderFilterItem[] => [
    { id: getUuid(), label: "USD", action: () => null },
    { id: getUuid(), label: "Top 100", action: () => null },
    { id: getUuid(), label: "Rank", action: () => null },
  ];

  const filterItems = useMemo(() => getListFilterItems(), []);

  return (
    <Flex py={"2"}>
      <BaseContainer py={"2"} pl={"2"}>
        <CListHeaderFilterView items={filterItems} />
      </BaseContainer>
      <BaseContainer py={"2"}>
        <ListOrderHeader />
      </BaseContainer>
      <CFlatList<MarketItem>
        data={markets ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default MarketList;
