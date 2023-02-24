import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const BottomHomeView = () => {
  // hooks
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["15%", "50%"], []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      style={{ backgroundColor: "red" }}
      handleIndicatorStyle={styles.indicatorStyle}
      handleStyle={styles.handleStyle}
      enableOverDrag={false}
    >
      <BottomSheetScrollView
        style={{ backgroundColor: "red" }}
        showsVerticalScrollIndicator={false}
      ></BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "red",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  indicatorStyle: {
    backgroundColor: "white",
    opacity: 1,
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    top: -20,
  },
  handleStyle: {
    backgroundColor: "blue",
  },
});

export default BottomHomeView;
