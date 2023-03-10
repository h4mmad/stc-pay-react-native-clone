import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { customColors } from "../../customColors";

const styles = StyleSheet.create({
  elevation: {
    elevation: 10,
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
    <View className="flex-row items-center mx-1 my-2">
      <View className="bg-gray-100 rounded-full p-3">{icon}</View>

      <View className="flex-1 m-2">
        <Text className="font-bold text-lg">{heading}</Text>
        <Text style={styles.text}>Set a budget</Text>
      </View>

      <Text className="m-2 font-bold" style={styles.balanceText}>
        0 SAR
      </Text>
    </View>
  );
};
const Category = () => {
  return (
    <View className="m-2">
      <Item
        icon={
          <SimpleLineIcons
            name="graduation"
            size={24}
            color={customColors.stcGreen}
          />
        }
        heading="Education"
      />
      <Item
        icon={
          <Feather name="thermometer" size={24} color={customColors.stcGreen} />
        }
        heading="Health"
      />
      <Item
        icon={
          <Feather
            name="shopping-cart"
            size={24}
            color={customColors.stcGreen}
          />
        }
        heading="Groceries"
      />
    </View>
  );
};

export default Category;
