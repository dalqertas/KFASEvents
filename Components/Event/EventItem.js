import React from "react";
import { Image, ImageBackground, View, TouchableOpacity } from "react-native";
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
import { withNavigation } from "react-navigation";

const EventItem = ({ navigation, event }) => {
  const handlePress = () => navigation.navigate("EventDetailScreen", {event: event});
  return (
      <TouchableOpacity onPress={handlePress} activeOpacity={1}>
        <Card style={styles.card}>
          <CardItem cardBody>
            <ImageBackground
              source={{
                uri:
                  "https://www.amevents.com/wp-content/uploads/2018/05/banner-1.jpg"
              }}
              style={{height: 200, width: null, flex: 1}}
            >
              <Text style={styles.eventTitle}>{event.title}</Text>
            </ImageBackground>
            
          </CardItem>

          <CardItem>
            <Left style={styles.textContainer}>
              <Text style={styles.eventHeader}>Date</Text>
              <Text style={styles.eventInfo}>{`${event.date.substring(5, 7)}/${event.date.substring(8)}`}</Text>
            </Left>
            <Body style={styles.textContainer}>
              <Text style={styles.eventHeader}>Location</Text>
              <Text style={styles.eventInfo}>{event.location}</Text>
            </Body>
            <Right style={styles.textContainer}>
              <Text style={styles.eventHeader}>Price</Text>
              <Text style={styles.eventInfo}>{`${event.fee} K.D`}</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
  );
};

export default withNavigation(EventItem);
