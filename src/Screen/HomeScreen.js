import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,PixelRatio } from 'react-native'
import React, { useState } from 'react'
import IconEntypo from 'react-native-vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { deleteContact } from '../actions/ContactAction';
import Communications from 'react-native-communications'
import Search from '../Components/Search';
import ContactList from '../Components/ContactList';
import Form from '../Components/Form';



const HomeScreen = () => {
    const navigation = useNavigation();   
    const dispatch = useDispatch();
    const [input, SetInput] = useState("");

    const contactList=useSelector(state => state.contacts);
 

    const sortedContactList = contactList.sort((a, b) => a.firstName.localeCompare(b.firstName));
  


    return (

        <View style={{ flex: 1 }}>

            <Search input={input} setInput={SetInput}/>
            <ContactList input={input} data={sortedContactList}/>

            <TouchableOpacity
                style={{
                    backgroundColor: "orange",
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "orange",
                    marginTop:8,
                    width: "100%",
                    alignItems: 'center',

                }}

                onPress={() => navigation.navigate('AddContact')}


            >

                <Text style={{ color: 'white', fontWeight: "600" }}> ADD CONTACT </Text>

            </TouchableOpacity>

        </View>



    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:
    {

        padding: 2,
        marginBottom: 5,
    },

    card: {

        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        marginBottom: .5,
        flexDirection: 'row'
    },
    contactDetails: {
        flexDirection: 'row',
        
        padding: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'orange', 
        flex:1
        

    },
    contactName: {
        fontWeight: '600',
        fontSize: 18,
        color: '147f79',
        marginLeft: 5,
        padding : 2
    },
    contactNumber: {
        color: "black",
        marginLeft: 5,
        padding: 2
    },
    iconStyle: {
        flexDirection: 'row',

        justifyContent: 'center',


        columnGap: 20,
        marginTop: 10,
        padding: 7,





    }

})