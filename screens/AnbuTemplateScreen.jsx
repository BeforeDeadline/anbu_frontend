import React from "react";

import { greetingList, bodyList, finishList } from "../mock/template";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";

import DropDownTabBar from "../components/atomic/molecules/DropDownTabBar";
import AnbuTemplate from "../components/atomic/molecules/AnbuTemplate";

const AnbuTemplateScreen = ({ navigation }) => {
  return (
    <Layout>
      <NavigationTitle title="anbu" navigation={navigation} />
      <DropDownTabBar />
      <AnbuTemplate title="인삿말" templateList={greetingList} />
      <AnbuTemplate title="본문" templateList={bodyList} />
      <AnbuTemplate title="끝맺음말" templateList={finishList} />
    </Layout>
  );
};

export default AnbuTemplateScreen;
