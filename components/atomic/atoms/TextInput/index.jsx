import React from "react";

import { Container, StyledTextInput } from "./style";

const TextInput = ({ placeHolder = "" }) => {
  return (
    <Container>
      <StyledTextInput placeholder={placeHolder} />
    </Container>
  );
};

export default TextInput;
