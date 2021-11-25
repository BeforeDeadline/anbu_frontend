import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const MainLayout = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #474747;
`;

const Layout = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
