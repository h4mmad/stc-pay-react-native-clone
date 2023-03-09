import { View, StyleSheet, useWindowDimensions } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
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
      <FontAwesome name="user-circle-o" size={40} color="#d6d6d6" />
      <MaterialCommunityIcons
        name="bell-outline"
        size={28}
        color={customColors.stcMain}
      />
    </View>
  );
}
