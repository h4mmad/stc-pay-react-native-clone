import { View, Text, Button, TouchableOpacity } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

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
        if (route.name === "Home") {
          icon = (
            <AntDesign
              name="appstore-o"
              size={iconSize}
              color={isFocused ? "purple" : "gray"}
            />
          );
        } else if (route.name === "Cards") {
          icon = (
            <AntDesign
              name="creditcard"
              size={iconSize}
              color={isFocused ? "purple" : "gray"}
            />
          );
        } else if (route.name === "Accounts") {
          icon = (
            <AntDesign
              name="wallet"
              size={iconSize}
              color={isFocused ? "purple" : "gray"}
            />
          );
        } else if (route.name === "Stores") {
          icon = (
            <MaterialIcons
              name="storefront"
              size={iconSize}
              color={isFocused ? "purple" : "gray"}
            />
          );
        } else if (route.name === "More") {
          icon = (
            <Feather
              name="more-horizontal"
              size={iconSize}
              color={isFocused ? "purple" : "gray"}
            />
          );
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
              className="pt-1"
              style={{ color: isFocused ? "purple" : "#222" }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
