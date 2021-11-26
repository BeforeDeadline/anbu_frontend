import React from "react";
import { View } from "react-native";

import CustomText from "../../atoms/Text";
import BottomArrowIcon from "../../atoms/Icons/BottomArrowIcon";

import { Touchable } from "./style";

const DropDownButton = ({ children }) => {
  return (
    <Touchable>
      <CustomText fontColor="#717171" fontSize="14px" fontWeight="400">
        {children}
      </CustomText>
      <View style={{ marginLeft: 7 }}>
        <BottomArrowIcon />
      </View>
    </Touchable>
  );
};

export default DropDownButton;
