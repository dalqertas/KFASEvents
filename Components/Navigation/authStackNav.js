import { createStackNavigator } from "react-navigation-stack";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import EventsList from "../Event/EventsList";

const authStackNav = createStackNavigator(
  {
    LoginScreen: Login,
    RegisterScreen: Register,
    EventScreen:EventsList
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
