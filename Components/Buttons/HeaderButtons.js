import { Button, View } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";

const HeaderButtons = ({ navigation }) => {
    return (
        <View style={{flexDirection: "row"}}>
            <Button title="Scan" onPress={() => navigation.navigate("QRScan")} />
            <Button title="Attendees" />
            <Button title="Done" />
        </View>
    );
}

export default withNavigation(HeaderButtons);