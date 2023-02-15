import { Text, View } from "react-native";

export default function Balance({}) {
  return (
    <View className="flex-col items-center mt-5">
      <Text className="text-gray-400">Current balance</Text>
      <View className="flex-row  items-center justify-center">
        <Text className="text-lg">SAR </Text>
        <Text className="text-4xl font-bold items-baseline">90</Text>
        <Text className="text-xl">.85</Text>
      </View>
    </View>
  );
}
