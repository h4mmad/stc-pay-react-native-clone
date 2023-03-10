import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { customColors } from "../customColors";

export default function HomeHeader() {
  const { width, height, scale } = useWindowDimensions();

  const styles = StyleSheet.create({
    view: {
      marginTop: 40,
    },
  });

  return (
    <View
      className="flex-row justify-between items-center px-6"
      style={styles.view}
    >
      <FontAwesome name="user-circle-o" size={35} color="#d6d6d6" />
      <Feather name="bell" size={24} color={customColors.stcMain} />
    </View>
  );
}
