import { Center, Flex, Stack } from "native-base";
import React from "react";
import BaseContainer from "../../components/Container/BaseContainer";
import CFlatList, { TRenderItem } from "../../components/Lists/CFlatList";
import CText from "../../components/Text/CText";
import { ExchangeItem } from "../../models/serviceModels";
import { useLatestExchanges } from "../../swr/useLatestExchanges";

const ExchangeList = () => {
  const {
    data: exchanges,
    error,
    isValidating,
  } = useLatestExchanges<ExchangeItem[], string>({
    swrOptions: { revalidateIfStale: false },
  });
  //Temp variable to order the list
  const currentCurrency = "USD";
  const currentPercentageType = "24";

  const renderItem = ({ item, index }: TRenderItem<ExchangeItem>) => {
    return <CText text={item?.id.toString()} />;
  };

  const ListOrderHeader = () => {
    return (
      <BaseContainer>
        <Stack direction={["row", "row", "row"]}>
          <Center flex={1}>
            <CText text="#" />
          </Center>
          <Center flex={6}>
            <CText text="Exchange" />
          </Center>
          <Center>
            <CText text={"24h Volume (USD)"} />
          </Center>
          <Center flex={4} alignItems={"flex-end"}>
            <CText text={"Score"} />
          </Center>
        </Stack>
      </BaseContainer>
    );
  };

  return (
    <Flex px={"5"} py={"2"}>
      <ListOrderHeader />
      <CFlatList<ExchangeItem>
        data={exchanges ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default ExchangeList;
