import React from "react";
import { View, Text } from "react-native";

const AttendeeItem = props => {
    return (
        <View style={{flexDirection: "row"}}>
            <Text>{props.first_name + " " + props.last_name}</Text>
            <Text>{props.checkedIn}</Text>
        </View>
    );
};

export default AttendeeItem;