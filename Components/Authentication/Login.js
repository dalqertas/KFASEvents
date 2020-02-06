import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";
import authStore from "../Stores/authStore";


class Login extends Component {
  state ={
    username: "",
    password: ""
  }
  handleChange = (name,text) => {
    console.log("TEXT",text)
    console.log("NAME:",name)
    this.setState({[name]:text})
  }
  render() {
    const {navigation}=this.props;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={(text) =>this.handleChange('username',text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={(text) =>this.handleChange('password',text)}
        />
        <TouchableOpacity style={styles.authButton} onPress={() =>authStore.login(this.state,this.props.navigation)}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.authOther} onPress= {() => navigation.navigate("RegisterScreen")}>Click here to register!</Text>
        <Text style={styles.authOther} onPress= {() => navigation.navigate("userStackNav")}>Back to events list</Text>
      </View>
    );
  }
}
Login.navigationOptions={
  title:"Login",
  headerShown: false,
}
export default Login;