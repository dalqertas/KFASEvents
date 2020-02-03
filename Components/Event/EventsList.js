import React, { Component } from "react";
import { Container ,Content} from "native-base";
import EventItem from "./EventItem";
import styles from "./styles";

const EventsList= () =>{
    return(
        <Content><EventItem/></Content>
    )
}
EventsList.navigationOptions={
    title: "Events"
  }
export default EventsList;