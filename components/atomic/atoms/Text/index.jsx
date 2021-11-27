import React from "react";

import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
`;

const CustomText = ({ fontSize, fontWeight, fontColor, children }) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;
