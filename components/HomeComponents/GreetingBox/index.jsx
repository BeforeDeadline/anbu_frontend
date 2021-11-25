import React from "react";

import { Container, LargeText, LargeBoldText } from "./style";

const GreetingBox = ({ name }) => {
  return (
    <Container>
      <LargeText>
        <LargeBoldText>{name}</LargeBoldText>님 안녕하세요!
      </LargeText>
    </Container>
  );
};

export default GreetingBox;
