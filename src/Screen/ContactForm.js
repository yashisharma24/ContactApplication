import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../actions/ContactAction";
import { useNavigation } from "@react-navigation/native";

const ContactForm = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const contactList = data.contacts;

  let originalContactList = contactList;
  

  const onAddContact = () => {
    var duplicateName = false;
    var duplicateNumber = false;

    const add_contact = {
      id: Math.random(),
      name: name,
      number: number,
      company: company,
      email: email,
    };

    for (let val of originalContactList) {
      if (val.name.toLowerCase() == name.toLowerCase()) duplicateName = true;
    }
    for (let val of originalContactList) {
      if (val.number == number) duplicateNumber = true;
    }
    if (duplicateName == true || duplicateNumber == true) {
      if (duplicateName) alert("contact name already exist");   
      if (duplicateNumber) alert("contact number already exist");
    } else {
      if (add_contact.number.length < 10 && add_contact.number.length > 0)
        alert("Invalid Number");
      else if (
        add_contact.name &&
        add_contact.number &&
        add_contact.number.length == 10
      ) {
        dispatch(addContact(add_contact));
        Alert.alert("Yeah!", "contact Added ", [{ text: "Ok" }]);

        navigation.navigate("HomeScreen");
      } else alert("Name and Number are mandatory");
    }
  };
  
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
      <Text
        style={{
          fontWeight: "800",
          fontSize: 20,
          color: "grey",
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        {" "}
        Add New Contact
      </Text>

      <TextInput
        style={{
          borderColor: "Tomato",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: "80%",
          borderRadius: 30,
        }}
        placeholder="Enter Name"
        maxLength={50}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={{
          borderColor: "Tomato",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: "80%",
          borderRadius: 30,
        }}
        keyboardType="numeric"
        maxLength={10}
        placeholder="Enter Number"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <TextInput
        style={{
          borderColor: "Tomato",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: "80%",
          borderRadius: 30,
        }}
        placeholder="Enter Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{
          borderColor: "Tomato",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: "80%",
          borderRadius: 30,
        }}
        placeholder="Enter Company"
        onChangeText={(text) => setCompany(text)}
        value={company}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: "80%",
          borderRadius: 30,
          alignItems: "center",
        }}
        onPress={() => onAddContact()}
      >
        <Text style={{ color: "white" }}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
