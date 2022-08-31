import React from "react";
import { ComponentBaseProps } from "../common/types/common";
import CBox from "../components/Box/CBox";
import CHeader from "../components/Header/CHeader";

interface BaseScreenContainerProps extends ComponentBaseProps {
  headerTitle?: string;
}

const CScreenContainer = (props: BaseScreenContainerProps) => {
  const { headerTitle } = props;
  return (
    <CBox flex={1}>
      <CHeader label={headerTitle} />
      {props.children}
    </CBox>
  );
};

export default CScreenContainer;
