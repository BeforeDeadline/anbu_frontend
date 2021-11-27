import React from "react";

import CustomText from "../Text";

import { Container, SubmitButton, StyledTextInput } from "./style";

const TextInput = ({ placeholder = "", value, onChange }) => {
  return (
    <Container>
      <StyledTextInput
        placeholder={placeholder}
        multiline={true}
        value={value}
        onChangeText={(e) => onChange(e)}
      />
      <SubmitButton>
        <CustomText fontColor="#0BD588" fontSize="14px" fontWeight="600">
          전송
        </CustomText>
      </SubmitButton>
    </Container>
  );
};

export default TextInput;
