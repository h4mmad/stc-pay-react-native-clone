import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <View className="flex-1 bg-slate-100">
      <View className="mt-12 mx-6">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-xl">Accounts</Text>
          <Text className="text-purple-900">Add a new account</Text>
        </View>

        <View
          className="w-72 h-44 bg-purple-900  mt-10 rounded-lg mr-auto ml-auto relative"
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

        <View className="bg-white w-100 h-100 rounded-md mt-10">
          <View>
            <Text className="font-bold text-lg px-4 py-4 border-b-2 border-gray-100">
              Quick actions for this account
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-x-3 justify-evenly">
            <TouchableOpacity>
              <View className="items-center justify-center mt-10">
                <View className="p-4 bg-slate-100 rounded-2xl">
                  <FontAwesome name="money" size={24} color="purple" />
                </View>
                <Text className="text-gray-400 mt-4">Add money</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="items-center justify-center mt-10">
                <View className="p-4 bg-slate-100 rounded-2xl">
                  <MaterialIcons name="atm" size={24} color="purple" />
                </View>
                <Text className="text-gray-400 mt-4">Cash withdrawal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="items-center justify-center mt-10">
                <View className="p-4 bg-slate-100 rounded-2xl">
                  <Ionicons name="qr-code-outline" size={24} color="purple" />
                </View>
                <Text className="text-gray-400 mt-4">Pay with QR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="items-center justify-center mt-10">
                <View className="p-4 bg-slate-100 rounded-2xl">
                  <AntDesign name="book" size={24} color="purple" />
                </View>
                <Text className="text-gray-400 mt-4">My spendings</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="items-center justify-center mt-10 mb-10 ">
                <View className="p-4 bg-slate-100 rounded-2xl">
                  <Feather name="info" size={24} color="purple" />
                </View>
                <Text className="text-gray-400 mt-4 text-center">
                  Account {"\n"} information
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elevation: {
    elevation: 10,
    shadowColor: "#171717",
  },
  cardElevation: {
    elevation: 15,
    shadowColor: "#171717",
  },
});
