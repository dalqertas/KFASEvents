import React, { Component } from "react";
import { View, Text } from "react-native";
import AttendeeItem from "./AttendeeItem";
import { observer } from "mobx-react";
import store from "../Stores/store";
import {Content, List} from "native-base";

class AttendeesList extends Component {

    state = {
        attendees: []
    };

    componentDidMount() {
        const {navigation}=this.props;
        const event = navigation.getParam("event");

        store.getAttendees(event.id, () => {
            console.log("got attendees");
            console.log(store.attendees[event.id]);
            this.setState({attendees: store.attendees[event.id]});
        });
    }

    // showList = () => {
    //     this.state.attendees.map(itm => <AttendeeItem attendee={itm} key={itm.id}/>)
    // };

    render() {
        return (
            <Content>
                <List>
                    {this.state.attendees.map(itm => <AttendeeItem attendee={itm} key={itm.id}/>)}
                </List>
            </Content>
        );
    }
}

// const AttendeesList = ({ navigation }) => {
//
//
//     let attendees = [];
//
//     const attendees = () => {
//
//     }
//
//     const coffeeShopList = CoffeeStore.list.map(coffeeShop => (
//         <CoffeeItem coffeeshop={coffeeShop} key={coffeeShop.id} />
//     ));
//
//
// };

export default observer(AttendeesList);