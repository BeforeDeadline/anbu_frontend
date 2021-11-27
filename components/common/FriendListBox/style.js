import useGetClientWidth from "../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: ${CLIENT_WIDTH}px;
  height: 64px;
  padding: 5px 10px;
  margin-top: 5px;

  background-color: ${(props) => props.backgroundColor};
  border-bottom-width: 1px;
  border-bottom-color: #717171;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoWrapper = styled.View`
  margin-left: 10px;
`;

export const NameWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  Text {
    font-size: "14px";
    font-weight: 500;
    color: "#00000";
  }
`;

export const TagWrapper = styled.View`
  flex-direction: row;
`;
