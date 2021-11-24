import React from "react";
import { View, Text } from "react-native";
import NavigationTitle from "../navigaton/NavigationTitle";

const AnbuScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NavigationTitle title="anbu" />
      <Text>Anbu</Text>
    </View>
  );
};

export default AnbuScreen;
