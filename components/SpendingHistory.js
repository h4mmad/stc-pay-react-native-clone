import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  cardElevation: {
    elevation: 10,
    backgroundColor: "white",
  },

  balanceText: {},
});

const Item = ({ icon, heading, subHeading }) => {
  return (
    <View className="flex-row items-center">
      <View className="bg-gray-100 rounded-full p-3">{icon}</View>

      <View className="flex-1 m-2">
        <Text className="text-lg">{heading}</Text>
        <Text className="text-sm text-gray-400">{subHeading}</Text>
      </View>

      <Text className="m-2 " style={styles.balanceText}>
        0 SAR
      </Text>
    </View>
  );
};

const SpendingHistory = () => {
  return (
    <View className="mx-6 mt-12 rounded-md mb-12" style={styles.cardElevation}>
      <View className="flex-row justify-between items-center  border-b-2 border-gray-100">
        <Text className="font-bold text-lg m-2">Spending history</Text>
      </View>

      <View className="m-2">
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Mohammed Abdul Sattar"
          subHeading="Local Transfer"
        />
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Card Topup"
          subHeading="Card Deposit"
        />
        <Item
          icon={<AntDesign name="home" size={24} color="purple" />}
          heading="Education"
        />
      </View>
    </View>
  );
};
export default SpendingHistory;
