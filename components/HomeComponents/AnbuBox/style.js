import styled from "styled-components/native";

import useGetClientWidth from "../../../hooks/useGetClientWidth";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const TitleBox = styled.View`
  flex-direction: row;

  margin-top: 20px;

  width: ${CLIENT_WIDTH}px;
`;

export const TitleContents = styled.Text`
  margin-left: ${(props) => props.marginLeft};
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.fontColor};
`;

export const ScrollBox = styled.ScrollView`
  flex: 1;
`;
