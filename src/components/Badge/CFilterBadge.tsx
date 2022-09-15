import React from "react";
import CBadge, { CBadgeProps } from "./CBadge";

type CFilterBadgeProps = Omit<CBadgeProps, "borderRadius" | "colorScheme">;

const CFilterBadge = (props: CFilterBadgeProps) => {
  return <CBadge {...props} borderRadius={"full"} colorScheme={"darkBlue"} />;
};

export default CFilterBadge;
