import React, { useState } from "react";

import CustomText from "../../atomic/atoms/Text";

import HomeFriendListBox from "../../common/HomeFriendListBox";

import Modal from "../../atomic/molecules/Modal";

import { color } from "../../../utils/constants";

import { friendList } from "../../../mock/friendsList";

import { Container, InfoDescriptionBox, ScrollViewContainer } from "./style";

const FriendListContainer = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [randomNum, setRandomNum] = useState(0);

  const toggleBottomNavigationView = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <Container>
        <InfoDescriptionBox>
          <CustomText fontSize="12px" fontWeight="600" fontColor="#FFFFFF">
            친구23명
          </CustomText>
          <CustomText fontSize="12px" fontWeight="400" fontColor="#B5B5B5">
            연락일 가까운 순
          </CustomText>
        </InfoDescriptionBox>
        <ScrollViewContainer>
          {friendList.map((friend, idx) => {
            const randomNumber = idx % 4;
            return (
              <HomeFriendListBox
                name={friend.name}
                contactCycle={friend.contactCycle}
                tags={friend.tags}
                iconBackgroundColor={color[randomNumber].iconBackgroundColor}
                iconColor={color[randomNumber].iconColor}
                toggleBottomNavigationView={() => {
                  toggleBottomNavigationView();
                  setRandomNum(idx % 4);
                }}
              />
            );
          })}
        </ScrollViewContainer>
      </Container>
      <Modal
        type="AnbuModal"
        randomNum={randomNum}
        visible={visible}
        toggleBottomNavigationView={toggleBottomNavigationView}
        navigation={navigation}
      />
    </>
  );
};

export default FriendListContainer;
