import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../../screens/HomeScreen";
import NavFriendListScreen from "../../screens/NavFriendListScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: "#3C3C3C",
        paddingTop: 10,
      }}
      activeColor="#0BD588"
      inactiveColor="#DEDEDE"
    >
      <Tab.Screen
        name="Anbu"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="친구 목록"
        component={NavFriendListScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
