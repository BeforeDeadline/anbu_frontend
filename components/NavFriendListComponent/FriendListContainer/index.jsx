import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomText from "../../atomic/atoms/Text";

import HomeFriendListBox from "../../common/HomeFriendListBox";

import Modal from "../../atomic/molecules/Modal";

import { color } from "../../../utils/constants";

import { friendList } from "../../../mock/friendsList";

import { Container, InfoDescriptionBox, ScrollViewContainer } from "./style";

const FriendListContainer = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [randomNum, setRandomNum] = useState(0);
  const [contactList, setContactList] = useState(null);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible((prev) => !prev);
  };

  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) setContactList(data);
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
      alert("정보를 불러오지 못했습니다. 앱을 다시 시작해주세요!");
    }
  };

  useEffect(async () => {
    const data = await getData("contactList");
    if (data) {
      setContactList(data);
      setLoading(true);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <InfoDescriptionBox>
            <CustomText fontSize="12px" fontWeight="600" fontColor="#FFFFFF">
              친구 {contactList.length}명
            </CustomText>
            <CustomText fontSize="12px" fontWeight="400" fontColor="#B5B5B5">
              연락일 가까운 순
            </CustomText>
          </InfoDescriptionBox>
          <ScrollViewContainer>
            {contactList.map((contact, idx) => {
              const randomNumber = idx % 4;
              return (
                <HomeFriendListBox
                  key={idx}
                  name={contact.name}
                  contactCycle={friendList[idx % 12].contactCycle}
                  tags={friendList[idx % 12].tags}
                  iconBackgroundColor={color[randomNumber].iconBackgroundColor}
                  iconColor={color[randomNumber].iconColor}
                  toggleBottomNavigationView={() => {
                    toggleBottomNavigationView();
                    setRandomNum(idx % 4);
                    setInfo({
                      name: contact.name,
                      phoneNumber:
                        contact.phoneNumbers && contact.phoneNumbers[0].number,
                      tags: friendList[idx % 12].tags,
                      contactCycle: friendList[idx % 12].contactCycle,
                    });
                  }}
                />
              );
            })}
          </ScrollViewContainer>
        </Container>
      ) : (
        <View
          style={{ flex: 1, justifyContents: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0BD588" />
        </View>
      )}
      <Modal
        type="AnbuModal"
        randomNum={randomNum}
        visible={visible}
        info={info}
        toggleBottomNavigationView={toggleBottomNavigationView}
        navigation={navigation}
      />
    </>
  );
};

export default FriendListContainer;
