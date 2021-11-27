import React from "react";
import { ScrollView } from "react-native";

import NavigationTitle from "../navigaton/NavigationTitle";

import Layout from "../components/Layout";

import TagListItem from "../components/atomic/molecules/TagListItem";

import { tagList } from "../mock/tagList";

const TagListScreen = ({ navigation }) => {
  return (
    <Layout>
      <NavigationTitle title="tag" navigation={navigation} />
      <ScrollView>
        {tagList.map((tag, idx) => (
          <TagListItem key={idx} tagName={tag.tagName} count={tag.count} />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default TagListScreen;
