import { Button, View } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import authStore from "../Stores/authStore";

const HeaderButtons = ({ navigation }) => {
    return (
        <View>
            {authStore.user != null && 
                <View style={{flexDirection: "row"}}>
                    <Button title="Scan" onPress={() => navigation.navigate("QRScan")} />
                    <Button title="Attendees" />
                    <Button title="Done" />
                </View>
            }
        </View>
    );
}

export default withNavigation(HeaderButtons);