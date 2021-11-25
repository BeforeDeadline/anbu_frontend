import React from "react";
import { View, Text, Button } from "react-native";
import NavigationTitle from "../navigaton/NavigationTitle";

const NavFriendListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NavigationTitle title="navFriend" />
      <Text>NavFriendListScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Anbu")}
      />
    </View>
  );
};

export default NavFriendListScreen;
