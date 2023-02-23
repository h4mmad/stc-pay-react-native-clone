import { Text, View, TouchableOpacity } from "react-native";

const QuickActionsIcon = ({ icon, text }) => {
  return (
    <TouchableOpacity className="mx-5 my-2">
      <View className="items-center justify-center">
        <View className="p-4 bg-slate-100 rounded-2xl">{icon}</View>
        <Text className="text-gray-400 mt-2 text-center">
          {text.replace(" ", "\n")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickActionsIcon;
