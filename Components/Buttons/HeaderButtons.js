import { Button, View } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import authStore from "../Stores/authStore";

const HeaderButtons = ({ navigation, event }) => {
    return (
        <View>
            {authStore.user != null && 
                <View style={{flexDirection: "row"}}>
                    <Button title="Scan" onPress={() => navigation.navigate("QRScan")} />
                    <Button title="Attendees" onPress={() => navigation.navigate("AttendeesList", {event: event})}/>
                    <Button title="Done" />
                </View>
            }
        </View>
    );
}

export default withNavigation(HeaderButtons);