import useGetClientWidth from "../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  flex: 1;
`;

export const InfoDescriptionBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  width: ${CLIENT_WIDTH}px;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;
