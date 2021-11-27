import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${(props) => props.height};

  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ContentsBox = styled.View`
  flex: 1;
  width: ${CLIENT_WIDTH}px;
`;
