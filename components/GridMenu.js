import Card from "../components/Card";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import { useState } from "react";
import AddMoneyModal from "./AddMoneyModal";
import EidiyaModal from "./EidiyaModal";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { customColors } from "../customColors";

const GridMenu = ({ navigation }) => {
  const { width, height, fontScale, scale } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    individualContainer: {
      flexWrap: "wrap",
      flexDirection: "row",
      width,
      justifyContent: "center",
    },
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEidiyaModal, setIsVisibleEidiyaModal] = useState(false);
  const translateX = useSharedValue(0);
  const index = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    if (event.contentOffset.x % width === 0) {
      index.value = event.contentOffset.x / width;
    }
    console.log(event.contentOffset.x);
    translateX.value = event.contentOffset.x;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      translateX.value,
      [
        width * (index.value - 1),
        width * index.value,
        width * (index.value + 1),
      ],
      [0.9, 1, 0.9],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          scale: withSpring(interpolatedScale, {
            damping: 30,
            mass: 0.5,
          }),
        },
      ],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const interPolateX = interpolate(
      translateX.value,
      [0, 384],
      [0, 16],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          translateX: interPolateX,
        },
      ],
    };
  });

  return (
    <>
      <AddMoneyModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <EidiyaModal
        isVisibleEidiyaModal={isVisibleEidiyaModal}
        setIsVisibleEidiyaModal={setIsVisibleEidiyaModal}
      />
      <View>
        <Animated.ScrollView
          onScroll={scrollHandler}
          contentContainerStyle={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          <View style={styles.individualContainer}>
            <Card
              text="Add money"
              icon={
                <Feather name="plus" size={32} color={customColors.stcMain} />
              }
              isNew={false}
              onPress={() => setIsVisible(true)}
            />

            <Card
              text="Transfer to contact"
              icon={
                <Feather name="user" size={32} color={customColors.stcMain} />
              }
              isNew={false}
              onPress={() => navigation.navigate("Transfer to contact")}
            />

            <Card
              text="Riyadh season"
              icon={
                <MaterialCommunityIcons
                  name="office-building-outline"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={true}
            />

            <Card
              text="Qattah (money split)"
              icon={
                <Feather
                  name="columns"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />
            <Card
              text="International transfer"
              icon={
                <Feather name="globe" size={32} color={customColors.stcMain} />
              }
              isNew={false}
            />
            <Card
              text="Local bank transfer"
              icon={
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            ></Card>
          </View>

          <View style={styles.individualContainer}>
            <Card
              text="stc bills & sawa"
              icon={
                <FontAwesome5
                  name="file-invoice"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />

            <Card
              text="Musaned salary payments"
              icon={
                <MaterialIcons
                  name="payment"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />
            <Card
              text="Request money"
              icon={
                <FontAwesome5
                  name="hand-holding"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />

            <Card
              text="Business payments"
              icon={
                <Entypo
                  name="suitcase"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />
            <Card
              text="QR scanner"
              icon={
                <Ionicons
                  name="qr-code-outline"
                  size={32}
                  color={customColors.stcMain}
                />
              }
              isNew={false}
            />
          </View>
        </Animated.ScrollView>
      </View>
      <View className="flex-row  justify-center mt-3">
        <View className="flex-row">
          <Animated.View
            className="w-2 h-2 rounded-full absolute left-0 m-1"
            style={[{ backgroundColor: customColors.stcMain }, indicatorStyle]}
          ></Animated.View>
          <View className="w-2 h-2 rounded-full bg-gray-300 m-1 -z-10"></View>
          <View className="w-2 h-2 rounded-full bg-gray-300 m-1 -z-10"></View>
        </View>
      </View>
    </>
  );
};
export default GridMenu;
