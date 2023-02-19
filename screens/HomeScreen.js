import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button } from "react-native";

import Card from "../components/Card";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";
import HomeSlider from "../components/HomeSlider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <View className="bg-slate-100 flex-1">
      <View className="mx-6">
        <HomeHeader />

        <Balance />
        <HomeSlider navigation={navigation} />
      </View>
    </View>
  );
}
