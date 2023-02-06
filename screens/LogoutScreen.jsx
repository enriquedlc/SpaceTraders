import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as SecureStore from "expo-secure-store";

const STORED_TOKEN_KEY = "myStoredToken";

const LogoutScreen = ({ onLogout }) => {
  const logoutHandler = () => {
    SecureStore.deleteItemAsync(STORED);
    onLogout();
  };

  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>
      <Pressable style={styles.logoutButton} onPress={() => logoutHandler()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default LogoutScreen;
