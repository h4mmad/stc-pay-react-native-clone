import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";

export default function Card({ text, isNew, icon, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className="flex items-center justify-center bg-white w-40 h-28 rounded-md mt-5 mx-1 relative"
        style={styles.elevation}
      >
        <View className="items-center w-3/4">
          {icon}
          <Text className="font-bold text-center mt-2">{text}</Text>
        </View>
        {isNew && (
          <Text className="absolute text-green-500 top-2 right-0 bg-green-100 px-2 py-1">
            New
          </Text>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
    shadowColor: "#171717",
  },
});
