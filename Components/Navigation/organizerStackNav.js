import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";
import CreateEvent from "../Event/CreateEvent";


const organizerStackNav = createStackNavigator(
  {
    EventScreen:EventsList,
    CreateEventScreen:CreateEvent
  },
  {
    initialRouteName: "EventScreen",
    defaultNavigationOptions: {
      headerTintColor: "#9C67BD",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    }
  }
);

export default organizerStackNav;