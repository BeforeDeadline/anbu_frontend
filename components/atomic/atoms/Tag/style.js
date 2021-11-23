import styled from "styled-components/native";

export const Touchable = styled.TouchableOpacity`
  margin-right: ${(props) => props.marginRight};
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  border: 0.3px solid rgba(16, 17, 18, 0.1);

  padding: ${(props) => props.padding};

  background-color: ${(props) => props.backgroundColor};
`;

export const Contents = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
`;
