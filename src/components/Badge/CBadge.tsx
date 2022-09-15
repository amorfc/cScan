import { Badge } from "native-base";
import { InterfaceBadgeProps } from "native-base/lib/typescript/components/composites/Badge/types";
import React from "react";
import CText from "../Text/CText";

export interface CBadgeProps extends InterfaceBadgeProps {
  label: string;
}

const CBadge = (props: CBadgeProps) => {
  const { label } = props;

  return (
    <Badge {...props} alignSelf="center">
      <CText text={label} />
    </Badge>
  );
};

export default CBadge;
