import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: ${(props) => props.backgroundColor};
  border-radius: 100px;
`;
