import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

 type CardProps = {
  text: string,
  isNew: boolean,
  icon: any,
  onPress: () => any
}

const Card  = ({ text, isNew, icon, onPress } : CardProps) =>{
  const { width, height, fontScale, scale } = useWindowDimensions();
  console.log(scale);

  const styles = StyleSheet.create({
    card: {
      // elevation: 5,
      shadowColor: "#171717",
      height: 40 * scale,
      width: width * 0.4,
      // height: 100,
      // width: 120,
    },
  });

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className="flex items-center justify-center bg-white  m-2 rounded-md relative"
        style={styles.card}
      >
        <View className="items-center">
          {icon}
          <Text className="text-center text-sm mt-2 font-semibold">{text}</Text>
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

export default Card;