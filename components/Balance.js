import { Text, useWindowDimensions, View, StyleSheet } from "react-native";

export default function Balance({}) {
  const { width, height, fontScale, scale } = useWindowDimensions();

  const styles = StyleSheet.create({
    view: {
      marginTop: 20,
      marginBottom: height * 0.01,
    },
  });
  console.log(fontScale);
  return (
    <View className="flex-col items-center" style={styles.view}>
      <Text className="text-gray-400">Current balance</Text>

      <View className="flex-row  items-center justify-center">
        <Text style={{ fontSize: 15 }}>SAR </Text>
        <Text className="text-4xl font-bold items-baseline">90</Text>
        <Text className="text-xl">.85</Text>
      </View>
    </View>
  );
}
