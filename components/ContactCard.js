import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";

const ContactCard = ({ name, initials, number, propColor }) => {
  const styles = StyleSheet.create({
    cardElevation: {
      elevation: 5,
    },
    color: {
      backgroundColor: propColor,
    },
  });

  return (
    <View
      className="flex-row w-100 h-100 p-3 my-3 mx-6 rounded-md bg-white"
      style={styles.cardElevation}
    >
      <View
        className="w-11 h-11 rounded-full flex justify-center items-center"
        style={styles.color}
      >
        <Text className="text-white text-xl">{initials}</Text>
      </View>
      <View className="flex-1 justify-center px-2">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="text-gray-500">{number}</Text>
      </View>

      <TouchableOpacity className="flex justify-center mx-2">
        <Text className="text-purple-800 text-md font-semibold">Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ContactCard);
