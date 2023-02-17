import Card from "../components/Card";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  ScrollView,
  View,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";

export default function HomeSlider() {
  return (
    <>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <View>
          <View className="flex-row">
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
          </View>

          <View className="flex-row">
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
              icon={
                <Ionicons name="mail-open-outline" size={32} color="purple" />
              }
              isNew={true}
            />
          </View>

          <View className="flex-row">
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
        <View>
          <View className="flex-row">
            <Card
              text="Local bank transfer"
              icon={
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={32}
                  color="purple"
                />
              }
              isNew={false}
            ></Card>
            <Card
              text="stc bills & sawa"
              icon={
                <FontAwesome5 name="file-invoice" size={32} color="purple" />
              }
              isNew={false}
            />
          </View>

          <View className="flex-row">
            <Card
              text="Musaned salary payments"
              icon={<MaterialIcons name="payment" size={32} color="purple" />}
              isNew={false}
            />
            <Card
              text="Request money"
              icon={
                <FontAwesome5 name="hand-holding" size={32} color="purple" />
              }
              isNew={false}
            />
          </View>

          <View className="flex-row">
            <Card
              text="Business payments"
              icon={<Entypo name="suitcase" size={32} color="purple" />}
              isNew={false}
            />
            <Card
              text="QR scanner"
              icon={
                <Ionicons name="qr-code-outline" size={32} color="purple" />
              }
              isNew={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",

    position: "relative",
  },
});
