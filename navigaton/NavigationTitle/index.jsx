import React from "react";
import { View, TouchableOpacity } from "react-native";
import LogoIcon from "../../components/atomic/atoms/Icons/LogoIcon";
import AlarmIcon from "../../components/atomic/atoms/Icons/AlarmIcon";
import TagIcon from "../../components/atomic/atoms/Icons/TagIcon";
import PersonPlusIcon from "../../components/atomic/atoms/Icons/PersonPlusIcon";

import { Header, Contents, TagTitleContainer, RowBox } from "./style";
import CustomText from "../../components/atomic/atoms/Text";
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
        {title === "navFriend" && (
          <CustomText fontSize="24px" fontWeight="800" fontColor="#FFFFFF">
            친구
          </CustomText>
        )}
        {title === "anbu" && (
          <RowBox width="70px">
            <ArrowIcon />
            <CustomText fontSize="24px" fontWeight="800" fontColor="#FFFFFF">
              {titleList[title]}
            </CustomText>
          </RowBox>
        )}
        {title === "tag" && (
          <TagTitleContainer>
            <RowBox width="70px">
              <TouchableOpacity
                style={{
                  width: 25,
                }}
                onPress={() => navigation.goBack()}
              >
                <ArrowIcon />
              </TouchableOpacity>
              <CustomText fontSize="24px" fontWeight="800" fontColor="#FFFFFF">
                태그
              </CustomText>
            </RowBox>
            <CustomText fontSize="14px" fontWeight="600" fontColor="#FFFFFF">
              태그추가
            </CustomText>
          </TagTitleContainer>
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
