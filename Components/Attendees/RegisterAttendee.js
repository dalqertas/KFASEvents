import React, { Component } from "react";

// Styling Components

import { TextInput, TouchableOpacity, View , ScrollView} from "react-native";

import { Text } from "native-base";
import styles from "../Event/styles";
import store from "../Stores/store";

class RegisterAttendee extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
  };

  handleChange = (name, text) => {
    console.log("TEXT", text);
    console.log("NAME:", name);
    this.setState({ [name]: text });
  };
  render() {
    const { show, date, mode } = this.state;
    console.log(date);
    console.log(show)
    return (
      
      <View style={styles.authContainer}>
      <ScrollView style={{alignSelf:"stretch"}}>
        <TextInput
          style={styles.authTextInput}
          placeholder="First Name"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("first_name", text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Last Name"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("last_name", text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Email"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("email", text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Phone Number"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("phone", text)}
        />
        <TouchableOpacity style={styles.authTextBtn} onPress={() => store.registerAttendee(this.state, this.props.navigation.getParam("eventID"))}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default RegisterAttendee;
