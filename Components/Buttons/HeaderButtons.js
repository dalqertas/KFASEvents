import { Button, View } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import authStore from "../Stores/authStore";

const HeaderButtons = ({ navigation, event }) => {
    return (
        <View>
            {authStore.user != null && authStore.user.user_id === event.created_by.id ?
                <View style={{flexDirection: "row"}}>
                    <Button title="Scan" onPress={() => navigation.navigate("QRScan")} />
                    <Button title="Attendees" onPress={() => navigation.navigate("AttendeesList", {event: event})}/>
                </View>
                :
                <></>
            }
        </View>
    );
}

export default withNavigation(HeaderButtons);