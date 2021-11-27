import React from "react";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";
import FriendListContainer from "../components/NavFriendListComponent/FriendListContainer";
import FloatingButton from "../components/atomic/atoms/FloatingButton";

const NavFriendListScreen = ({ navigation }) => {
  return (
    <Layout>
      <NavigationTitle title="navFriend" navigation={navigation} />
      <FriendListContainer navigation={navigation} />
      <FloatingButton navigation={navigation} />
    </Layout>
  );
};

export default NavFriendListScreen;
