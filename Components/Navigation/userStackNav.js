import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";
import EventDetails from "../Event/EventDetails";
import QRScan from "../QRScan";
import AttendeesList from "../Attendees/AttendeesList";
import RegisterAttendee from "../Attendees/RegisterAttendee";

const userStackNav = createStackNavigator(
    {
      EventsList:EventsList,
      EventDetailScreen:EventDetails,
      QRScan:QRScan,
      AttendeesList:AttendeesList,
      RegisterAttendee:RegisterAttendee
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