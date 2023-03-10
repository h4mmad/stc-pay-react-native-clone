import { Text, View, StyleSheet, Button, Touchable } from "react-native";
import Nav from "./Nav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Category from "./Category";
import { TouchableOpacity } from "react-native-gesture-handler";
import SpendMeter from "./SpendMeter";
import { useReducer, useState } from "react";
import MoneyPath from "./MoneyPath";
import { customColors } from "../../customColors";
const styles = StyleSheet.create({
  cardElevation: {
    elevation: 10,
    backgroundColor: "white",
  },
});

const screens = [<Category />, <SpendMeter />, <MoneyPath />];

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

const SpendingAnalytics = () => {
  // const [index, setIndex] = useState(0);

  const [state, dispatch] = useReducer(reducer, { index: 0, isActive: true });

  return (
    <View className="mx-6 mt-4 rounded-md" style={styles.cardElevation}>
      <View className="flex-row justify-between items-center  border-b-2 border-gray-100 p-3">
        <Text className="font-bold text-xl">Spending analytics</Text>
        <Text className="text-lg" style={styles.text}>
          Details
        </Text>
      </View>
      <View className="m-3">
        <Text className="text-xl font-bold">0 SAR</Text>
        <Text className="text-gray-500">Total spending this month</Text>
      </View>

      {screens[state?.index]}

      <View className="bg-gray-200 w-100 h-100 flex-row space-x-15">
        {state?.index === 0 ? (
          <View className="bg-white flex-1">
            <TouchableOpacity
              className="m-2 flex-row space-x-1 items-center w-100 "
              onPress={(e) => dispatch({ index: 0 })}
              onFocus={() => {
                console.log("focused");
              }}
            >
              <Feather name="grid" size={24} color={customColors.stcMain} />
              <Text className="text-lg" style={{ color: customColors.stcMain }}>
                By category
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            className="m-2 flex-row space-x-1"
            onPress={(e) => dispatch({ index: 0 })}
            onFocus={() => {
              console.log("focused");
            }}
          >
            <Feather name="grid" size={24} color="gray" />
          </TouchableOpacity>
        )}

        {state?.index === 1 ? (
          <View className="bg-white flex-1">
            <TouchableOpacity
              className="m-2 flex-row space-x-1 items-center w-100 "
              onPress={(e) => dispatch({ index: 0 })}
              onFocus={() => {
                console.log("focused");
              }}
            >
              <Feather name="grid" size={24} color={customColors.stcMain} />
              <Text className="text-lg" style={{ color: customColors.stcMain }}>
                By category
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            className="m-2 flex-row space-x-1"
            onPress={() => dispatch({ index: 1 })}
          >
            <AntDesign name="dashboard" size={24} color="gray" />
          </TouchableOpacity>
        )}

        {state?.index === 2 ? (
          <View className="bg-white flex-1">
            <TouchableOpacity
              className="m-2 flex-row space-x-1 items-center"
              onPress={(e) => dispatch({ index: 0 })}
              onFocus={() => {
                console.log("focused");
              }}
            >
              <Feather name="grid" size={24} color={customColors.stcMain} />
              <Text className="text-lg" style={{ color: customColors.stcMain }}>
                By category
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            className="m-2 flex-row space-x-1"
            onPress={() => dispatch({ index: 2 })}
          >
            <Feather name="trending-up" size={24} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SpendingAnalytics;
