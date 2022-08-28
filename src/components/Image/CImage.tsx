import { Image } from "native-base";
import React, { useMemo } from "react";
import { IMAGE_SIZE } from "../../common/constants/style";

interface CImageProps {
  url: string;
  size?: IMAGE_SIZE;
}

const CImage = (props: CImageProps) => {
  const { url, size } = props;

  const source = useMemo(() => ({ uri: url }), [url]);
  return <Image size={size ?? IMAGE_SIZE.TINY} source={source} alt="image" />;
};

export default CImage;
