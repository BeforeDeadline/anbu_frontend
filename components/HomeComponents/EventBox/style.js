import styled from "styled-components/native";

import useGetClientWidth from "../../../hooks/useGetClientWidth";

const CLIENT_WIDTH = useGetClientWidth() - 40;
const EVENT_INNER_WIDTH = CLIENT_WIDTH - 36;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const EventItemContainer = styled.View`
  justify-content: center;
  width: ${CLIENT_WIDTH}px;
  height: 56px;

  margin-top: 8px;
  padding-left: 10px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
`;

export const EventItemInnerContents = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${EVENT_INNER_WIDTH}px;
`;

export const InnerText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.fontColor};
`;
