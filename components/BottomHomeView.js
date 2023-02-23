import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useState } from "react";

const BottomHomeView = () => {
  const [y, setY] = useState(0);
  const containerHeight = 500;

  const styles = StyleSheet.create({
    view: {
      height: containerHeight,
      transform: [{ translateY: y }],
    },
  });

  return (
    <View className="bg-pink-300  left-100" style={styles.view}>
      <Button
        title="go up"
        onPress={() => {
          setY(y <= -190 ? y : y - 320);
        }}
      />
      <Button
        title="go down"
        onPress={() => {
          setY(y === -190 ? y + 200 : 10);
        }}
      />
      <ScrollView>
        {Array(40)
          .fill(1)
          .map((item, index) => (
            <Text key={index}>{index}</Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default BottomHomeView;
