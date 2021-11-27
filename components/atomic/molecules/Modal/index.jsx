import React from "react";
import { BottomSheet } from "react-native-btr";

import AnbuModal from "./AnbuModal";
import AnbuTemplateModal from "./AnbuTemplateModal";

const Modal = ({
  type,
  randomNum,
  visible,
  info,
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
          navigation={navigation}
          info={info}
          toggleBottomNavigationView={toggleBottomNavigationView}
        />
      )}
      {type === "AnbuTemplateModal" && <AnbuTemplateModal />}
    </BottomSheet>
  );
};

export default Modal;
