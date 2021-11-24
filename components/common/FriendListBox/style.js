import { Dimensions } from "react-native";

import styled from "styled-components/native";

const { width } = Dimensions.get("window");
const CLIENT_WIDTH = width - 40;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: ${CLIENT_WIDTH};
  height: 64px;
  padding: 5px 10px;

  background-color: ${(props) => props.backgroundColor};

  border-radius: 8px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoWrapper = styled.View`
  margin-left: 10px;
`;

export const NameWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  Text {
    font-size: "14px";
    font-weight: 500;
    color: "#00000";
  }
`;

export const TagWrapper = styled.View`
  flex-direction: row;
`;
