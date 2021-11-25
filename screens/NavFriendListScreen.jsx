import React from "react";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";
import FriendListContainer from "../components/NavFriendListComponent/FriendListContainer";

const NavFriendListScreen = ({ navigation }) => {
  return (
    <Layout>
      <NavigationTitle title="navFriend" navigation={navigation} />
      <FriendListContainer />
    </Layout>
  );
};

export default NavFriendListScreen;
