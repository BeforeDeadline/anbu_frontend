import React from "react";
import { Touchable, Container, Contents } from "./style";

const TextButton = ({
  onPress,
  children,
  width,
  height,
  borderRadius = "0px",
  backgroundColor,
  fontColor,
  fontSize = "16px",
  fontWeight = "600",
}) => {
  return (
    <Touchable
      onPress={onPress}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      <Contents
        fontColor={fontColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Contents>
    </Touchable>
  );
};

export default TextButton;
