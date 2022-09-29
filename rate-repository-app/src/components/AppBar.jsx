import { useQuery } from "@apollo/client";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { GET_ME } from "../grahql/queries";

import Maintheme from "../themes/MainTheme";
import AppBarTab from "./AppBarTab";
const styles = StyleSheet.create({
  container: {
    height: "8.5%",
    position: "relative",
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#24292e",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: Maintheme.fontSizes.subheading,
    color: Maintheme.colors.textPrimary,
    justifyContent: "center",
    alignContent: "center",
    color: "white",
    fontWeight: Maintheme.fontWeights.normal,
  },
  barButton: {
    backgroundColor: "gray",
    fontWeight: Maintheme.fontWeights.bold,
  },
  backGround: {
    backgroundColor: "#24292e",

    position: "absolute",
    width: "100%",
    height: 100,
    top: -100,
  },
});

const AppBar = () => {
  const user = useQuery(GET_ME, { fetchPolicy: "cache-and-network" });
  console.log(user.data?.me);
  if (user.data?.me) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.backGround}>
          <StatusBar backgroundColor="#24292e" barStyle={"light-content"} />
        </View>

        <ScrollView horizontal>
          <AppBarTab
            style={styles.barButton}
            text={"Repositories"}
            route={"/"}
          />
          <AppBarTab
            style={styles.barButton}
            text={"Sign out"}
            route={"SignOut"}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backGround}>
        <StatusBar backgroundColor="#24292e" barStyle={"light-content"} />
      </View>

      <ScrollView horizontal>
        <AppBarTab style={styles.barButton} text={"Repositories"} route={"/"} />
        <AppBarTab style={styles.barButton} text={"Sign in"} route={"SignIn"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;
