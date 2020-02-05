import React from "react";
import { Image, ImageBackground, View, ScrollView, Button, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right
} from "native-base";
import styles from "./styles";
import HeaderButtons from "../Buttons/HeaderButtons";
import authStore from "../Stores/authStore";

const EventDetails = ({ navigation }) => {
    const event = navigation.getParam("event");

    return (
        <Container>
            <ScrollView>
                <ImageBackground
                    source={{
                    uri:
                        "https://www.amevents.com/wp-content/uploads/2018/05/banner-1.jpg"
                    }}
                    style={{height: 500, width: null, flex: 1}}
                ></ImageBackground>

                <Text style={{fontWeight: "bold", fontSize: 20, margin: 25}}>{event.title}</Text>

                <Body style={{flexDirection: "row"}}>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Date</Text>
                        <Text style={styles.eventInfo}>{`${event.date.substring(5, 7)}/${event.date.substring(8)}`}</Text>
                    </Body>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Location</Text>
                        <Text style={styles.eventInfo}>{event.location}</Text>
                    </Body>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Price</Text>
                        <Text style={styles.eventInfo}>{`${event.fee} K.D`}</Text>
                    </Body>
                </Body>

                <Text style={{fontSize: 15, margin: 25}}>{event.desc}</Text>
                <Text style={{fontSize: 15, margin: 25}}>Organized By: {event.created_by.username}</Text>

                <View style={{...styles.authContainer, backgroundColor: "white"}}>
                    {authStore.user == null && <TouchableOpacity style={styles.authTextBtn} onPress={() => navigation.navigate("RegisterAttendee", {eventID: event.id})}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>}
                </View>
            </ScrollView>            
        </Container>
    );
};

EventDetails.navigationOptions = ({ navigation }) => {
    return {
        title: "",
        headerRight: (
            <HeaderButtons event={navigation.getParam("event")}/>
        )
    };
}

export default EventDetails;