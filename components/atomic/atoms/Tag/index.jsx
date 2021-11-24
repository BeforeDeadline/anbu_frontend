import React from "react";
import { Touchable, Container, Contents } from "./style";

const Tag = ({
  onPress,
  large = false,
  marginRight = "0px",
  marginLeft = "0px",
  backgroundColor = "#F3F5F7",
  fontColor = "#505458",
  fontSize = "14px",
  fontWeight = "400",
  children,
}) => {
  return (
    <Touchable marginRight={marginRight} marginLeft={marginLeft}>
      <Container
        onPress={onPress}
        backgroundColor={backgroundColor}
        large={large}
      >
        <Contents
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        >
          {children}
        </Contents>
      </Container>
    </Touchable>
  );
};

export default Tag;
