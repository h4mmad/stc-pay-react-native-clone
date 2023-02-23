import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const EidiyaCard = ({ title, body, isNew }) => {
  return (
    <Pressable>
      <View className="mx-4 my-3 bg-white p-4 rounded-lg" style={styles.card}>
        <View className="flex-row items-center">
          <Text className="font-bold text-lg text-purple-800">{title}</Text>
          <Text className="text-orange-500 mx-2">{isNew && "New"}</Text>
        </View>

        <Text className="text-gray-400 mt-2 w-3/4">{body}</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/birthday.png")}
        />
      </View>
    </Pressable>
  );
};
export default EidiyaCard;

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    shadowColor: "#333",
  },
  image: {
    height: 80,
    width: 80,
    transform: [{ rotate: "270deg" }],
    position: "absolute",
    margin: 5,
    bottom: 0,
    right: 0,
  },
});
