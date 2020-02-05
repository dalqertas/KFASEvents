import React, { Component } from "react";
import { Container ,Content, Text} from "native-base";
import EventItem from "./EventItem";
import { observer } from "mobx-react";
import styles from "./styles";
import CreateButton from "../Buttons/CreateButton";
import store from "../Stores/store";


const EventsList= () =>{
    const events = store.events.map(event => <EventItem event={event}/>);

    return(
        <Content>
            {events}
        </Content>
    )
}
EventsList.navigationOptions={
    title: "Events",
    headerRight:()=><CreateButton/>,
  }
export default observer(EventsList);