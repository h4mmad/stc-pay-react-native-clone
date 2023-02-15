import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Scroll() {
  return (
    <ScrollView style={styles.scrollView} horizontal={true}>
      <Image
        className="w-64 h-32"
        source={{
          uri: "https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      ></Image>
      <Image
        className="w-64 h-32"
        source={{
          uri: "https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      ></Image>

      <Image
        className="w-64 h-32"
        source={{
          uri: "https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      ></Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 12,
    marginHorizontal: 23,
  },
});
