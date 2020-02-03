import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#9C67BD",
    marginTop: 30,
    borderRadius:10
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60
  },
  authOther: {
    color: "darkgray",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "#9C67BD",
    borderBottomColor: "darkgray",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "#9C67BD",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "#9C67BD"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "#9C67BD",
    fontSize: 16
  }
});

export default styles;
