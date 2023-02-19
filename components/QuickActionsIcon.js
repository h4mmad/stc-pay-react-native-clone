import { Text, View, TouchableOpacity } from "react-native";

const QuickActionsIcon = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View className="items-center justify-center mt-10">
        <View className="p-4 bg-slate-100 rounded-2xl">{icon}</View>
        <Text className="text-gray-400 mt-4">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickActionsIcon;
