import React from "react";
import { Image, ImageBackground, View } from "react-native";
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

const EventItem = () => {
  //const handlePress = () => navigation.navigate("EventDetailScreen", { eventId: event.id});
  return (
      <Card style={styles.card}>
        <CardItem cardBody>
          <ImageBackground
            source={{
              uri:
                "https://www.amevents.com/wp-content/uploads/2018/05/banner-1.jpg"
            }}
            style={{height: 200, width: null, flex: 1}}
          ></ImageBackground>
        </CardItem>

        <CardItem>
          <Left style={styles.textContainer}>
            <Text style={styles.eventHeader}>Date</Text>
            <Text style={styles.eventInfo}>06 Feb 9:00 PM</Text>
          </Left>
          <Body style={styles.textContainer}>
            <Text style={styles.eventHeader}>Location</Text>
            <Text style={styles.eventInfo}>JACC</Text>
          </Body>
          <Right style={styles.textContainer}>
            <Text style={styles.eventHeader}>Price</Text>
            <Text style={styles.eventInfo}>Free</Text>
          </Right>
        </CardItem>
      </Card>
  );
};
export default EventItem;
