import React from "react";
import { View, Text, Button } from "react-native";

import NavigationTitle from "../navigaton/NavigationTitle";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NavigationTitle title="home" />
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push("FriendList")}
      />
    </View>
  );
};

export default HomeScreen;
