import axios from "axios";

const instance = axios.create({
  baseURL: "http://event-managment-coded.herokuapp.com/"
});

export default instance;