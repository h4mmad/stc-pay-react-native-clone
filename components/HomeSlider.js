import Modal from "react-native-modal";
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const HomeSlider = () => {
  const { width, height } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);

  const styles = StyleSheet.create({
    modal: {
      margin: "auto",
    },
    modalContent: {
      position: "absolute",
      top: height - 200,
      width: width,
      height: 100,
    },
  });

  return (
    <View className="w-50 h-100 bg-pink-200 overflow-hidden">
      <Text>Hello</Text>
    </View>
  );
};

export default HomeSlider;
