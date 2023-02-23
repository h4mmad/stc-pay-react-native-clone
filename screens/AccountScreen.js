import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import {
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import QuickActionsIcon from "../components/QuickActionsIcon";

const dimensions = Dimensions.get("window");

export default function AccountScreen() {
  const styles = StyleSheet.create({
    elevation: {
      elevation: 5,
      shadowColor: "#171717",
      flexDirection: "column",
    },
    cardElevation: {
      elevation: 5,
      shadowColor: "#171717",
    },
  });

  return (
    <View className="flex-1 bg-slate-100">
      <View className="mt-12 mx-6">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-xl">Accounts</Text>
          <Text className="text-purple-900">Add a new account</Text>
        </View>

        <View
          className="w-72 h-40 bg-purple-900  mt-10 rounded-lg mr-auto ml-auto relative"
          style={styles.cardElevation}
        >
          <View className="absolute top-5 left-5 flex-row">
            <Text className="text-white text-5xl font-bold absolute ">stc</Text>
            <Text className="text-green-700 top-5 left-12 font-bold text-2xl">
              pay
            </Text>
          </View>

          <View className="top-5 right-5 absolute">
            <AntDesign name="checkcircle" size={24} color="green" />
          </View>

          <Text className="text-white absolute bottom-5 right-5 font-medium">
            MAIN ACCOUNT
          </Text>
        </View>

        <View
          className="bg-white w-100 h-100 rounded-md mt-10 pb-2"
          style={styles.elevation}
        >
          <Text className="font-bold text-lg px-4 py-4 border-b-2 border-gray-100">
            Quick actions for this account
          </Text>

          <View className="flex-row justify-center mt-4">
            <QuickActionsIcon
              icon={<FontAwesome name="money" size={24} color="purple" />}
              text="Add money"
            />

            <QuickActionsIcon
              icon={<MaterialIcons name="atm" size={24} color="purple" />}
              text="Cash withdrawal"
            />

            <QuickActionsIcon
              icon={
                <Ionicons name="qr-code-outline" size={24} color="purple" />
              }
              text="Pay with QR"
            />
          </View>

          <View className="flex-row justify-center mt-4">
            <QuickActionsIcon
              icon={<AntDesign name="book" size={24} color="purple" />}
              text="My spendings"
            />
            <QuickActionsIcon
              icon={<Feather name="info" size={24} color="purple" />}
              text="Account information"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
