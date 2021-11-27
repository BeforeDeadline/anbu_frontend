import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NavigationTitle from "./NavigationTitle";

import LoginScreen from "../screens/LoginScreen";
import NavFriendListScreen from "../screens/NavFriendListScreen";
import BottomNavBar from "./BottomNavBar";
import FriendListByTagScreen from "../screens/FriendListByTagScreen";
import AnbuScreenTemplate from "../screens/AnbuTemplateScreen";
import TagListScreen from "../screens/TagListScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomNavBar} />
        <Stack.Screen name="FriendList" component={FriendListByTagScreen} />
        <Stack.Screen name="NavFriend" component={NavFriendListScreen} />
        <Stack.Screen name="AnbuTemplate" component={AnbuScreenTemplate} />
        <Stack.Screen name="TagList" component={TagListScreen} />
        <Stack.Screen name="Title" component={NavigationTitle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
