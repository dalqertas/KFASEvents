import React, { Component } from "react";

// Styling Components

import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TouchableHighlight
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Text, Icon, Left, Right } from "native-base";
import styles from "./styles";
import store from "../Stores/store";

class CreateEvent extends Component {
  state = {
    title: "",
    desc: "",
    location: "",
    date: new Date("2020-06-12T14:42:42"),
    fee: "",
    time: "",
    max_attendees: null,
    mode: "date",
    show: false,
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ show: visible });
  }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date
    });
  };
  show = mode => {
    this.setState({
      show: true,
      mode
    });
  };
  showDatepicker = () => {
    this.show("date");
  };
  showTimepicker = () => {
    this.show("time");
  };
 

  handleDatePicked = date => {
    this.hideDateTimePicker(date);
    this.setDate(date);
  };

  handleChange = (name, text) => {
    console.log("TEXT", text);
    console.log("NAME:", name);
    this.setState({ [name]: text });
  };
  render() {
    const { show, date, mode } = this.state;
    console.log(date);
    console.log(show);
    return (
      <View style={styles.authContainer}>
        <ScrollView style={styles.scrollview}>
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
            onChangeText={text => this.handleChange("location", text)}
          />
          <View style={styles.container}>
            <TextInput
              style={styles.otherInput}
              placeholder="Date"
              placeholderTextColor="#A6AEC1"
              onChangeText={text => this.handleChange("date", text)}
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
              onChangeText={text => this.handleChange("time", text)}
            />
            <Icon
              name="access-time"
              type="MaterialIcons"
              style={styles.otherIcon}
              onPress={this.showTimepicker}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              flexDirection: "row"
            }}
          >
            <TextInput
              style={styles.smallInput}
              placeholder="Max Attendees"
              placeholderTextColor="#A6AEC1"
              onChangeText={text => this.handleChange("max_attendees", text)}
            />

            <TextInput
              style={styles.smallInput}
              placeholder="Fee"
              placeholderTextColor="#A6AEC1"
              onChangeText={text => this.handleChange("fee", text)}
            />
          </View>
          <TextInput
            style={styles.description}
            placeholder="Description"
            placeholderTextColor="#A6AEC1"
            onChangeText={text => this.handleChange("desc", text)}
          />
          <TouchableOpacity
            style={styles.authTextBtn}
            onPress={() =>
              store.createEvent({
                title:this.state.title,
                desc:this.state.desc,
                location:this.state.location,
                date:this.state.date,
                time:this.state.time,
                max_attendees:this.state.max_attendees,
                fee:this.state.fee
              }
              )
            }
          >
            <Text style={styles.text}>Create</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 500, height: 300 }}>
              <View>
              <DateTimePicker
              value={date}
              mode={mode}
              minimumDate={new Date()}
              is24Hour={true}
              display="default"
              onChange={this.setDate}
            />

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.show);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
export default CreateEvent;
