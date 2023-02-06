import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as SecureStore from 'expo-secure-store';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreditsScreen from './screens/CreditsScreen';
import ShipsScreen from './screens/ShipsScreen';
import LoginScreen from './screens/LoginScreen';
import { AsyncStorage } from 'react-native';
const Drawer = createDrawerNavigator();

const STORED_TOKEN_KEY = 'myStoredToken';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + result);
    return result;
  } else {
    console.log('No values stored under that key.');
    return '';
  }
}

const saveData = async (key, value) => {
  try {
    const savedData = await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('============> save data', savedData)
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('============> get data', jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
  catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const retrieveStoredToken = async () => {
      const storedToken = await getData(STORED_TOKEN_KEY);
      setUserToken(storedToken);
    };
    retrieveStoredToken();
  }, []);

  const storeUserToken = (token) => {
    setUserToken(token);
    saveData(STORED_TOKEN_KEY, token);
  };

  const logout = async () => {
    setUserToken('');
    await SecureStore.deleteItemAsync(STORED_TOKEN_KEY);
  };

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login" style={styles.container}>
          {
            userToken === '' ?
              <>
                <Drawer.Screen name="Login" component={() => <LoginScreen onLogin={storeUserToken} />} />
              </> :
              <>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Credits" component={CreditsScreen} />
                <Drawer.Screen name="Ships" component={ShipsScreen} />
                <Drawer.Screen name="Logout">
                  {() => (
                    <View style={styles.container}>
                      <Pressable onPress={logout}>
                        <Text>Logout</Text>
                      </Pressable>
                    </View>
                  )}
                </Drawer.Screen>
              </>
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

