import { TouchableNativeFeedback, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeHeader() {
  return (
    <View className="flex-row justify-between items-center mt-12">
      <FontAwesome name="user-circle-o" size={40} color="#d6d6d6" />
      <MaterialCommunityIcons name="bell-outline" size={28} color="purple" />
    </View>
  );
}
