import React, { Component } from "react";
import { Icon} from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const CreateButton = ({navigation}) => {
  return <Icon name="ios-add" type="Ionicons" style={styles.cartIcon} onPress={()=>navigation.navigate("CreateEventScreen")}/>;
};
export default withNavigation(CreateButton);