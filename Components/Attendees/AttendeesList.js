import React from "react";
import { View, Text } from "react-native";
import AttendeeItem from "./AttendeeItem";
import { observer } from "mobx-react";
import store from "../Stores/store";
import { List } from "native-base";

const AttendeesList = ({ navigation }) => {
    const event = navigation.getParam("event");
    let attendees = [];

    store.getAttendees(event.id).then(() => {
        attendees = store.attendees[event.id].map(itm => <AttendeeItem attendee={itm}/>);
    });
    
    return (
        <List>
            {attendees}
        </List>
    );
};

export default observer(AttendeesList);