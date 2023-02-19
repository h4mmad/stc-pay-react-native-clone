import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button } from "react-native";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";
import GridMenu from "../components/GridMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <View className="bg-slate-100 flex-1">
      <View className="">
        <HomeHeader />
        <Balance />
        <GridMenu navigation={navigation} />
      </View>
    </View>
  );
}
