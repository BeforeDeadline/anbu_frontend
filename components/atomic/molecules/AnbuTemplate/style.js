import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  flex: 1;
  width: ${CLIENT_WIDTH};
  margin-top: 20px;
`;

export const TagContainer = styled.View`
  margin-top: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
