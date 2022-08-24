import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ComponentBaseProps } from "../common/types/common";
import CHeader from "../components/Header/CHeader";

interface BaseScreenContainerProps extends ComponentBaseProps {
  headerTitle?: string;
}

const CScreenContainer = (props: BaseScreenContainerProps) => {
  const { headerTitle } = props;
  return (
    <SafeAreaView>
      <CHeader label={headerTitle} />
      {props.children}
    </SafeAreaView>
  );
};

export default CScreenContainer;
