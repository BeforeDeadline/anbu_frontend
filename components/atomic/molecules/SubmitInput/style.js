import styled from "styled-components/native";

// flex-direction: row;
//   align-items: center;
//   justify-content: space-between;

//   width: 100%;
//   /* height: 90px; */
//   background-color: #3c3c3c;

//   padding-bottom: 30px;

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding-top: 20px;

  width: 100%;

  background-color: #3c3c3c;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: relative;
  bottom: 45;
  right: -300;

  width: 60px;
  height: 40px;
`;
