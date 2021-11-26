import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;
const CLIENT_INNER_WIDTH = CLIENT_WIDTH - 60;

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: ${CLIENT_WIDTH};
  height: 36px;

  background-color: #ffffff;
  border-radius: 100px;

  padding: 0px 10px;
`;

export const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${CLIENT_INNER_WIDTH};
`;
