import React, { Component } from "react";
import { Icon} from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import authStore from "../Stores/authStore";
import { View } from "react-native";

const LoginButton = ({navigation}) => {
  return (
    <View>
      {authStore.user == null && <Icon name="user-circle" type="FontAwesome" style={{marginLeft:20, color:"lightgray"}} onPress={()=>navigation.navigate("LoginScreen")}/>}
    </View>
  );
};
export default withNavigation(LoginButton);