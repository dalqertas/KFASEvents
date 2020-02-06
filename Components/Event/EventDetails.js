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
import EventStore from "../Stores/store";

const EventDetails = ({ navigation }) => {
    const event = navigation.getParam("event");

    const markEventDone = () => {
        EventStore.eventDone(event, (err) => {
            if (err) {

                return;
            }

            alert("Event successfully marked")
        });
    };

    const adminActions = () => {
        console.log('check event');
        console.log(event.id);
        return authStore.user && authStore.user.user_id === event.created_by.id ?
            <>
                <TouchableOpacity style={styles.authTextBtn} onPress={() => navigation.navigate("FeedbackListScreen", {event: event})}>
                    <Text style={styles.text}>Attendees Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authTextBtn} onPress={() => markEventDone()}>
                    <Text style={styles.text}>Mark Event Over</Text>
                </TouchableOpacity>
            </>
            :
            <TouchableOpacity style={styles.authTextBtn} onPress={() => navigation.navigate("RegisterAttendee", {eventID: event.id})}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
    };

    return (
        <Container>
            <ScrollView>
                <ImageBackground
                    source={{
                    uri:
                        "https://www.amevents.com/wp-content/uploads/2018/05/banner-1.jpg"
                    }}
                    style={{height: 500, width: null, flex: 1}}
                />

                <Text style={{fontWeight: "bold", fontSize: 20, marginHorizontal: 24, marginVertical: 16}}>{event.title}</Text>

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

                <View style={{...styles.authContainer, padding: 24, backgroundColor: "white"}}>
                    {
                        adminActions()
                    }
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
        ),
    };
};

export default EventDetails;