import React from "react";
import { Text, View, TouchableOpacity,FlatList,StyleSheet,PixelRatio} from "react-native";
import Communications from "react-native-communications";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import IconEntypo from 'react-native-vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';
import { deleteContact } from '../actions/ContactAction';

const ContactList = ({input,data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  

  return (
    <View style={{flex:1}}>
      <FlatList
                data={data}
                keyExtractor={item => item.number}


                renderItem={({ item }) => {
                    if (input === "") {


                        return (<View style={styles.card}>

                            <View style={styles.contactDetails}>

                                <FontAwesome name='user' color="orange" size={30* PixelRatio.getFontScale()} style={{padding:5}} />

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('contactDetails', item)
                                }>

                                    <Text style={styles.contactName} > {item.firstName.slice(0, 15)} {item.lastName}</Text>
                                    <Text style={styles.contactNumber}> {item.number}</Text>

                                </TouchableOpacity>



                            </View>
                            <View style={styles.iconStyle}>

                            <FontAwesome 
                            name='phone' 
                            size={20* PixelRatio.getFontScale()} 
                            style={{ marginRight: 20 }} 
                            onPress={() => Communications.phonecall(item.number, true)}/>

                                <IconEntypo
                                    testID="delete"
                                    name="trash"
                                    size={20* PixelRatio.getFontScale()}
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

                    if (item.firstName.toLowerCase().includes(input.toLowerCase()) || item.lastName.toLowerCase().includes(input.toLowerCase())) {
                        return (<View style={styles.card}>

                            <View style={styles.contactDetails}>

                                <FontAwesome name='user' color="orange" size={30} />

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('contactDetails', item)
                                }>

                                    <Text style={styles.contactName} > {item.firstName.slice(0, 15)} {item.lastName}</Text>
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

    </View>
  );
};
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
      //flex:1,
      padding: 3,
      borderRadius: 6,
      borderColor: 'orange', 
      width:'80%'
      

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

export default ContactList;
