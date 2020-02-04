import { createStackNavigator } from "react-navigation-stack";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import organizerStackNav from "./organizerStackNav";


const authStackNav = createStackNavigator(
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

export default authStackNav;
