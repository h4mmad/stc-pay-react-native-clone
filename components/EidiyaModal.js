import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import EidiyaCard from "./EidiyaCard";

const EidiyaModal = ({ isVisibleEidiyaModal, setIsVisibleEidiyaModal }) => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    modalContent: {
      position: "absolute",
      bottom: 0,
      width: width,
      paddingBottom: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modal: {
      margin: 0,
    },
  });

  return (
    <Modal
      useNativeDriverForBackdrop={true}
      style={styles.modal}
      isVisible={isVisibleEidiyaModal}
      hasBackdrop={true}
      onBackdropPress={() => setIsVisibleEidiyaModal(!isVisibleEidiyaModal)}
      backdropColor="black"
      backdropOpacity={0.5}
      swipeDirection={"down"}
      swipeThreshold={100}
      onSwipeComplete={() => {
        setIsVisibleEidiyaModal(!isVisibleEidiyaModal);
      }}
    >
      <View style={styles.modalContent} className="bg-white">
        <View className="bg-gray-300 h-1 w-32 mx-auto rounded-full mb-5 mt-2"></View>

        <Text className="font-bold text-xl mx-4 mb-2">
          Select the Eidiya option:
        </Text>
        <EidiyaCard
          isNew={true}
          title="Catching Eidiya"
          body="Surprise your loved ones in Catching Eidiya game and see who catches the biggest amount!"
        />
        <EidiyaCard
          isNew={false}
          title="Eidiya"
          body="Send Eidiya to your loved ones and they'll receive it on their stc pay accounts in seconds!"
        />

        <EidiyaCard
          isNew={false}
          title="fun market gift cards"
          body="Surprise your loved ones with an entertainment gift card from stc pay fun market!"
        />
      </View>
    </Modal>
  );
};
export default EidiyaModal;
