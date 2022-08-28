import { Center, Flex, Stack } from "native-base";
import React from "react";
import CImage from "../Image/CImage";
import CText from "../Text/CText";
import CListCardContainer from "./CListCardContainer";

interface AssetCardProps {
  symbol: string;
  //Temp logo type
  logo: string | undefined;
  quote: {
    marketCap: number;
    price: number;
    percentChange: number;
  };
  rank: number;
}

const _TEMP_LOGO = "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png";

const AssetCard = (props: AssetCardProps) => {
  const {
    symbol,
    rank,
    quote: { marketCap, price, percentChange },
    logo = _TEMP_LOGO,
  } = props;

  return (
    <CListCardContainer>
      <Stack direction={["row", "row", "row"]}>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <CText text={rank?.toString()} />
        </Flex>
        <Stack flex={6} direction={"row"} justifyContent={"space-between"}>
          <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
            <CImage url={logo} />
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
