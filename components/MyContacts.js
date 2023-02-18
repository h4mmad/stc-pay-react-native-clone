import { View, Text, FlatList, VirtualizedList, TextInput } from "react-native";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

export default function MyContacts() {
  const [contactState, setContactState] = useState();
  const [filteredState, setFilteredState] = useState();
  const [userInput, setUserInput] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("Reading data from contacts");
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          setContactState(data);
          setFilteredState(data);
          console.log(contact[0]);
        }
      }
    })();
  }, []);

  function checkNumberArray(obj) {
    if (Array.isArray(obj.phoneNumbers)) {
      return obj.phoneNumbers[0].number;
    } else {
      return "No number found";
    }
  }

  // this funtion takes in the person's name
  // and return the first letter of the first and last name
  // if only name is present it returns only the first letter
  function getInitials(personName) {
    let initials;

    if (personName) {
      const nameArr = personName.split(" ");

      if (nameArr.length > 1) {
        initials = nameArr[0][0] + nameArr[1][0];
      } else {
        initials = nameArr[0][0];
      }

      return initials.toUpperCase();
    } else {
      return "Name not found";
    }
  }

  function filterByName(inputText) {
    setUserInput(inputText);
    let arr = [];
    arr = contactState;
    setFilteredState(
      arr.filter((item, index) => {
        return item.name.toLowerCase().includes(inputText.toLowerCase());
      })
    );
    console.log(filteredState);
  }

  return (
    <View className="flex-1 bg-white">
      <View className="mt-12">
        <TextInput
          onChangeText={filterByName}
          className="h-9 bg-gray-100 mx-6 rounded-md"
          selectionColor="purple"
        />

        <FlatList
          data={filteredState}
          renderItem={({ item }) => (
            <ContactCard
              name={item.name}
              initials={getInitials(item.name)}
              number={checkNumberArray(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
