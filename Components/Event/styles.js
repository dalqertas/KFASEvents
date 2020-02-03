import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  eventInfo: {
    color: "#9C67BD",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin:15,
    
  },
  eventHeader: {
    fontSize: 14
  },
  overlay: {
    justifyContent: "flex-end",
    opacity: 0.3,
    backgroundColor: "black",
    height: "50%",
    width: "100%"
  },
  card:{
      marginLeft:10,
      marginRight:10
  }
});
export default styles;
