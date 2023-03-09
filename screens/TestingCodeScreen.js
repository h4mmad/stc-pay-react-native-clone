import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const MIN_TRANSLATE_Y = -SCREEN_HEIGHT / 5;
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;
const INDICATOR_SIZE = 62;

const styles = StyleSheet.create({
  bottomSheet: {
    width: "100%",
    height: SCREEN_HEIGHT,
    top: SCREEN_HEIGHT,
    backgroundColor: "white",
    position: "relative",
  },
  bottomSheetIndicator: {
    backgroundColor: "white",
    elevation: 5,
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: 100,
    alignSelf: "center",
    top: -INDICATOR_SIZE / 2,
    position: "absolute",
  },
});

const TestingCodeScreen = () => {
  const translationY = useSharedValue(0);
  const context = useSharedValue(0);
  const borderRadius = useSharedValue(25);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = translationY.value;
    })
    .onUpdate((event) => {
      if (event.translationY + context.value < MIN_TRANSLATE_Y) {
        translationY.value = event.translationY + context.value;
        translationY.value = Math.max(MAX_TRANSLATE_Y, translationY.value);
      }
      console.log(translationY.value);
    })
    .onEnd((event) => {
      if (translationY.value > MAX_TRANSLATE_Y && event.velocityY > 0) {
        translationY.value = withSpring(MIN_TRANSLATE_Y, {
          damping: 30,
        });
      } else {
        translationY.value = withSpring(MAX_TRANSLATE_Y, {
          damping: 30,
        });
      }

      if (translationY.value < MIN_TRANSLATE_Y && event.velocityY - 30 < 0) {
        console.log(MIN_TRANSLATE_Y - 200);
        translationY.value = withSpring(MAX_TRANSLATE_Y, { damping: 30 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: borderRadius.value,
      transform: [
        {
          translateY: translationY.value,
        },
      ],
    };
  });

  useEffect(() => {
    translationY.value = withSpring(MIN_TRANSLATE_Y, { damping: 30 });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          <Animated.View style={[styles.bottomSheetIndicator]} />

          <Animated.ScrollView disableScrollViewPanResponder>
            {Array(40)
              .fill(0)
              .map((item, index) => {
                return (
                  <Animated.View
                    className="w-12 h-12 bg-red-600 m-5"
                    key={index}
                  />
                );
              })}
          </Animated.ScrollView>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default TestingCodeScreen;
