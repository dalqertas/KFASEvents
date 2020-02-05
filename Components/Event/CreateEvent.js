import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View , Picker} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Text, Icon } from "native-base";
import styles from "./styles";

class CreateEvent extends Component {
  state = {
    title: "",
    desc: "",
    location: "",
    date: new Date('2020-06-12T14:42:42'),
    fee: "",
    max_attendees: null,
    mode: "date",
    show: false
  };
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }
  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }
  showDatepicker = () => {
    this.show('date');
  }


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
        <TextInput
          style={styles.authTextInput}
          placeholder="Event Name"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Location"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
        <View style={styles.container}>
          <TextInput
            style={styles.otherInput}
            placeholder="Date"
            placeholderTextColor="#A6AEC1"
  
            onChangeText={text => this.handleChange("title", text)}
            onPress={this.showDatepicker}
          />
          <Icon
            name="calendar"
            type="FontAwesome"
            style={styles.otherIcon}
            onPress={this.showDatepicker}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.otherInput}
            placeholder="Time"
            placeholderTextColor="#A6AEC1"
            onChangeText={text => this.handleChange("title", text)}
          />
          <Icon
            name="access-time"
            type="MaterialIcons"
            style={styles.otherIcon}
            
          />
        </View>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={text => this.handleChange("title", text)}
        />
        <TouchableOpacity style={styles.authTextBtn}>
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
        {<DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} 
                    />
        }
        
      </View>
    );
  }
}
export default CreateEvent;
