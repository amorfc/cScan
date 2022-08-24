import { Container, Flex, HStack } from "native-base";
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
    return <Container minH={"10"} minW={"100"} />;
  };
  const renderRightAccessorize = () => {
    if (rightAccesorize) {
      return rightAccesorize();
    }
    return <Container minH={"10"} minW={"100"} />;
  };

  return (
    <HStack bg={"amber.300"} p={"3"} maxH={["md", "lg", "xl"]} justifyContent={"center"}>
      <Flex bgColor={"red.100"}>{renderLeftAccessorize()}</Flex>
      <Flex bgColor={"blue.300"} justifyContent={"center"}>
        {label && (
          <CHeading>
            <CText text={label} />
          </CHeading>
        )}
      </Flex>
      <Flex bgColor={"brown"}>{renderRightAccessorize()}</Flex>
    </HStack>
  );
};

export default CHeader;
