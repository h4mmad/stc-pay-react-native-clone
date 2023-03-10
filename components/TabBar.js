import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { customColors } from "../customColors";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View className="flex-row justify-evenly items-center p-2">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let icon;
        const iconSize = 20;
        switch (route.name) {
          case "Home":
            {
              icon = (
                <Feather
                  name="grid"
                  size={iconSize}
                  color={isFocused ? customColors.stcMain : "gray"}
                />
              );
            }
            break;

          case "Cards":
            {
              icon = (
                <Feather
                  name="credit-card"
                  size={iconSize}
                  color={isFocused ? customColors.stcMain : "gray"}
                />
              );
            }
            break;

          case "Accounts": {
            icon = (
              <Feather
                name="user"
                size={iconSize}
                color={isFocused ? customColors.stcMain : "gray"}
              />
            );
            break;
          }
          case "Stores":
            {
              icon = (
                <Feather
                  name="shopping-cart"
                  size={iconSize}
                  color={isFocused ? customColors.stcMain : "gray"}
                />
              );
            }
            break;
          case "More":
            {
              icon = (
                <Feather
                  name="more-horizontal"
                  size={iconSize}
                  color={isFocused ? "purple" : "gray"}
                />
              );
            }
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex justify-center items-center px-4"
          >
            {icon}
            <Text
              className="pt-1 text-xs"
              style={{ color: isFocused ? customColors.stcMain : "#666" }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
