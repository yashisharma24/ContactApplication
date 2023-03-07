import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import React from 'react'
import ContactForm from './src/Screen/ContactForm'
import { Provider } from 'react-redux'
import { contactReducer } from './src/reducers/contactReducer'
import { createStore } from 'redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactDetails from './src/Screen/ContactDetails'
import HomeScreen from './src/Screen/HomeScreen'

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import EditContact from './src/Screen/EditContact'


const Stack = createStackNavigator();    

const persistConfig = {     
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);




const App = () => {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }} >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title : ' MY CONTACTS'}}
          />
          <Stack.Screen
            name="AddContact"
            component={ContactForm}
           options={{ title: ' ' }} 
          />
          <Stack.Screen
            name="EditContact"
            component={EditContact}
           options={{ title: ' ' }} 
          />
          <Stack.Screen
            name="contactDetails"
            component={ContactDetails}
           options={{ title: ' ' }} 
          />

        </Stack.Navigator>
      </NavigationContainer>
      

      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})