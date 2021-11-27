import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 90px;
  background-color: #3c3c3c;

  padding-bottom: 30px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 30;
  right: 20;

  width: 60px;
  height: 40px;
`;

export const StyledTextInput = styled.TextInput`
  flex-shrink: 1;
  width: ${CLIENT_WIDTH}px;

  border-radius: 8px;
  padding: 10px 16px;

  background-color: white;
`;
