import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";

const organizerStackNav = createStackNavigator(
  {
    EventScreen:EventsList
  },
  {
    initialRouteName: "EventScreen",
    defaultNavigationOptions: {
      headerTintColor: "#9C67BD",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default organizerStackNav;