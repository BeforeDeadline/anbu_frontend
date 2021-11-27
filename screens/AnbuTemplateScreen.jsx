import React, { useEffect, useState } from "react";

import { greetingList, bodyList, finishList } from "../mock/template";

import NavigationTitle from "../navigaton/NavigationTitle";
import Layout from "../components/Layout";

import TextInput from "../components/atomic/atoms/TextInput";

import DropDownTabBar from "../components/atomic/molecules/DropDownTabBar";
import AnbuTemplate from "../components/atomic/molecules/AnbuTemplate";

const AnbuTemplateScreen = ({ navigation }) => {
  const [totalTemplate, setTotalTemplate] = useState([]);
  const [text, setText] = useState("Useless Text");
  const [greetingValue, setGreetingValue] = useState([]);
  const [bodyValue, setBodyValue] = useState([]);
  const [finalValue, setFinalValue] = useState([]);

  useEffect(() => {
    if (totalTemplate) {
      const contents = totalTemplate.join(" ");
      setText(contents);
    }
  }, [totalTemplate]);

  return (
    <Layout>
      <NavigationTitle title="anbu" navigation={navigation} />
      <DropDownTabBar />
      <AnbuTemplate
        title="인삿말"
        templateList={greetingList}
        templateValue={greetingValue}
        setTemplateValue={setGreetingValue}
        totalTemplate={totalTemplate}
        setTotalTemplate={setTotalTemplate}
      />
      <AnbuTemplate
        title="본문"
        templateList={bodyList}
        templateValue={bodyValue}
        setTemplateValue={setBodyValue}
        totalTemplate={totalTemplate}
        setTotalTemplate={setTotalTemplate}
      />
      <AnbuTemplate
        title="끝맺음말"
        templateList={finishList}
        templateValue={finalValue}
        setTemplateValue={setFinalValue}
        totalTemplate={totalTemplate}
        setTotalTemplate={setTotalTemplate}
      />
      <TextInput
        placeholder="안부를 골라보세요"
        onChange={setText}
        value={text}
      />
    </Layout>
  );
};

export default AnbuTemplateScreen;
