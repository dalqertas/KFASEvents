import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon, Right, Left } from "native-base";

const FeedbackItem = (props) => {
    console.log(props);
    console.log("Test");

    const feedback = props.info;

    return (
        <ListItem style={{flexDirection: "row", margin: 20}}>
            <AirbnbRating
                count={5}
                defaultRating={feedback.rating}
                size={14}
                isDisabled=true
            />
            <Text>{feedback.comment}</Text>
        </ListItem>
    );
};

export default FeedbackItem;