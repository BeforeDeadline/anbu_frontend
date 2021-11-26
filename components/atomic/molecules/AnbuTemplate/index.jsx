import React from "react";

import CustomText from "../../atoms/Text";
import Tag from "../../atoms/Tag";

import { Container, TagContainer, RowContainer } from "./style";

const AnbuTemplate = ({ title, templateList }) => {
  //   useEffect(() => {
  //     let sumOfLength = 0;
  //     let itemRow = [];
  //     greetingList.forEach((item) => {
  //       sumOfLength += item.template.length;
  //       if (sumOfLength <= 25) {
  //         itemRow.push(item.template);
  //       } else {
  //         setTemplateList((prev) => [...prev, itemRow]);
  //         itemRow = [];
  //         itemRow.push(item.template);
  //       }
  //     });
  //   }, [greetingList]);c
  //   console.log(greetingList);
  return (
    <Container>
      <CustomText fontColor="#FFFFFF" fontSize="14px" fontWeight="400">
        {title}
      </CustomText>
      <TagContainer>
        <RowContainer>
          {templateList[0].map((item) => (
            <Tag
              large={true}
              backgroundColor="#CEF7E7"
              fontColor="#0BD588"
              marginRight="5px"
            >
              {item}
            </Tag>
          ))}
        </RowContainer>
        <RowContainer>
          {templateList[1].map((item) => (
            <Tag
              large={true}
              backgroundColor="#CEF7E7"
              fontColor="#0BD588"
              marginRight="5px"
            >
              {item}
            </Tag>
          ))}
        </RowContainer>
      </TagContainer>
    </Container>
  );
};

export default AnbuTemplate;
