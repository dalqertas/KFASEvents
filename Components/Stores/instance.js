import axios from "axios";

export const instance = axios.create({
  baseURL: "http://event-managment-coded.herokuapp.com/"
});
