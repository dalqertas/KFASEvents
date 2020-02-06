import { createStackNavigator } from "react-navigation-stack";
import EventsList from "../Event/EventsList";
import EventDetails from "../Event/EventDetails";
import QRScan from "../QRScan";
import AttendeesList from "../Attendees/AttendeesList";
import RegisterAttendee from "../Attendees/RegisterAttendee";
import FeedbackList from "../Event/FeedbackList";
import CreateEvent from "../Event/CreateEvent";

const userStackNav = createStackNavigator(
    {
        EventsList:EventsList,
        EventDetailScreen:EventDetails,
        QRScan:QRScan,
        CreateEventScreen:CreateEvent,
        AttendeesList:AttendeesList,
        RegisterAttendee:RegisterAttendee,
        FeedbackListScreen:FeedbackList,
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