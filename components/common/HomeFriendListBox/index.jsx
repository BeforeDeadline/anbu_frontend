import React from "react";
import ContactCycleText from "../../atomic/atoms/ContactCycleText";
import ContactPersonIcon from "../../atomic/atoms/ContactPersonIcon";
import { View, Text } from "react-native";

import Tag from "../../atomic/atoms/Tag";

import {
  Container,
  LeftContainer,
  InfoWrapper,
  NameWrapper,
  TagWrapper,
} from "../FriendListBox/style";
import { SmallText, MoreButton } from "./style";

const HomeFriendListBox = ({
  name,
  contactCycle,
  tags,
  iconBackgroundColor,
  iconColor,
  backgroundColor = "#474747",
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <View>
        <LeftContainer>
          <ContactPersonIcon
            backgroundColor={iconBackgroundColor}
            iconColor={iconColor}
          />
          <InfoWrapper>
            <NameWrapper>
              <Text>{name}</Text>
              {contactCycle === 0 ? (
                <Tag
                  backgroundColor="#CEF7E7"
                  fontColor="#0BD588"
                  fontSize="8px"
                  fontWeight="400"
                  marginLeft="4px"
                >
                  D-day
                </Tag>
              ) : (
                <ContactCycleText>ㆍ{contactCycle}일</ContactCycleText>
              )}
            </NameWrapper>
            <TagWrapper>
              {tags &&
                tags.map((tag, idx) => (
                  <SmallText key={idx}>
                    {idx === tags.length - 1 ? tag : `${tag} ㆍ`}
                  </SmallText>
                ))}
            </TagWrapper>
          </InfoWrapper>
        </LeftContainer>
      </View>
      <MoreButton>ㆍㆍㆍ</MoreButton>
    </Container>
  );
};

export default HomeFriendListBox;
