import React from "react";
import { Image, ImageBackground, View, ScrollView, Button } from "react-native";
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
import QRScan from "../QRScan";

const EventDetails = () => {
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

                <Text style={{fontWeight: "bold", fontSize: 20, margin: 25}}>This is a title</Text>

                <Body style={{flexDirection: "row"}}>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Date</Text>
                        <Text style={styles.eventInfo}>06 Feb 9:00 PM</Text>
                    </Body>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Location</Text>
                        <Text style={styles.eventInfo}>JACC</Text>
                    </Body>
                    <Body style={styles.textContainer}>
                        <Text style={styles.eventHeader}>Price</Text>
                        <Text style={styles.eventInfo}>Free</Text>
                    </Body>
                </Body>

                <Text style={{fontSize: 15, margin: 25}}>This is a description.</Text>
                <Text style={{fontSize: 15, margin: 25}}>Organized By: </Text>
            </ScrollView>            
        </Container>
    );
};

EventDetails.navigationOptions = {
    title: "",
    headerRight: (
        <HeaderButtons />
    )
}

export default EventDetails;