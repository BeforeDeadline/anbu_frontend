import styled from "styled-components/native";

import useGetClientWidth from "../../../hooks/useGetClientWidth";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  flex: 0.5;
  width: ${CLIENT_WIDTH}px;
  height: 50px;
`;

export const LargeText = styled.Text`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
`;

export const LargeBoldText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
`;
