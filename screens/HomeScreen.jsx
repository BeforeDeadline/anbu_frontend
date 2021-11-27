import React, { useState, useEffect } from "react";
import * as Contacts from "expo-contacts";

import { storeData } from "../utils/asyncStorage";

import FloatingButton from "../components/atomic/atoms/FloatingButton";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";

import GreetingBox from "../components/HomeComponents/GreetingBox";
import EventBox from "../components/HomeComponents/EventBox";
import AnbuBox from "../components/HomeComponents/AnbuBox";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setData(data);
        }
      }
    })();
  }, []);

  useEffect(async () => {
    await storeData({ key: "contactList", data });
  }, [data]);

  return (
    <Layout>
      <NavigationTitle title="home" />
      <GreetingBox name="윤준서" />
      <EventBox />
      <AnbuBox type="anbu" />
      <AnbuBox type="birthday" />
      <FloatingButton navigation={navigation} />
    </Layout>
  );
};

export default HomeScreen;
