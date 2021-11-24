import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 100px;
`;
