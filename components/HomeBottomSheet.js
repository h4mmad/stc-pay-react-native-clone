import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import { StyleSheet, View, Pressable } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { customColors } from "../customColors";
import SpendingAnalytics from "./SpendingAnalytics";
import SpendingHistory from "./SpendingHistory";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const HomeBottomSheet = () => {
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ["20%", "90%"], []);

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotation.value.toString() + "deg" }],
    };
  });

  const [bottomSheetPosition, setBottomSheetPosition] = useState();

  const handlePress = () => {
    if (bottomSheetPosition === 0) {
      bottomSheetRef.current.snapToIndex(1);
    }
    if (bottomSheetPosition === 1) {
      bottomSheetRef.current.snapToIndex(0);
    }
  };

  const HandleComponent = () => {
    return (
      <Pressable
        onPress={handlePress}
        className="w-16 h-16 rounded-full mx-auto top-1/2"
        style={[styles.indicator]}
      >
        <Animated.View style={[styles.indicatorView, animatedStyle]}>
          <Feather name="chevrons-up" size={32} color={customColors.stcGreen} />
        </Animated.View>
      </Pressable>
    );
  };
  const BackgroundComponent = () => {
    return <></>;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={bottomSheetPosition}
      snapPoints={snapPoints}
      detached={true}
      enableOverDrag={false}
      enablePanDownToClose={false}
      handleComponent={HandleComponent}
      backgroundComponent={BackgroundComponent}
      onAnimate={(fromIndex, toIndex) => {
        if (toIndex === 1) {
          rotation.value = withTiming(180, 3000);
        } else {
          rotation.value = withTiming(0, 3000);
        }
      }}
      onChange={(index) => {
        setBottomSheetPosition(index);

        if (index === 0) {
          rotation.value = withTiming(0, 3000);
        }
        if (index === 1) {
          rotation.value = withTiming(180, 3000);
        }
      }}
    >
      <BottomSheetScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          style={{ paddingTop: 40 }}
          showsHorizontalScrollIndicator={false}
        >
          {/* <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View> */}
        </ScrollView>

        <SpendingAnalytics />
        <SpendingHistory />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    paddingBottom: 10,
  },
  indicator: {
    backgroundColor: "white",
    elevation: 5,
  },
  indicatorView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeBottomSheet;
