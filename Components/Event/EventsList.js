import React, { Component } from "react";
import { Container ,Content} from "native-base";
import EventItem from "./EventItem";
import { observer } from "mobx-react";
import styles from "./styles";
import CreateButton from "../Buttons/CreateButton";


const EventsList= () =>{
    return(
        <Content><EventItem/></Content>
    )
}
EventsList.navigationOptions={
    title: "Events",
    headerRight:()=><CreateButton/>,
  }
export default observer(EventsList);