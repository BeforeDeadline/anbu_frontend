import React from "react";
import { View } from "react-native";

import { situation, parlance, emoticon } from "./constants";

import CustomText from "../../../atoms/Text";
import TextButton from "../../../atoms/TextButton";

import ResetIcon from "../../../atoms/Icons/ResetIcon";

import {
  ButtonContainer,
  HeaderTitle,
  SelectContainer,
  Touchable,
} from "./style";
import { Container, ContentsBox } from "../style";

const AnbuTemplateModal = () => {
  return (
    <Container height="600px">
      <ContentsBox>
        <HeaderTitle>
          <CustomText fontColor="#000000" fontSize="16px" fontWeight="600">
            안부 템플릿
          </CustomText>
        </HeaderTitle>
        <SelectContainer>
          <CustomText fontColor="#000000" fontSize="12px" fontWeight="400">
            상황
          </CustomText>
          {situation.map((text, idx) => (
            <TextButton
              width="100%"
              height="40"
              margin={idx === 0 ? "8px 0px 0px 0px" : "4px 0px 0px 0px"}
              borderRadius="8px"
              backgroundColor="#CEF7E7"
              fontColor="#0BD588"
            >
              {text}
            </TextButton>
          ))}

          <View style={{ marginTop: 10 }}>
            <CustomText fontColor="#000000" fontSize="12px" fontWeight="400">
              말투
            </CustomText>
          </View>
          {parlance.map((text, idx) => (
            <TextButton
              width="100%"
              height="40"
              margin={idx === 0 ? "8px 0px 0px 0px" : "4px 0px 0px 0px"}
              borderRadius="8px"
              backgroundColor="#CEF7E7"
              fontColor="#0BD588"
            >
              {text}
            </TextButton>
          ))}
          <View style={{ marginTop: 10 }}>
            <CustomText fontColor="#000000" fontSize="12px" fontWeight="400">
              이모티콘
            </CustomText>
          </View>
          {emoticon.map((text, idx) => (
            <TextButton
              width="100%"
              height="40"
              margin={idx === 0 ? "8px 0px 0px 0px" : "4px 0px 0px 0px"}
              borderRadius="8px"
              backgroundColor="#CEF7E7"
              fontColor="#0BD588"
            >
              {text}
            </TextButton>
          ))}
        </SelectContainer>
        <ButtonContainer>
          <Touchable>
            <ResetIcon />
            <CustomText fontColor="#000000" fontSize="11px" fontWeight="400">
              필터 초기화
            </CustomText>
          </Touchable>
          <TextButton
            width="171px"
            height="44px"
            borderRadius="8px"
            backgroundColor="#0BD588"
            fontColor="#FFFFFF"
          >
            필터 적용
          </TextButton>
        </ButtonContainer>
      </ContentsBox>
    </Container>
  );
};

export default AnbuTemplateModal;
