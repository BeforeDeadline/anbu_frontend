import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const useGetClientWidth = () => {
  const CLIENT_WIDTH = Math.round(width);
  return CLIENT_WIDTH;
};

export default useGetClientWidth;
