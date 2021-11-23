import styled from "styled-components/native";

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;

export const Contents = styled.Text`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
