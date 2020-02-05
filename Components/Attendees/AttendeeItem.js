import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon } from "native-base";

const AttendeeItem = (props) => {
    console.log(props);
    console.log("Test");

    const attendee = props.attendee;
    
    return (
        <ListItem style={{flexDirection: "row", margin: 20}}>
            <Text>{attendee.first_name + " " + attendee.last_name}</Text>
            {/*<Text>{attendee.did_attend}</Text>*/}
            {
                attendee.did_attend ?
                    <Icon name="check-circle" type="Feather"/>
                    :
                    <Icon name="circle" type="Feather"/>
            }

        </ListItem>
    );
};

export default AttendeeItem;