import { View, TouchableHighlight } from "react-native";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import Constants from "expo-constants";
import Maintheme from "../themes/MainTheme";
import { StyleSheet } from "react-native";

import Text from "./Text";
import { useNavigate } from "react-router-native";
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,

    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  textPrimary: {
    fontWeight: Maintheme.fontWeights.bold,
    fontSize: Maintheme.fontSizes.body,
    color: "white",
    textAlign: "center",
  },
  logoutText: {
    position: "relative",
    marginBottom: 15,
    marginTop: -35,
    fontWeight: Maintheme.fontWeights.bold,
    fontSize: Maintheme.fontSizes.subheading,
    color: Maintheme.colors.textPrimary,
    textAlign: "center",
    textShadowColor: "rgba(138, 138, 138, 0.3)",

    textShadowRadius: 4,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
  },
  button: {
    width: 70,
    margin: 5,

    padding: 8,

    textAlign: "center",
    borderRadius: 4,
    color: "white",
  },
  onsubmitButtonTouch: {
    backgroundColor: "#004a9c",
  },
  buttonContainer: {
    width: "95%",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#010101",
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
  },
  buttonYes: {
    backgroundColor: "#0365d0",
  },
  buttonNo: {
    backgroundColor: "#cf1204",
  },
});

export const SignOut = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const logOut = (bool) => {
    if (bool) {
      authStorage.removeAccessToken();
      apolloClient.resetStore();
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.logoutText}>Are you sure you want to log out?</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, styles.buttonYes]}
          onPress={() => {
            console.log("yes");
            logOut(true);
          }}
          activeOpacity={0.95}
          underlayColor="#004a9c"
        >
          <Text style={styles.textPrimary}>Yes</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.buttonNo]}
          onPress={() => {
            console.log("no");
            logOut(false);
          }}
          activeOpacity={0.95}
          underlayColor="#8f0b01"
        >
          <Text style={styles.textPrimary}>No</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SignOut;
