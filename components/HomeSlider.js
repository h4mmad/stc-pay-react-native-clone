import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useState } from "react";

import Modal from "react-native-modal";

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
    scrollStyle: {
      backgroundColor: "blue",
    },
  });

  return <></>;
};

export default HomeSlider;
