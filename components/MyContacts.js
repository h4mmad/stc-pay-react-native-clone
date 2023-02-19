import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";
import { useEffect, useState, memo } from "react";
import ContactCard from "./ContactCard";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MyContacts() {
  const [contactState, setContactState] = useState();
  const [filteredState, setFilteredState] = useState();
  const colorsObj = {
    A: "coral",
    B: "dodgerblue",
    C: "darkcyan",
    D: "dodgerblue",
    E: "purple",
    F: "dodgerblue",
    G: "green",
    H: "purple",
    I: "orange",
    J: "dodgerblue",
    K: "darkseagreen",
    L: "purple",
    M: "orange",
    N: "dodgerblue",
    O: "green",
    P: "purple",
    Q: "orange",
    R: "dodgerblue",
    S: "green",
    T: "purple",
    U: "orange",
    V: "blue",
    W: "lightseagreen",
    X: "purple",
    Y: "orange",
    Z: "dodgerblue",
  };

  useEffect(() => {
    (async () => {
      console.log("Reading data from contacts");
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContactState(data);
          setFilteredState(data);
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
    console.log(inputText);
    let arr = contactState;
    setFilteredState(
      arr.filter((item, index) => {
        return item.name.toLowerCase().includes(inputText.toLowerCase());
      })
    );
  }

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function checkColor(personName) {
    let nameArr;
    let firstLetter;

    if (personName) {
      nameArr = personName.split(" ");
      firstLetter = nameArr[0][0].toUpperCase();

      if (firstLetter in colorsObj) {
        return colorsObj[firstLetter];
      } else {
        return "gray";
      }
    }
  }

  return (
    <View className="flex-1 bg-slate-100">
      <View className="mt-12">
        <View className="px-6">
          <View
            className="flex-row bg-gray-100 items-center rounded-md px-2"
            style={styles.elevation}
          >
            <FontAwesome name="search" size={24} color="gray" />
            <TextInput
              onChangeText={debounce(filterByName)}
              className="p-2 text-lg flex-1 h-12"
              selectionColor="purple"
              placeholder="Search by name"
            />
            <TouchableOpacity>
              <Ionicons name="qr-code-outline" size={30} color="purple" />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.flatList}
          data={filteredState}
          renderItem={({ item }) => (
            <ContactCard
              name={item.name}
              initials={getInitials(item.name)}
              number={checkNumberArray(item)}
              propColor={checkColor(item.name)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
  },
  flatList: {
    paddingBottom: 50,
  },
});
