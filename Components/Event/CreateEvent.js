import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

class CreateEvent extends Component {
  state = {
    title: "",
    desc: "",
    location: "",
    date: "",
    fee: "",
    max_attendees: null
  };

  handleChange = (name, text) => {
    console.log("TEXT", text);
    console.log("NAME:", name);
    this.setState({ [name]: text });
  };
  render() {
    return (
      <View style={styles.authContainer}>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
                <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
                <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
                <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
        <TouchableOpacity style={styles.authTextBtn}>
          <Text >Create</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}
export default CreateEvent;
