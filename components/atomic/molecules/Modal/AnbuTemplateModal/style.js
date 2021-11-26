import useGetClientWidth from "../../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const HeaderTitle = styled.View`
  flex: 0.5;
  margin-top: 10px;
`;

export const SelectContainer = styled.View`
  flex: 5;
`;

export const ButtonContainer = styled.View`
  flex: 0.7;
  flex-direction: row;
  justify-content: space-between;

  width: ${CLIENT_WIDTH};
`;

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 75px;
  height: 44px;
`;
