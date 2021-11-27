import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async ({ key, data }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log("저장 완료");
  } catch (e) {
    alert("앱을 다시 시작해주세요");
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    alert("정보를 불러오지 못했습니다. 앱을 다시 시작해주세요!");
  }
};
