import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");
const CLIENT_WIDTH = width - 40;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  width: ${CLIENT_WIDTH};
  height: 55px;
  background-color: #474747;
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
