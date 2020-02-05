import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text } from "native-base";


import styles from "./styles";
import authStore from "../Stores/authStore";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  handleChange = (name, text) => {
    console.log("TEXT", text);
    console.log("NAME:", name);
    this.setState({ [name]: text });
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>

          <TextInput
            style={styles.authTextInput}
            placeholder="Company Name"
            placeholderTextColor="#A6AEC1"
            onChangeText={text => this.handleChange("username", text)}
          />
        
        <TextInput
          style={styles.authTextInput}
          placeholder="Email"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("email", text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={text => this.handleChange("password", text)}
        />
        <TouchableOpacity style={styles.authButton} onPress={() => authStore.register(this.state,this.props.navigation)}>
          <Text
            style={styles.authButtonText}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <Text style={styles.authOther}>Already a user?</Text>
        <Text
          style={styles.authOther}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      </View>

    );
  }
}
Register.navigationOptions = {
  title: "Register",
  headerShown: false,
};
export default Register;
