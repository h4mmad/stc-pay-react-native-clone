import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Card from "../components/Card";
import Balance from "../components/Balance";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
  return (
    <View className="bg-slate-100 relative flex-1 mx-6">
      <HomeHeader />
      <Balance />
      <View className="flex flex-row flex-wrap justify-center">
        <Card
          text="Add money"
          icon={<FontAwesome name="money" size={32} color="purple" />}
          isNew={false}
        ></Card>
        <Card
          text="Transfer to contact"
          icon={<AntDesign name="contacts" size={32} color="purple" />}
          isNew={false}
        />
        <Card
          text="Riyadh season"
          icon={
            <MaterialCommunityIcons
              name="office-building-outline"
              size={32}
              color="purple"
            />
          }
          isNew={true}
        />
        <Card
          text="Eidiya"
          icon={<Ionicons name="mail-open-outline" size={32} color="purple" />}
          isNew={true}
        />
        <Card
          text="Qattah (money split)"
          icon={<AntDesign name="book" size={32} color="purple" />}
          isNew={false}
        />
        <Card
          text="International transfer"
          icon={<Fontisto name="world-o" size={32} color="purple" />}
          isNew={false}
        />
      </View>
    </View>
  );
}
