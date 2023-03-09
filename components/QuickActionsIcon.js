import { Text, View, TouchableOpacity } from "react-native";

const QuickActionsIcon = ({ icon, text }) => {
  return (
    <TouchableOpacity className="m-5">
      <View className="items-center justify-center">
        <View className="p-3 bg-slate-100 rounded-2xl">{icon}</View>
        <Text className="text-gray-400 mt-2 text-center">
          {text.replace(" ", "\n")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickActionsIcon;
