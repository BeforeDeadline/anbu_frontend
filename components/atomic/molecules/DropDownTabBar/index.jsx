import React from "react";

import DropDownButton from "../DropDownButton";

import { Container, InnerContainer } from "./style";

const DropDownTabBar = () => {
  return (
    <Container>
      <InnerContainer>
        <DropDownButton>상황</DropDownButton>
        <DropDownButton>말투</DropDownButton>
        <DropDownButton>⭐️이모티콘</DropDownButton>
      </InnerContainer>
    </Container>
  );
};

export default DropDownTabBar;
