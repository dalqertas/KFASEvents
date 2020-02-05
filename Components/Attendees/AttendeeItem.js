import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon, Right, Left } from "native-base";

const AttendeeItem = (props) => {
    console.log(props);
    console.log("Test");

    const attendee = props.attendee;
    
    return (
        <ListItem style={{flexDirection: "row", margin: 20}}>
            {
                attendee.did_attend ?
                    <Icon name="check-circle" type="Feather" style={{color: "green", fontSize: "18px"}}/>
                    :
                    <Icon name="circle" type="Feather" style={{color: "lightgray", fontSize: "18px"}}/>
            }
            <Text style={{marginLeft: 10}}>{attendee.first_name + " " + attendee.last_name}</Text>

        </ListItem>
    );
};

export default AttendeeItem;