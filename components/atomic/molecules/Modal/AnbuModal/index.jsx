import React from "react";
import { Linking } from "react-native";

import CustomText from "../../../atoms/Text";
import Tag from "../../../atoms/Tag";
import TextButton from "../../../atoms/TextButton";

import ContactPersonIcon from "../../../atoms/ContactPersonIcon";
import PhoneIcon from "../../../atoms/Icons/PhoneIcon";
import SettingIcon from "../../../atoms/Icons/SettingIcon";

import { color } from "../../../../../utils/constants";

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

const AnbuModal = ({
  randomNum,
  navigation,
  info,
  toggleBottomNavigationView,
}) => {
  const onPress = () => {
    navigation.navigate("AnbuTemplate", { phoneNumber: info.phoneNumber });
    toggleBottomNavigationView();
  };

  const onPressCall = () => {
    const url = `tel://${info.phoneNumber}`;
    Linking.openURL(url);
  };

  return (
    <Container height="200px">
      <ContentsBox>
        <HeaderContainer>
          <FriendContentsContainer>
            <ContactPersonIcon
              width="44px"
              height="44px"
              backgroundColor="red"
              iconColor="white"
              backgroundColor={color[randomNum].iconBackgroundColor}
              iconColor={color[randomNum].iconColor}
              size={30}
            />
            <FriendColumnBox>
              <FriendContents>
                <CustomText
                  fontSize="24px"
                  fontWeight="600"
                  fontColor="#000000"
                >
                  {info.name}
                </CustomText>
                {info.tags.map((tag, idx) => (
                  <Tag key={idx} large={true} marginLeft="4px">
                    {tag}
                  </Tag>
                ))}
              </FriendContents>
              <CustomText fontColor="#B5B5B5" fontSize="14px" fontWeight="400">
                {info.contactCycle}일마다 연락해요
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
              onPress={onPressCall}
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
              onPress={onPress}
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
