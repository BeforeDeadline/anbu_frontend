import React from "react";
import { View, Text, Button } from "react-native";

const FriendListByTagScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FriendListByTagScreen</Text>
      <Button title="Go to Details" onPress={() => navigation.push("Anbu")} />
    </View>
  );
};

export default FriendListByTagScreen;
