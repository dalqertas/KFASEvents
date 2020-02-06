import React from "react";
import { Icon} from "native-base";
import { withNavigation } from "react-navigation";
import authStore from "../Stores/authStore";
import { View } from "react-native";
import { observer } from "mobx-react";

const LoginButton = ({navigation}) => {
  return (
    <View>
      {!authStore.user ? <Icon name="user-circle" type="FontAwesome" style={{marginLeft:20, color:"lightgray"}} onPress={()=>navigation.navigate("LoginScreen")}/> : <Icon name="poweroff" type="AntDesign" style={{marginLeft:20, color:"lightgray"}} onPress={()=>authStore.logout()}/>}
    </View>
  );
};
export default withNavigation(observer(LoginButton));