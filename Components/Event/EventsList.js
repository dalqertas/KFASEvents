import React, { Component } from "react";
import { Container ,Content, Text} from "native-base";
import EventItem from "./EventItem";
import { observer } from "mobx-react";
import styles from "./styles";
import CreateButton from "../Buttons/CreateButton";
import store from "../Stores/store";
import LoginButton from "../Buttons/LoginButton";
import { Button } from "react-native";

const EventsList= ({navigation}) =>{
    const events = store.events.map(event => <EventItem event={event} key={event.id}/>);

    return(
        <Content>
            {events}
        </Content>
    )
}

EventsList.navigationOptions=({navigation})=>{
    return {
        title: "Events",
        headerRight:()=><CreateButton navigation={navigation}/>,
        headerLeft:()=><LoginButton />
    };
  };
export default observer(EventsList);