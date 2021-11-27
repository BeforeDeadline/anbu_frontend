// import React from "react";

// import FloatingButton from "../components/atomic/atoms/FloatingButton";

// import NavigationTitle from "../navigaton/NavigationTitle";
// import Layout from "../components/Layout";

// import GreetingBox from "../components/HomeComponents/GreetingBox";
// import EventBox from "../components/HomeComponents/EventBox";
// import AnbuBox from "../components/HomeComponents/AnbuBox";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Layout>
//       <NavigationTitle title="home" />
//       <GreetingBox name="윤준서" />
//       <EventBox />
//       <AnbuBox type="anbu" />
//       <AnbuBox type="birthday" />
//       <FloatingButton navigation={navigation} />
//     </Layout>
//   );
// };

// export default HomeScreen;

import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function HomeScreen() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
          console.log("data: ", data);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Contacts Module Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
