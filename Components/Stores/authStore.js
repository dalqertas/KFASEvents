import { decorate, observable, computed } from "mobx";

import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";
class AuthStore {
  user = null;

  register = async (userData,navigation) => {
    try {
    console.log(userData)
    console.log(navigation)
      const res = await instance.post("register", userData);
      //const user = res.data;
    
    this.login(userData,navigation)
    } catch (error) {
        
      console.log(error);
    }
  };
  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login", userData);
      const user = res.data;
      console.log(navigation)
      this.setCurrentUser(user.access,navigation);
      console.log("logged in");
      
    } catch (error) {
      console.log(error);
    }
  };
  setCurrentUser = async (token,navigation) => {
    let user;
    if (token) {
      await AsyncStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      user = jwt_decode(token);
      console.log("i came here");
      navigation.navigate('EventScreen')
    } else {
        console.log("im here")
      await AsyncStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
      user = null;
    }
    this.user = user;
  };
  checkForExpiredToken = async () => {
    const token = await AsyncStorage.getItem("token");
    let user;
    
    if (token) {
      const currentTimeInSeconds = Date.now() / 1000;
      user = jwt_decode(token);
      if (user.exp >= currentTimeInSeconds) {
        return this.setCurrentUser(token);
      }
    }
    this.logout();
  };
  logout = () => {
    
    this.setCurrentUser();
    
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
authStore.checkForExpiredToken();
export default authStore;