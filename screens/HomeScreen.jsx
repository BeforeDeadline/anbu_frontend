import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push("FriendList")}
      />
    </View>
  );
};

export default HomeScreen;
