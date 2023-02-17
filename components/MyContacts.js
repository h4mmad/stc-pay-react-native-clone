import { View, Text, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";
import { useEffect } from "react";

export default function MyContacts() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          const contact = data;
          console.log(contact[3]);
        }
      }
    })();
  }, []);

  return (
    <View className="mt-10 flex-1 justify-center items-center px-6 space-y-5">
      {/* Contact Card */}

      <View
        className="flex-row w-100 h-100 p-2 rounded-md bg-white"
        style={styles.cardElevation}
      >
        <View className="bg-orange-600 w-14 h-14 rounded-full flex justify-center items-center">
          <Text className="text-white text-xl">AT</Text>
        </View>
        <View className="flex-1 justify-center px-2">
          <Text className="font-bold text-lg">Aabid Travels</Text>
          <Text>+966536801714</Text>
        </View>

        <View className="flex justify-center mx-2">
          <Text className="text-purple-800 text-md font-semibold">Invite</Text>
        </View>
      </View>
      <View
        className="flex-row w-100 h-100 p-2 rounded-md bg-white"
        style={styles.cardElevation}
      >
        <View className="bg-orange-600 w-14 h-14 rounded-full flex justify-center items-center">
          <Text className="text-white text-xl">AT</Text>
        </View>
        <View className="flex-1 justify-center px-2">
          <Text className="font-bold text-lg">Aabid Travels</Text>
          <Text>+966536801714</Text>
        </View>

        <View className="flex justify-center mx-2">
          <Text className="text-purple-800 text-md font-semibold">Invite</Text>
        </View>
      </View>
      <View
        className="flex-row w-100 h-100 p-2 rounded-md bg-white"
        style={styles.cardElevation}
      >
        <View className="bg-orange-600 w-14 h-14 rounded-full flex justify-center items-center">
          <Text className="text-white text-xl">AT</Text>
        </View>
        <View className="flex-1 justify-center mx-2">
          <Text className="font-bold text-lg">Aabid Travels</Text>
          <Text>+966536801714</Text>
        </View>

        <View className="flex justify-center mx-2">
          <Text className="text-purple-800 text-md font-semibold">Invite</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardElevation: {
    elevation: 7,
  },
});
