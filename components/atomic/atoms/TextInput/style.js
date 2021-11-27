import useGetClientWidth from "../../../../hooks/useGetClientWidth";

import styled from "styled-components/native";

const CLIENT_WIDTH = useGetClientWidth() - 40;

export const StyledTextInput = styled.TextInput`
  flex-shrink: 1;
  width: ${CLIENT_WIDTH}px;

  border-radius: 8px;
  padding: 10px 16px;
  padding-right: 50px;

  background-color: white;
`;
