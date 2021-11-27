import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth();

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;

  height: 90px;
  background-color: #3c3c3c;

  padding-bottom: 30px;
`;

export const StyledTextInput = styled.TextInput`
  width: 200px;
  height: 38px;

  border-radius: 8px;
  padding: 10px 16px;

  background-color: white;
`;
