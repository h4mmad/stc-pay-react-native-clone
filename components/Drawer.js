import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Drawer() {
  return (
    <BottomDrawer>
      <View>
        <Text>Hello</Text>
      </View>
    </BottomDrawer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 12,
    marginHorizontal: 23,
  },
});
