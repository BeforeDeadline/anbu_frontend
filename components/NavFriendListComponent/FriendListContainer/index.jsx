import React from "react";
import { View, Text } from "react-native";

import CustomText from "../../atomic/atoms/Text";

import FriendListBox from "../../common/FriendListBox";
import HomeFriendListBox from "../../common/HomeFriendListBox";

import { friendList } from "../../../mock/friendsList";

import { Container, InfoDescriptionBox, ScrollViewContainer } from "./style";

const color = [
  {
    iconBackgroundColor: "#CEF7E7",
    iconColor: "#0BD588",
  },
  {
    iconBackgroundColor: "#CEE3F7",
    iconColor: "#0B74D5",
  },
  {
    iconBackgroundColor: "#FDD8E1",
    iconColor: "#F33C68",
  },
  {
    iconBackgroundColor: "#F9D4A8",
    iconColor: "#EF9326",
  },
];
Math.floor(Math.random() * 4);
const FriendListContainer = () => {
  return (
    <Container>
      <InfoDescriptionBox>
        <CustomText fontSize="12px" fontWeight="600" fontColor="#FFFFFF">
          친구142명
        </CustomText>
        <CustomText fontSize="12px" fontWeight="400" fontColor="#B5B5B5">
          연락일 가까운 순
        </CustomText>
      </InfoDescriptionBox>
      <ScrollViewContainer>
        {friendList.map((friend, idx) => {
          const randomNumber = Math.floor(Math.random() * 4);
          return (
            <HomeFriendListBox
              key={idx}
              name={friend.name}
              contactCycle={friend.contactCycle}
              tags={friend.tags}
              iconBackgroundColor={color[randomNumber].iconBackgroundColor}
              iconColor={color[randomNumber].iconColor}
            />
          );
        })}
      </ScrollViewContainer>
    </Container>
  );
};

export default FriendListContainer;
