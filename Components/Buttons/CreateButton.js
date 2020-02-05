import React, { Component } from "react";
import { Icon} from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import authStore from "../Stores/authStore";
import { View } from "react-native";
import { observer } from "mobx-react";

const CreateButton = (props) => {
  console.log(props);
  const navigation = props.navigation;
  return (
    <View>
      {authStore.user != null && <Icon name="ios-add" type="Ionicons" style={styles.cartIcon} onPress={()=>navigation.navigate("CreateEventScreen")}/>}
    </View>
  );
};
export default observer(CreateButton);