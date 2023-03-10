import { Text, View } from "react-native";

const Nav = ({ index, isActive }) => {
  return (
    <View className="bg-white w-100 h-100 flex-row ">
      <View className="m-3">
        <Text>By category</Text>
      </View>
      <View className="m-3">
        <Text>By category</Text>
      </View>
      <View className="m-3">
        <Text>By category</Text>
      </View>
    </View>
  );
};
export default Nav;
