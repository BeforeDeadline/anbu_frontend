import React from "react";

import FloatingButton from "../components/atomic/atoms/FloatingButton";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";

import GreetingBox from "../components/HomeComponents/GreetingBox";
import EventBox from "../components/HomeComponents/EventBox";
import AnbuBox from "../components/HomeComponents/AnbuBox";

const HomeScreen = ({ navigation }) => {
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
