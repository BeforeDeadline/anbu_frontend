import React from "react";
import { View, Text, Button } from "react-native";

const NavFriendListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NavFriendListScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Anbu")}
      />
    </View>
  );
};

export default NavFriendListScreen;
