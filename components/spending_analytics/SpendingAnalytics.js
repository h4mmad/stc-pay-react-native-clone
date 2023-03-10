import { Text, View, StyleSheet } from "react-native";
import Nav from "./Nav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  Octicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Category from "./Category";

import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { useReducer, useState } from "react";

import { customColors } from "../../customColors";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const screens = [<Category />, <Category />, <Category />];

function reducer(state, action) {
  console.log(action.index);
  switch (action.index) {
    case 0: {
      return {
        index: 0,
      };
    }
    case 1: {
      return {
        index: 1,
      };
    }
    case 2: {
      return {
        index: 2,
      };
    }
  }
}
const styles = StyleSheet.create({
  cardElevation: {
    elevation: 5,
    backgroundColor: "white",
  },
  activeColor: {
    color: customColors.stcMain,
    fontSize: 17,
  },
  fullButton: {
    // elevation: 5,
  },
});

const SpendingAnalytics = () => {
  // const [index, setIndex] = useState(0);

  const [state, dispatch] = useReducer(reducer, { index: 0, isActive: true });
  const iconSize = 22;

  return (
    <>
      <View className="mx-6 mt-4 rounded-lg" style={styles.cardElevation}>
        <View className="flex-row justify-between items-center  border-b-2 border-gray-100 p-3">
          <Text className="font-bold text-xl">Spending analytics</Text>
          <Text className="text-lg">Details</Text>
        </View>
        <View className="m-3">
          <Text className="text-xl font-bold ">0 SAR</Text>

          <Text className="text-gray-500 ">Total spending this month</Text>
        </View>

        {screens[state?.index]}
        <View className="bg-gray-200 h-100 w-100 flex-row rounded-b-lg">
          {state?.index === 0 ? (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 0 })}>
              <View
                className="bg-white flex-row space-x-2 justify-center items-center flex-1 rounded-bl-lg"
                style={styles.fullButton}
              >
                <Feather
                  name="grid"
                  size={iconSize}
                  color={customColors.stcMain}
                />
                <Text style={styles.activeColor}>By category</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 0 })}>
              <View className="w-1/4  flex-row p-5 space-x-2 justify-center items-center">
                <Feather name="grid" size={iconSize} color="gray" />
              </View>
            </TouchableWithoutFeedback>
          )}

          {state?.index === 1 ? (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 1 })}>
              <View
                className="bg-white flex-row space-x-2 justify-center items-center flex-1"
                style={styles.fullButton}
              >
                <Octicons
                  name="meter"
                  size={iconSize}
                  color={customColors.stcMain}
                />
                <Text style={styles.activeColor}>Spend Meter</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 1 })}>
              <View className="w-1/4 flex-row p-5 space-x-2 justify-center items-center">
                <Octicons name="meter" size={iconSize} color="gray" />
              </View>
            </TouchableWithoutFeedback>
          )}

          {state?.index == 2 ? (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 2 })}>
              <View
                className="bg-white flex-row  space-x-2 justify-center items-center flex-1 rounded-br-lg"
                style={styles.fullButton}
              >
                <SimpleLineIcons
                  name="graph"
                  size={iconSize}
                  color={customColors.stcMain}
                />
                <Text style={styles.activeColor}>Money Path</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={() => dispatch({ index: 2 })}>
              <View className="w-1/4 flex-row p-5 space-x-2 justify-center items-center">
                <SimpleLineIcons name="graph" size={iconSize} color="gray" />
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
    </>
  );
};

export default SpendingAnalytics;
