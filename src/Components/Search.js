import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,PixelRatio} from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Search = (props) => {

  return (
    <View style={{

        width: '95%',
        padding: 5,
        margin: 10,
        borderRadius: 30,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',


    }}>

        <FontAwesome name='search' color='orange' size={20} style={{ marginLeft: 1, marginRight: 7 }} />
        <TextInput


            placeholder="Search here" style={{ fontSize: 15, width: '85%', borderColor: 'white' }}
            value={props.input} onChangeText={(text) => props.setInput(text)}

        />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})