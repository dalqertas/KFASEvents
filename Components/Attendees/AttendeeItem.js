import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "native-base";

const AttendeeItem = (props) => {
    console.log(props);
    console.log("Test");
    
    return (
        <ListItem style={{flexDirection: "row", margin: 20}}>
            <Text>{attendee.first_name + " " + attendee.last_name}</Text>
            <Text>{attendee.did_attend}</Text>
        </ListItem>
    );
};

export default AttendeeItem;