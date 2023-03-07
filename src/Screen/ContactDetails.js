
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from "../actions/ContactAction";
import Communications from 'react-native-communications'







const ContactDetails = ({ route, navigation, store }) => {


    const { id, name, number, company, email } = route.params;

    

    const dispatch = useDispatch();
    
    const Number = number;

    const onDeleteContact=()=>{
        dispatch(deleteContact(Number))
        alert("Contact Deleted Successfully")
        navigation.navigate("HomeScreen");
    }

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View style={styles.skyBlue}></View>
                    <View style={styles.imageWrapper}>
                        <FontAwesome name='user' color="orange" size={160} />
                        <Text style={styles.name}>{name}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.metdataWrapper}>
                        <Text style={styles.metadata}>NUMBER</Text>
                        <Text style={styles.detailData}>{number}</Text>
                    </View>
                    <View style={styles.metdataWrapper}>
                        <Text style={styles.metadata}>EMAIL</Text>
                        <Text style={styles.detailData}>{email}</Text>
                    </View>
                    <View style={styles.metdataWrapper}>
                        <Text style={styles.metadata}>COMPANY</Text>
                        <Text style={styles.detailData}>{company}</Text>
                    </View>

                </View>
            </View>
            <View style={styles.iconStyle}>
                <IconEntypo style={{ marginLeft: 20, marginRight: 20 }}   // call it from styles
                    testID="delete"
                    name="phone"
                    size={30}
                    marginLeft={20}
                    onPress={() => Communications.phonecall(number, true)}    // TODO : calling is not working on IOS. figure out
                />
                <IconEntypo style={{ marginLeft: 20, marginRight: 20 }}
                    testID="details"
                    name="message"
                    size={30}
                    onPress={() => Communications.text(number, null)}
                />
                <IconEntypo style={{ marginLeft: 20, marginRight: 20 }}
                    testID="delete"
                    name="trash"
                    size={25}
                    onPress={() => onDeleteContact()}
                />

                 <IconEntypo style={{marginLeft: 20, marginRight:20}}
                    testID="editcontact"
                    name="pencil"
                    size={30}
                    onPress={()=>navigation.navigate('EditContact', id)}

                /> 
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop : 5
    },
    metadata: {
        fontWeight: 'bold',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        color : 'orange',
        marginRight: 20
    },
    detailData: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconStyle: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
        columnGap: '20',
        rowGap: 10,
        gap: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30



    }

});

export default ContactDetails;