import React, { Component } from "react";
import { View, Text } from "react-native";
import FeedbackItem from "./FeedbackItem";
import { observer } from "mobx-react";
import store from "../Stores/store";
import {Content, List} from "native-base";
import HeaderButtons from "../Buttons/HeaderButtons";
import EventDetails from "./EventDetails";

class FeedbackList extends Component {

    state = {
        list: []
    };

    componentDidMount() {
        const {navigation}=this.props;
        const event = navigation.getParam("event");

        store.getFeedback(event.id, () => {
            console.log("got feedback");
            this.setState({list: store.feedback[event.id]});
        });
    }

    render() {
        return (
            <Content>
                <List>
                    {this.state.list.map(itm => <FeedbackItem info={itm} key={itm.id}/>)}
                </List>
            </Content>
        );
    }
}

FeedbackList.navigationOptions = ({ navigation }) => {
    return {
        title: "Feedback"
    };
};

export default observer(FeedbackList);