import React from "react";
import { BottomSheet } from "react-native-btr";

import { friendInfo } from "./AnbuModal/mockData";

import AnbuModal from "./AnbuModal";
import AnbuTemplateModal from "./AnbuTemplateModal";

const Modal = ({
  type,
  randomNum,
  visible,
  toggleBottomNavigationView,
  navigation,
}) => {
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      {type === "AnbuModal" && (
        <AnbuModal
          randomNum={randomNum}
          friendInfo={friendInfo}
          navigation={navigation}
          toggleBottomNavigationView={toggleBottomNavigationView}
        />
      )}
      {type === "AnbuTemplateModal" && <AnbuTemplateModal />}
    </BottomSheet>
  );
};

export default Modal;
