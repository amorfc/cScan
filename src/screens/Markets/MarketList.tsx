import { Center, Flex, Stack } from "native-base";
import React from "react";
import AssetCard from "../../components/Cards/AssetCard";
import BaseContainer from "../../components/Container/BaseContainer";
import CFlatList, { TRenderItem } from "../../components/Lists/CFlatList";
import CText from "../../components/Text/CText";
import { MarketItem } from "../../models/serviceModels";
import { useLatestCCList } from "../../swr/useLatestCCList";

const MarketList = () => {
  const {
    data: markets,
    error,
    isValidating,
  } = useLatestCCList<MarketItem[], string>({
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

  return (
    <Flex py={"2"}>
      <ListOrderHeader />
      <CFlatList<MarketItem>
        data={markets ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default MarketList;
