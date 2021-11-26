import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { BottomSheet } from "react-native-btr";

import { friendInfo } from "./AnbuModal/mockData";

import AnbuModal from "./AnbuModal";
import AnbuTemplateModal from "./AnbuTemplateModal";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Button onPress={toggleBottomNavigationView} title="Show Bottom Sheet" />
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <AnbuModal friendInfo={friendInfo} />
        {/* <AnbuTemplateModal /> */}
      </BottomSheet>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "red",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
