import { View, Text, StyleSheet } from "react-native";
import { customColors } from "../customColors";
import { MaterialIcons } from "@expo/vector-icons";

const VirtualCard = ({ backgroundColor }) => {
  const widthOfShape = 200;
  const styles = StyleSheet.create({
    card: {
      height: 330,
      elevation: 10,
      width: widthOfShape,
      backgroundColor,
      borderRadius: 10,
    },

    visibleRect: {
      height: 40,
      width: 150,
      zIndex: 100,
      backgroundColor: customColors.stcGray,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      position: "absolute",
      top: 30,
    },

    radioIcon: {
      position: "absolute",
      right: 10,
      top: 32,
      transform: [
        {
          rotate: "90deg",
        },
      ],
    },
    visa: {
      fontSize: 35,
      fontWeight: "bold",
      fontStyle: "italic",
      color: "white",
      position: "absolute",
      bottom: 0,
      right: 10,
    },
    stc: {
      position: "absolute",
      color: "white",
      fontWeight: "bold",
      fontSize: 40,
      left: 10,
      top: 80,
    },
    pay: {
      position: "absolute",
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      top: 85,
      left: 65,
    },
    number: {
      position: "absolute",
      color: "white",
      fontSize: 15,
      bottom: 10,
      left: 10,
    },
    chip: {
      position: "absolute",
      flexDirection: "row",
      height: 40,
      top: 30,
      left: 120,
      width: 40,
      backgroundColor: "silver",
      zIndex: 200,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.stc}>stc</Text>
      <Text style={styles.pay}>pay</Text>

      <Text style={styles.number}>5415</Text>
      <Text style={styles.visa}>VISA</Text>

      <View style={styles.visibleRect}></View>
      <View style={styles.chip} />

      <View style={styles.radioIcon}>
        <MaterialIcons name="wifi" size={32} color="white" />
      </View>
    </View>
  );
};

export default VirtualCard;
