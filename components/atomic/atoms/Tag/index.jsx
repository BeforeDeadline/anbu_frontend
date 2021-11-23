import React from "react";
import { Touchable, Container, Contents } from "./style";

const Tag = ({
  onPress,
  padding = "3px 6px",
  marginRight,
  backgroundColor = "#F3F5F7",
  fontColor = "#505458",
  fontSize = "14",
  fontWeight = "400",
  children,
}) => {
  return (
    <Touchable marginRight={marginRight}>
      <Container
        onPress={onPress}
        backgroundColor={backgroundColor}
        padding={padding}
      >
        <Contents
          fontColor={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Contents>
      </Container>
    </Touchable>
  );
};

export default Tag;
