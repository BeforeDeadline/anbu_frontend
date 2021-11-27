import React from "react";

import Tag from "../../atoms/Tag";
import ContactCycleText from "../../atoms/ContactCycleText";
import MoreButton from "../../atoms/MoreButton";

import { Container, RightBox } from "./style";

const TagListItem = ({ tagName, count }) => {
  return (
    <Container>
      <RightBox>
        <Tag large={true}>{tagName}</Tag>
        <ContactCycleText>ㆍ{count}명</ContactCycleText>
      </RightBox>
      <MoreButton />
    </Container>
  );
};

export default TagListItem;
