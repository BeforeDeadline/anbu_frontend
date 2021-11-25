import React from "react";
import { View, TouchableOpacity } from "react-native";
import LogoIcon from "../../components/atomic/atoms/Icons/LogoIcon";
import AlarmIcon from "../../components/atomic/atoms/Icons/AlarmIcon";
import TagIcon from "../../components/atomic/atoms/Icons/TagIcon";
import PersonPlusIcon from "../../components/atomic/atoms/Icons/PersonPlusIcon";

import { Header, Contents, TitleText, RowBox } from "./style";
import ArrowIcon from "../../components/atomic/atoms/Icons/ArrowIcon";

const titleList = {
  anbu: "안부",
  tag: "태그",
};

const NavigationTitle = ({ title, navigation }) => {
  return (
    <Header>
      <Contents style={{ color: "white" }}>
        {title === "home" && <LogoIcon />}
        {title === "navFriend" && <TitleText>친구</TitleText>}
        {title === ("anbu" || "tag") && (
          <RowBox width="70px">
            <ArrowIcon />
            <TitleText>{titleList[title]}</TitleText>
          </RowBox>
        )}
      </Contents>
      <View>
        {title === "home" && <AlarmIcon />}
        {title === "navFriend" && (
          <RowBox width="50px">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TagList");
              }}
            >
              <TagIcon />
            </TouchableOpacity>
            <PersonPlusIcon />
          </RowBox>
        )}
      </View>
    </Header>
  );
};

export default NavigationTitle;
