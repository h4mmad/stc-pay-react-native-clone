import Modal from "react-native-modal";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const AddMoneyModal = ({ isVisible, setIsVisible }) => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: "white",
      position: "absolute",
      bottom: 0,
      width: width,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 20,
    },
    modal: {
      margin: 0,
    },
    backdrop: {
      backgroundColor: "black",
      width: width,
      height: height,
      flex: 1,
      opacity: 0.5,
    },
  });

  return (
    <>
      <Modal
        useNativeDriverForBackdrop={true}
        style={styles.modal}
        isVisible={isVisible}
        hasBackdrop={true}
        onBackdropPress={() => setIsVisible(false)}
        backdropColor="black"
        backdropOpacity={0.5}
        swipeDirection={"down"}
        swipeThreshold={50}
        onSwipeComplete={() => {
          setIsVisible(false);
        }}
      >
        <View style={styles.modalContent}>
          <View className="m-5 flex space-y-5 ">
            <Text className="text-xl font-bold">
              How do you want to add money?
            </Text>
            <View className="flex-row space-x-4 items-center pb-2 border-gray-100 border-b-2">
              <AntDesign name="creditcard" size={32} color="purple" />
              <Text className="font-bold">Debit or credit card</Text>
            </View>
            <View className="flex-row space-x-4 items-center pb-2 border-gray-100 border-b-2 ">
              <MaterialCommunityIcons
                name="bank-outline"
                size={32}
                color="purple"
              />
              <Text className="font-bold">Bank transfer to stc pay</Text>
            </View>
            <View className="flex-row space-x-4 items-center pb-2 border-gray-100 border-b-2">
              <AntDesign name="download" size={32} color="purple" />
              <Text className="font-bold">SADAD - instant payments</Text>
            </View>

            <TouchableOpacity
              className="p-2 items-center"
              onPress={() => setIsVisible(false)}
            >
              <Entypo name="chevron-down" size={32} color="purple" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddMoneyModal;
