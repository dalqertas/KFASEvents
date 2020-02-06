import {createSwitchNavigator} from "react-navigation";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import userStackNav from "./userStackNav";


const authSwitchNav = createSwitchNavigator(
  {
    LoginScreen: Login,
    RegisterScreen: Register,
    userStackNav:userStackNav
  },
  {
    initialRouteName: "userStackNav",
    defaultNavigationOptions: {
      headerTintColor: "#9C67BD",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default authSwitchNav;
