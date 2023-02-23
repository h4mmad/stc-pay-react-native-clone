import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";
import GridMenu from "../components/GridMenu";
import HomeSlider from "../components/HomeSlider";
import Modal from "react-native-modal";
import { useState } from "react";
import BottomHomeView from "../components/BottomHomeView";

export default function HomeScreen({ navigation }) {
  const [visible, isVisible] = useState(false);

  return (
    <View className="bg-slate-100 ">
      <HomeHeader />
      <Balance />
      <GridMenu navigation={navigation} />
      <HomeSlider />

      <BottomHomeView />

      <StatusBar />
    </View>
  );
}
