import React from "react";
import { View, Linking } from "react-native";

import CustomText from "../../atoms/Text";
import TextInput from "../../atoms/TextInput";

import { Container, SubmitButton } from "./style";

const SubmitInput = ({ placeholder = "", value, phoneNumber, onChange }) => {
  const onPressSubmit = () => {
    const message = `sms:${phoneNumber}?body=${value}`;
    Linking.openURL(message);
  };
  return (
    <Container>
      <View>
        <TextInput
          placeholder={placeholder}
          multiline={true}
          value={value}
          onChange={(e) => onChange(e)}
        />
        <SubmitButton onPress={onPressSubmit}>
          <CustomText fontColor="#0BD588" fontSize="14px" fontWeight="600">
            전송
          </CustomText>
        </SubmitButton>
      </View>
    </Container>
  );
};

export default SubmitInput;
