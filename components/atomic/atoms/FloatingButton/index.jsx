import React from "react";

import MessageIcon from "../Icons/MessageIcon";

import { Touchable } from "./style";

const FloatingButton = ({ navigation }) => {
  console.log(navigation);
  return (
    <Touchable
      onPress={() => {
        navigation.navigate("AnbuTemplate");
      }}
    >
      <MessageIcon />
    </Touchable>
  );
};

export default FloatingButton;
