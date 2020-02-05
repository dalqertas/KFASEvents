import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";
import EventDetails from "../Event/EventDetails";
import QRScan from "../QRScan";

const userStackNav = createStackNavigator(
    {
      EventsList:EventsList,
      EventDetailScreen:EventDetails,
      QRScan:QRScan
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