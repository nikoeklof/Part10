import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import Maintheme from "../themes/MainTheme";
import AppBarTab from "./AppBarTab";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#24292e",
    width: "100%",
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
    top: 0,
    backgroundColor: "gray",
    fontWeight: Maintheme.fontWeights.bold,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={"Repositories"} />
      <AppBarTab text={"About"} />
    </View>
  );
};

export default AppBar;
