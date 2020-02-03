import { createBottomTabNavigator } from "react-navigation-tabs";
import authStackNav from "./authStackNav";
import userStackNav from "./userStackNav";

const BottomTabNav = createBottomTabNavigator({
    Home: userStackNav,
    Profile: authStackNav
  });
  
  export default BottomTabNav;