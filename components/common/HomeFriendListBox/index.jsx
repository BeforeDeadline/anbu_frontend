import React from "react";
import ContactCycleText from "../../atomic/atoms/ContactCycleText";
import ContactPersonIcon from "../../atomic/atoms/ContactPersonIcon";
import { View, Text } from "react-native";

import {
  Container,
  LeftContainer,
  InfoWrapper,
  NameWrapper,
  TagWrapper,
} from "../FriendListBox/style";
import DdayBox from "../../atomic/atoms/DdayBox";

const HomeFriendListBox = ({
  name,
  contactCycle,
  tags,
  iconBackgroundColor,
  iconColor,
}) => {
  return (
    <Container>
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
                <DdayBox />
              ) : (
                <ContactCycleText>ㆍ{contactCycle}일</ContactCycleText>
              )}
            </NameWrapper>
            <TagWrapper>
              {tags.map((tag, idx) => (
                <Text
                  key={idx}
                  style={{
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "#E1E1E1",
                    marginRight: "4px",
                  }}
                >
                  {idx === tags.length - 1 ? tag : `${tag} ㆍ`}
                </Text>
              ))}
            </TagWrapper>
          </InfoWrapper>
        </LeftContainer>
      </View>
      <Text>ㆍㆍㆍ</Text>
    </Container>
  );
};

export default HomeFriendListBox;
