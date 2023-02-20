import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";
import GridMenu from "../components/GridMenu";
import HomeSlider from "../components/HomeSlider";

export default function HomeScreen({ navigation }) {
  return (
    <View className="bg-slate-100 flex-1">
      <HomeHeader />
      <Balance />
      <GridMenu navigation={navigation} />
      <HomeSlider />
      <StatusBar />
    </View>
  );
}
