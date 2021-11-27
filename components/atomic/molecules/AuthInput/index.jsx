import React from "react";

import CustomText from "../../atoms/Text";
import TextInput from "../../atoms/TextInput";

import { Container } from "./style";

const AuthInput = ({ placeholder = "", value, onChange }) => {
  return (
    <Container>
      <CustomText fontColor="#0BD588" fontSize="16px" fontWeight="700">
        {placeholder === "아이디" ? "아이디" : "비밀번호"}
      </CustomText>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={placeholder === "아이디" ? false : true}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </Container>
  );
};

export default AuthInput;
