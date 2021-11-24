import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Tag from "./components/atomic/atoms/Tag";
import ContactPersonIcon from "./components/atomic/atoms/ContactPersonIcon";
import DdayBox from "./components/atomic/atoms/DdayBox";
import TextButton from "./components/atomic/atoms/TextButton";
import FriendListBox from "./components/common/FriendListBox";
import HomeFriendListBox from "./components/common/HomeFriendListBox";

import { friendList } from "./mock/friendsList";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const onPress = () => {
    setClicked((prev) => !prev);
    console.log("clicked");
  };
  return (
    <View style={styles.container}>
      <Tag backgroundColor="red" large={true}>
        슈가
      </Tag>
      <ContactPersonIcon backgroundColor="#CEF7E7" iconColor="#0BD588" />
      <DdayBox />
      <TextButton
        onPress={() => console.log("필터적용")}
        width="171px"
        height="44px"
        borderRadius="8px"
        backgroundColor="#0BD588"
        fontColor="white"
      >
        필터적용
      </TextButton>
      <TextButton
        onPress={onPress}
        width="335px"
        height="40px"
        backgroundColor={clicked ? "#CEF7E7" : "#F6F8FA"}
        fontColor={clicked ? "#0BD588" : "#505458"}
      >
        안부
      </TextButton>
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
      {friendList.map((friend, idx) => (
        <HomeFriendListBox
          key={idx}
          name={friend.name}
          contactCycle={friend.contactCycle}
          tags={friend.tags}
          iconBackgroundColor="#E5E5E5"
          iconColor="#0BD588"
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
