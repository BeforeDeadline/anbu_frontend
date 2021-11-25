import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");
const CLIENT_WIDTH = width;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${CLIENT_WIDTH};
  height: 55px;
  background-color: #474747;

  padding-left: 10px;
  padding-right: 10px;
`;

export const Contents = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

export const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${(props) => props.width};
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
`;

export const SmallText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;
