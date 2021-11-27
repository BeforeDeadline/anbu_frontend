import React, { useState, useEffect } from "react";
import { View } from "react-native";

import useGetClientWidth from "../hooks/useGetClientWidth";

import { login } from "../lib/api/auth";

import Layout from "../components/Layout";

import LogoIcon from "../components/atomic/atoms/Icons/LogoIcon";
import TextButton from "../components/atomic/atoms/TextButton";

import AuthInput from "../components/atomic/molecules/AuthInput";

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [data, setData] = useState(null);

  const CLIENT_WIDTH = useGetClientWidth() - 40;

  const onClickLogin = async () => {
    const user = {
      email: id,
      password: pw,
    };

    const data = await login(user);
    setData(data);
  };

  useEffect(() => {
    if (data === "ok") {
      navigation.navigate("Home");
    }
  }, [data]);

  return (
    <Layout>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoIcon />
      </View>
      <View style={{ flex: 1.2, justifyContent: "center" }}>
        <AuthInput placeholder="아이디" value={id} onChange={setId} />
        <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: "space-between",
        }}
      >
        <TextButton
          onPress={onClickLogin}
          width={CLIENT_WIDTH}
          height="53px"
          borderRadius="8px"
          backgroundColor="#0BD588"
          fontColor="#FFFFFF"
          fonSize="18px"
          fontWeight="400"
        >
          로그인
        </TextButton>
        <TextButton
          margin="0px 0px 40px 0px"
          width={CLIENT_WIDTH}
          height="53px"
          borderRadius="8px"
          backgroundColor="transparent"
          fontColor="#FFFFFF"
          fonSize="18px"
          fontWeight="400"
        >
          회원가입
        </TextButton>
      </View>
    </Layout>
  );
};

export default LoginScreen;
