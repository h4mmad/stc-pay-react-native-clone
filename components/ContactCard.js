import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ContactCard({ name, initials, number }) {
  return (
    <View
      className="flex-row w-100 h-100 p-3 my-3 mx-6 rounded-md bg-white"
      style={styles.cardElevation}
    >
      <View className="bg-purple-600 w-12 h-12 rounded-full flex justify-center items-center">
        <Text className="text-white text-xl">{initials}</Text>
      </View>
      <View className="flex-1 justify-center px-2 space-y-2">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="text-gray-500">{number}</Text>
      </View>

      <TouchableOpacity className="flex justify-center mx-2">
        <Text className="text-purple-800 text-md font-semibold">Invite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardElevation: {
    elevation: 5,
  },
});
