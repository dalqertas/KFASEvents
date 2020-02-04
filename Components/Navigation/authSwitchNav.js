import {createSwitchNavigator} from "react-navigation";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import organizerStackNav from "./organizerStackNav";


const authSwitchNav = createSwitchNavigator(
  {
    LoginScreen: Login,
    RegisterScreen: Register,
    organizerStackNav:organizerStackNav
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "#9C67BD",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default authSwitchNav;
