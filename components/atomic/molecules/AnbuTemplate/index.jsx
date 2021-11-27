import React, { useEffect, useState } from "react";

import CustomText from "../../atoms/Text";
import Tag from "../../atoms/Tag";

import { Container, TagContainer, RowContainer } from "./style";

const AnbuTemplate = ({
  title,
  templateList,
  templateValue,
  setTemplateValue,
  totalTemplate,
  setTotalTemplate,
}) => {
  const [checkedTemplateList, setCheckedTemplateList] = useState([]);

  const onPressTag = (item) => {
    const idx = templateValue.findIndex((target) => target.id === item.id);
    const { id, template } = item;

    if (idx > -1) {
      const deletedValue = templateValue[idx].template;
      const newTemplateValue = templateValue.filter(
        (_, targetIdx) => targetIdx !== idx
      );
      const newCheckedTemplateList = checkedTemplateList.filter(
        (_, targetIdx) => targetIdx !== idx
      );
      const newTotalTemplate = totalTemplate.filter(
        (item) => item !== deletedValue
      );

      setTemplateValue(newTemplateValue);
      setCheckedTemplateList(newCheckedTemplateList);
      setTotalTemplate(newTotalTemplate);
    } else {
      setTemplateValue((prev) => [...prev, { id, template }]);
      setCheckedTemplateList((prev) => [...prev, template]);
      setTotalTemplate((prev) => [...prev, template]);
    }
  };

  // useEffect(() => {
  //   console.log(`${title} templateValue: `, templateValue);
  // }, [templateValue]);

  // const onPress = () => {
  //   console.log("clicedk");
  //   setIsClicked((prev) => !prev);
  // };
  //   useEffect(() => {
  //     let sumOfLength = 0;
  //     let itemRow = [];
  //     greetingList.forEach((item) => {
  //       sumOfLength += item.template.length;
  //       if (sumOfLength <= 25) {
  //         itemRow.push(item.template);
  //       } else {
  //         setTemplateList((prev) => [...prev, itemRow]);
  //         sumOfLength = 0;
  //         itemRow = [];
  //         itemRow.push(item.template);
  //       }
  //     });
  //   }, [greetingList]);
  //   console.log(greetingList);

  return (
    <Container>
      <CustomText fontColor="#FFFFFF" fontSize="14px" fontWeight="400">
        {title}
      </CustomText>
      <TagContainer>
        <RowContainer>
          {templateList[0].map((item, idx) => (
            <Tag
              large={true}
              onPress={() => onPressTag(item)}
              // backgroundColor={idx % 3 !== 1 ? "#FFFFFF" : "#CEF7E7"}
              backgroundColor={
                checkedTemplateList.includes(item.template)
                  ? "#CEF7E7"
                  : "#FFFFFF"
              }
              fontColor={
                checkedTemplateList.includes(item.template)
                  ? "#0BD588"
                  : "#3C3C3C"
              }
              marginRight="5px"
            >
              {item.template}
            </Tag>
          ))}
        </RowContainer>
        <RowContainer>
          {templateList[1].map((item, idx) => (
            <Tag
              large={true}
              onPress={() => onPressTag(item)}
              backgroundColor={
                checkedTemplateList.includes(item.template)
                  ? "#CEF7E7"
                  : "#FFFFFF"
              }
              fontColor={
                checkedTemplateList.includes(item.template)
                  ? "#0BD588"
                  : "#3C3C3C"
              }
              marginRight="5px"
            >
              {item.template}
            </Tag>
          ))}
        </RowContainer>
        <RowContainer>
          {templateList[2].map((item, idx) => (
            <Tag
              large={true}
              onPress={() => onPressTag("item:", item)}
              backgroundColor={
                checkedTemplateList.includes(item.template)
                  ? "#CEF7E7"
                  : "#FFFFFF"
              }
              fontColor={
                checkedTemplateList.includes(item.template)
                  ? "#0BD588"
                  : "#3C3C3C"
              }
              marginRight="5px"
            >
              {item.template}
            </Tag>
          ))}
        </RowContainer>
        <RowContainer>
          {templateList[3].map((item, idx) => {
            return (
              <Tag
                large={true}
                onPress={() => onPressTag(item)}
                backgroundColor={
                  checkedTemplateList.includes(item.template)
                    ? "#CEF7E7"
                    : "#FFFFFF"
                }
                fontColor={
                  checkedTemplateList.includes(item.template)
                    ? "#0BD588"
                    : "#3C3C3C"
                }
                marginRight="5px"
              >
                {item.template}
              </Tag>
            );
          })}
        </RowContainer>
      </TagContainer>
    </Container>
  );
};

export default AnbuTemplate;
