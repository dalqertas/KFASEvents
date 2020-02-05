import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  eventInfo: {
    color: "#9C67BD",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  },
  eventHeader: {
    fontSize: 13
  },
  overlay: {
    justifyContent: "flex-end",
    opacity: 0.3,
    backgroundColor: "black",
    height: "50%",
    width: "100%"
  },
  card: {
    marginLeft: 10,
    marginRight: 10
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ECF0F1"
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 20,
    color: "#9C67BD",
    //borderColor: "darkgray",
    //borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 8,
    fontSize: 16,
    backgroundColor: "white"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 20
  },
  otherInput: {
    flex: 1,
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 20,
    color: "#9C67BD",
    //borderColor: "darkgray",
    //borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 8,
    fontSize: 16
  },
  authTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    color: "#9C67BD",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "#9C67BD"
  },
  authTextBtn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#9C67BD",
    marginBottom: 20,
    borderRadius: 8,
    height: 40
  },
  text: {
    textAlign: "center",
    padding: 5,
    color: "white"
  },
  otherIcon: {
    marginRight: 8,
    color: "#9C67BD",
    fontSize: 20
  },
  description: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 100,
    marginBottom: 20,
    color: "#9C67BD",
    //borderColor: "darkgray",
    //borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 8,
    fontSize: 16,
    backgroundColor: "white"
  },
  scrollview: {
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 46,
    alignSelf: "stretch"
  },
  smallInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    color: "#9C67BD",
    //borderColor: "darkgray",
    //borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 8,
    fontSize: 16,
    backgroundColor: "white",
    width: 135
  }
});
export default styles;
