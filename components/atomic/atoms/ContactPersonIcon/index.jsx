import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container } from "../ContactPersonIcon/style";

const ContactPersonIcon = ({ backgroundColor, iconColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <AntDesign name="user" size={20} color={iconColor} />
    </Container>
  );
};

export default ContactPersonIcon;
