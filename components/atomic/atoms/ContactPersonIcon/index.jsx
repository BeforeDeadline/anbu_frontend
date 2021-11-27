import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container } from "../ContactPersonIcon/style";

const ContactPersonIcon = ({
  width = "32px",
  height = "32px",
  backgroundColor,
  iconColor,
  size = 20,
}) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor}>
      <AntDesign name="user" size={size} color={iconColor} />
    </Container>
  );
};

export default ContactPersonIcon;
