import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";

import Card from "../components/Card";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";
import HomeSlider from "../components/HomeSlider";

export default function HomeScreen() {
  return (
    <View className="bg-slate-100 flex-1 relative">
      <View className=" mx-6">
        <HomeHeader />
        <Balance />
        <HomeSlider />
      </View>
    </View>
  );
}
