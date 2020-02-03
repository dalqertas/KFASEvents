import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";


const userStackNav = createStackNavigator(
    {
      EventsList:EventsList
    },
    {
      initialRouteName: "EventsList",
      defaultNavigationOptions: {
        headerTintColor: "#9C67BD",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  );
  
  export default userStackNav;