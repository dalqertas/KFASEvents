import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon, Right, Left } from "native-base";
import {AirbnbRating} from "react-native-ratings";

const FeedbackItem = (props) => {
    // console.log(props);
    // console.log("Test");

    const feedback = props.info;

    return (
        <ListItem style={{flex: 1, flexDirection: "column", margin: 20, alignItems: 'start'}}>

                <AirbnbRating

                    count={5}
                    defaultRating={feedback.rating}
                    size={14}
                    showRating={false}
                    isDisabled={true}
                />
            {/*<Text>{feedback.comment}</Text>*/}
                <Text style={{marginTop: 10}}>sji klsngjs dojhb dsfogb dfhogud fghjdf hndf bhjdfnbojdf bo dhfjb jdfoib jdf bi dfbo djf bdfh nki</Text>
        </ListItem>
    );
};

export default FeedbackItem;