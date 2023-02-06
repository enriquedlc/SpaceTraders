import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-root-toast";

const LoginScreen = ({ onLogin }) => {
  const [userToken, setUserToken] = useState("");

  const tokenHandler = () => {
    if (userToken !== "") {
      onLogin(userToken);
    } else {
      Toast.show("Please enter a token", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput
        placeholder="Your token"
        onChangeText={setUserToken}
        value={userToken}
      />
      <Button title="Login" onPress={() => tokenHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
  },
});

export default LoginScreen;
