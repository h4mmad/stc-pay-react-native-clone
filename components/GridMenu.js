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
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";

import Modal from "react-native-modal";
import { useState } from "react";
import AddMoneyModal from "./AddMoneyModal";

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100%",
  },
  individualContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: dimensions.width,
    justifyContent: "center",
  },
});

const GridMenu = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <AddMoneyModal isVisible={isVisible} setIsVisible={setIsVisible} />

      <ScrollView
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <View style={styles.individualContainer}>
          <Card
            text="Add money"
            icon={<FontAwesome name="money" size={32} color="purple" />}
            isNew={false}
            onPress={() => setIsVisible(!isVisible)}
          />

          <Card
            text="Transfer to contact"
            icon={<AntDesign name="contacts" size={32} color="purple" />}
            isNew={false}
            onPress={() => navigation.navigate("Transfer to contact")}
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
            icon={
              <Ionicons name="mail-open-outline" size={32} color="purple" />
            }
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

        <View style={styles.individualContainer}>
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
            icon={<FontAwesome5 name="file-invoice" size={32} color="purple" />}
            isNew={false}
          />

          <Card
            text="Musaned salary payments"
            icon={<MaterialIcons name="payment" size={32} color="purple" />}
            isNew={false}
          />
          <Card
            text="Request money"
            icon={<FontAwesome5 name="hand-holding" size={32} color="purple" />}
            isNew={false}
          />

          <Card
            text="Business payments"
            icon={<Entypo name="suitcase" size={32} color="purple" />}
            isNew={false}
          />
          <Card
            text="QR scanner"
            icon={<Ionicons name="qr-code-outline" size={32} color="purple" />}
            isNew={false}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default GridMenu;
