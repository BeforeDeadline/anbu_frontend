import React from "react";
import { View } from "react-native";

import MailBoxIcon from "../../atomic/atoms/Icons/MailBoxIcon";
import CakeIcon from "../../atomic/atoms/Icons/CakeIcon";

import FriendListBox from "../../common/FriendListBox";

import { friendList } from "../../../mock/friendsList";

import { TitleBox, TitleContents, ScrollBox } from "./style";

const AnbuBox = ({ type }) => {
  return (
    <View style={{ flex: 2 }}>
      {type === "anbu" && (
        <TitleBox>
          <MailBoxIcon />
          <TitleContents marginLeft="10px" fontColor="#FFFFFF">
            오늘의 안부
          </TitleContents>
          <TitleContents marginLeft="0px" fontColor="#0BD588">
            ㆍ23명
          </TitleContents>
        </TitleBox>
      )}
      {type === "birthday" && (
        <TitleBox>
          <CakeIcon />
          <TitleContents marginLeft="10px" fontColor="#FFFFFF">
            생일인 친구
          </TitleContents>
        </TitleBox>
      )}
      <ScrollBox>
        {friendList.map((friend, idx) => (
          <FriendListBox
            key={idx}
            name={friend.name}
            contactCycle={friend.contactCycle}
            tags={friend.tags}
            iconBackgroundColor="#FFFFFF"
            iconColor="#0BD588"
          />
        ))}
      </ScrollBox>
    </View>
  );
};

export default AnbuBox;
