import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../actions/ContactAction";
import { useNavigation } from "@react-navigation/native";

//TODO : same Component for EDIT and ADD

const EditContact = ({ route }) => {
  const navigation = useNavigation();

  const contacts = useSelector((state) => state.contacts);

  const currentContact = contacts.find(
    (contact) => contact.id === route.params
  );

  useEffect(() => {
    setName(currentContact.name);
    setNumber(currentContact.number);
    setEmail(currentContact.email);
    setCompany(currentContact.company);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const onEditContact = () => {
    const edit_contact = {
      id: route.params,
      name: name,
      number: number,
      company: company,
      email: email,
    };
    

    if (edit_contact.number.length < 10) alert("Invalid Number");
    else if (
      edit_contact.name &&
      edit_contact.number &&
      edit_contact.number.length == 10
    ) {
      dispatch(updateContact(edit_contact));
      Alert.alert("Yeah!", "contact Updated ", [{ text: "Ok" }]);

      navigation.navigate("HomeScreen");
    } else alert("All Fields are Required");
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
        Edit Contact
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
        onPress={() => onEditContact()}
      >
        <Text style={{ color: "white" }}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditContact;
