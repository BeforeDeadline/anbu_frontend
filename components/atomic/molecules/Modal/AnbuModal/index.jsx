import React from "react";

import CustomText from "../../../atoms/Text";
import Tag from "../../../atoms/Tag";
import TextButton from "../../../atoms/TextButton";

import ContactPersonIcon from "../../../atoms/ContactPersonIcon";
import PhoneIcon from "../../../atoms/Icons/PhoneIcon";
import SettingIcon from "../../../atoms/Icons/SettingIcon";

import {
  HeaderContainer,
  FriendContentsContainer,
  FriendColumnBox,
  FriendContents,
  ButtonFlexEndContainer,
  ButtonContainer,
} from "./style";
import { Container, ContentsBox } from "../style";
import { Touchable } from "../../../atoms/TextButton/style";

const AnbuModal = ({ friendInfo }) => {
  return (
    <Container height="200">
      <ContentsBox>
        <HeaderContainer>
          <FriendContentsContainer>
            <ContactPersonIcon
              width="44px"
              height="44px"
              backgroundColor="#CEF7E7"
              iconColor="#0BD588"
              size={30}
            />
            <FriendColumnBox>
              <FriendContents>
                <CustomText
                  fontSize="24px"
                  fontWeight="600"
                  fontColor="#000000"
                >
                  {friendInfo.name}
                </CustomText>
                {friendInfo.tags.map((tag, idx) => (
                  <Tag key={idx} large={true} marginLeft="4px">
                    {tag}
                  </Tag>
                ))}
              </FriendContents>
              <CustomText fontColor="#B5B5B5" fontSize="14px" fontWeight="400">
                {friendInfo.contactCycle}일마다 연락해요
              </CustomText>
            </FriendColumnBox>
          </FriendContentsContainer>
          <SettingIcon />
        </HeaderContainer>
        <ButtonFlexEndContainer>
          <ButtonContainer>
            <Touchable
              width="44px"
              height="44px"
              margin="0px"
              borderRadius="8px"
              backgroundColor="#EBEBEB"
            >
              <PhoneIcon />
            </Touchable>
            <TextButton
              width="171px"
              height="44px"
              borderRadius="8px"
              backgroundColor="#0BD588"
              fontColor="#FFFFFF"
              fontSize="16px"
              fontWeight="600"
            >
              안부묻기
            </TextButton>
          </ButtonContainer>
        </ButtonFlexEndContainer>
      </ContentsBox>
    </Container>
  );
};

export default AnbuModal;
