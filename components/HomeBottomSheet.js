import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { customColors } from "../customColors";
import SpendingAnalytics from "./SpendingAnalytics";
import SpendingHistory from "./SpendingHistory";

const HomeBottomSheet = () => {
  const [index, setIndex] = useState(0);

  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ["20%", "90%"], []);

  const HandleComponent = () => {
    return (
      <Pressable
        onPress={() => {
          setIndex(index === 0 ? 1 : 0);
        }}
        className="w-16 h-16 rounded-full mx-auto top-1/2"
        style={[styles.indicator]}
      >
        <View className="m-auto">
          <Feather name="chevrons-up" size={32} color={customColors.stcGreen} />
        </View>
      </Pressable>
    );
  };
  const BackgroundComponent = () => {
    return <></>;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={index}
      snapPoints={snapPoints}
      detached={true}
      enableOverDrag={false}
      enablePanDownToClose={false}
      handleComponent={HandleComponent}
      backgroundComponent={BackgroundComponent}
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
          <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View>
          <View className="bg-red-500 w-32 h-32 m-2"></View>
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
});

export default HomeBottomSheet;
