import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { customColors } from "../customColors";
const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
    shadowColor: "#171717",
    flexDirection: "column",
  },
  cardElevation: {
    elevation: 10,
    backgroundColor: "white",
  },

  text: {
    color: customColors.stcMain,
  },
  balanceText: {},
});

const Item = ({ icon, heading }) => {
  return (
    <View className="flex-row items-center">
      <View className="bg-gray-100 rounded-full p-3">{icon}</View>

      <View className="flex-1 m-2">
        <Text className="font-bold text-lg">{heading}</Text>
        <Text style={styles.text}>Set a budget</Text>
      </View>

      <Text className="m-2 " style={styles.balanceText}>
        0 SAR
      </Text>
    </View>
  );
};

const SpendingAnalytics = () => {
  return (
    <View className="mx-6 mt-4 rounded-md" style={styles.cardElevation}>
      <View className="flex-row justify-between items-center  border-b-2 border-gray-100">
        <Text className="font-bold text-lg m-2">Spending analytics</Text>
        <Text className="m-2" style={styles.text}>
          Details
        </Text>
      </View>
      <View className="m-2">
        <Text className="">0 SAR</Text>
        <Text>Total spending this month</Text>
      </View>

      <View className="m-2">
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Home"
        />
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Health"
        />
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Education"
        />
      </View>
    </View>
  );
};

export default SpendingAnalytics;
