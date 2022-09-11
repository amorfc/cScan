import { Center, Flex, Stack } from "native-base";
import React, { useMemo } from "react";
import { Quote } from "../../models/domainModels";
import CImage from "../Image/CImage";
import CText from "../Text/CText";
import CListCardContainer from "./CListCardContainer";

interface AssetCardProps {
  symbol: string;
  quote: Quote;
  rank: number;
  id: number;
}

const getAssetLogo = (id: number) =>
  `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`;

const AssetCard = (props: AssetCardProps) => {
  const {
    symbol,
    rank,
    quote: { marketCap, price, percentChange },
    id,
  } = props;

  const logoUrl = useMemo(() => getAssetLogo(id), [id]);

  return (
    <CListCardContainer>
      <Stack direction={["row", "row", "row"]}>
        <Flex flex={2} justifyContent={"center"} alignItems={"center"}>
          <CText text={rank?.toString()} />
        </Flex>
        <Stack flex={6} direction={"row"} justifyContent={"space-between"}>
          <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
            <CImage url={logoUrl} />
          </Stack>
          <Center flex={2} alignItems={"flex-start"}>
            <CText text={symbol} />
            <CText text={marketCap?.toString()} />
          </Center>
        </Stack>
        <Center flex={4} alignItems={"flex-end"} pr={2}>
          <CText text={price?.toString()} />
        </Center>
        <Center flex={4}>
          <CText text={percentChange?.toString()} />
        </Center>
      </Stack>
    </CListCardContainer>
  );
};

export default AssetCard;
