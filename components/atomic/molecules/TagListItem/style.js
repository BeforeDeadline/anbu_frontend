import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${CLIENT_WIDTH}px;

  margin-bottom: 15px;
  padding-bottom: 15px;

  border-bottom-width: 1px;
  border-bottom-color: #717171;
`;

export const RightBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
