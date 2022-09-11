import { Flex } from "native-base";
import React from "react";
import { Exchange } from "../../models/domainModels";
import CText from "../Text/CText";
import CListCardContainer from "./CListCardContainer";

interface ExchangeCardProps extends Exchange {
  index?: number;
}

const ExchangeCard = (props: ExchangeCardProps) => {
  const { name } = props;

  return (
    <CListCardContainer>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <CText text={name} />
      </Flex>
    </CListCardContainer>
  );
};

export default ExchangeCard;
