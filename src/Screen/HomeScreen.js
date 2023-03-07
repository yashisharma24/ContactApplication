import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import IconEntypo from 'react-native-vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { deleteContact } from '../actions/ContactAction';
import Communications from 'react-native-communications'

// TODO : Search Component and Flatlist Component 

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [input, SetInput] = useState("");

    const data = useSelector(state => state.contacts);
    

    const sortedContactList = data.sort((a, b) => a.name.localeCompare(b.name));
    //console.log(sortedContactList)


    return (

        <View style={{ flex: 1 }}>
            <View style={{

                width: '95%',
                padding: 4,
                margin: 10,
                borderRadius: 30,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',


            }}>

                <FontAwesome name='search' color='orange' size={20} style={{ marginLeft: 1, marginRight: 7 }} />
                <TextInput


                    placeholder="Search here" style={{ fontSize: 15, width: '85%', borderColor: 'white' }}
                    value={input} onChangeText={(text) => SetInput(text)}

                />
            </View>

            <FlatList
                data={sortedContactList}
                keyExtractor={item => item.number}


                renderItem={({ item }) => {
                    if (input === "") {


                        return (<View style={styles.card}>

                            <View style={styles.contactDetails}>

                                <FontAwesome name='user' color="orange" size={30} />

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('contactDetails', item)
                                }>

                                    <Text style={styles.contactName} > {item.name.slice(0, 20)}</Text>
                                    <Text style={styles.contactNumber}> {item.number}</Text>

                                </TouchableOpacity>



                            </View>
                            <View style={styles.iconStyle}>

                                <IconEntypo style={{ marginRight: 20 }}
                                    testID="details"
                                    name="phone"
                                    size={20}
                                    onPress={() => Communications.phonecall(item.number, true)}
                                />
                                <IconEntypo
                                    testID="delete"
                                    name="trash"
                                    size={20}
                                    onPress={() => {
                                        dispatch(deleteContact(item.number))
                                        alert("Contact Deleted Successfully")
                                        navigation.navigate("HomeScreen");
                                    }}
                                />

                            </View>
                        </View>
                        );
                    }

                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                        return (<View style={styles.card}>

                            <View style={styles.contactDetails}>

                                <FontAwesome name='user' color="orange" size={30} />

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('contactDetails', item)
                                }>

                                    <Text style={styles.contactName} > {item.name.slice(0, 20)}</Text>
                                    <Text style={styles.contactNumber}> {item.number}</Text>

                                </TouchableOpacity>



                            </View>
                            <View style={styles.iconStyle}>

                                <IconEntypo style={{ marginRight: 20 }}
                                    testID="details"
                                    name="phone"
                                    size={20}
                                    onPress={() => Communications.phonecall(item.number, true)}
                                />
                                <IconEntypo
                                    testID="delete"
                                    name="trash"
                                    size={20}
                                    onPress={() => {
                                        dispatch(deleteContact(item.number))
                                        alert("Contact Deleted Successfully")
                                        navigation.navigate("Contacts");
                                    }}
                                />

                            </View>
                        </View>
                        );
                    }

                }} />


            <TouchableOpacity
                style={{
                    backgroundColor: "orange",
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "orange",

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
        padding: 5,
        alignItems: 'center',
        marginBottom: .5,
        flexDirection: 'row'
    },
    contactDetails: {
        flexDirection: 'row',
        flex: 1,
        padding: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'orange'

    },
    contactName: {
        fontWeight: '600',
        fontSize: 18,
        color: '147f79',
        marginLeft: 10
    },
    contactNumber: {
        color: "black",
        marginLeft: 10
    },
    iconStyle: {
        flexDirection: 'row',

        justifyContent: 'center',


        columnGap: 20,
        marginTop: 10,
        padding: 7,





    }

})