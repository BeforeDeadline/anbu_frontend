import React from "react";
import { Text, View } from "react-native";

import ContactPersonIcon from "../../atomic/atoms/ContactPersonIcon";
import ContactCycleText from "../../atomic/atoms/ContactCycleText";
import Tag from "../../atomic/atoms/Tag";
import DdayBox from "../../atomic/atoms/DdayBox";

import {
  Container,
  InfoWrapper,
  NameWrapper,
  TagWrapper,
  LeftContainer,
} from "./style";

const FriendListBox = ({
  name,
  contactCycle,
  tags,
  iconBackgroundColor,
  iconColor,
  backgroundColor = "#FAFAFA",
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
              <ContactCycleText>ㆍ{contactCycle}일</ContactCycleText>
            </NameWrapper>
            <TagWrapper>
              {tags &&
                tags.map((tag, idx) => (
                  <Tag
                    key={idx}
                    fontSize="8px"
                    fontWeight="400"
                    marginRight="4"
                  >
                    {tag}
                  </Tag>
                ))}
            </TagWrapper>
          </InfoWrapper>
        </LeftContainer>
      </View>
      <DdayBox />
    </Container>
  );
};

export default FriendListBox;
