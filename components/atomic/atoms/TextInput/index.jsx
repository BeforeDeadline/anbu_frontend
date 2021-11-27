import React from "react";

import { StyledTextInput } from "./style";

const TextInput = ({
  placeholder = "",
  multiline = false,
  value,
  secureTextEntry = false,
  onChange,
}) => {
  return (
    <StyledTextInput
      placeholder={placeholder}
      multiline={multiline}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={(e) => onChange(e)}
    />
  );
};

export default TextInput;
