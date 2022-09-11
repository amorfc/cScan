import { Flex } from "native-base";
import React from "react";
import ExchangeCard from "../../components/Cards/ExchangeCard";
import CFlatList, { TRenderItem } from "../../components/Lists/CFlatList";
import { ExchangeMapItem } from "../../models/serviceModels";
import { useLatestExchanges } from "../../swr/useLatestExchanges";

const ExchangeList = () => {
  const {
    data: exchanges,
    error,
    isValidating,
  } = useLatestExchanges<ExchangeMapItem[], string>({
    swrOptions: { revalidateIfStale: false },
  });

  const renderItem = ({ item, index }: TRenderItem<ExchangeMapItem>) => {
    return <ExchangeCard name={item.name} slug={item.slug} id={item.id} index={index} />;
  };

  return (
    <Flex px={"5"} py={"2"}>
      <CFlatList<ExchangeMapItem>
        data={exchanges ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default ExchangeList;
