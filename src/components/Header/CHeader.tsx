import { Flex, HStack } from "native-base";
import React from "react";
import { ComponentBaseProps } from "../../common/types/common";
import CHeading from "../Text/CHeading";
import CText from "../Text/CText";

interface CHeaderProps extends ComponentBaseProps {
  label?: string;
  leftAccessorize?: () => JSX.Element;
  rightAccesorize?: () => JSX.Element;
}

const CHeader = (props: CHeaderProps) => {
  const { leftAccessorize, rightAccesorize, label } = props;

  const renderLeftAccessorize = () => {
    if (leftAccessorize) {
      return leftAccessorize();
    }
    return null;
  };
  const renderRightAccessorize = () => {
    if (rightAccesorize) {
      return rightAccesorize();
    }
    return null;
  };

  return (
    <HStack bg={"amber.300"} p={"2"} maxH={["md", "lg", "xl"]} justifyContent={"center"}>
      <Flex flex={1} alignItems={"flex-start"}>
        {renderLeftAccessorize()}
      </Flex>
      <Flex flex={1} alignItems={"center"} justifyContent={"center"}>
        {label && (
          <CHeading>
            <CText text={label} />
          </CHeading>
        )}
      </Flex>
      <Flex flex={1} alignItems={"flex-end"}>
        {renderRightAccessorize()}
      </Flex>
    </HStack>
  );
};

export default CHeader;
