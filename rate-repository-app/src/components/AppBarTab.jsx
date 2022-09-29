import { Text, StyleSheet } from "react-native";
import Maintheme from "../themes/MainTheme";
import { Link, useLocation } from "react-router-native";
const styles = StyleSheet.create({
  pressable: {
    padding: 15,
    height: "100%",
  },
  text: {
    fontWeight: Maintheme.fontWeights.bold,
    color: "white",
    textAlignVertical: "center",
  },
  active: {
    backgroundColor: "rgba(7, 7, 7, 0.6)",
  },
});

const AppBarTab = (props) => {
  let currentLocation = useLocation();

  if (
    currentLocation.pathname === "/" + props.route ||
    currentLocation.pathname === props.route
  ) {
    return (
      <>
        <Link to={"/" + props.route}>
          <Text style={[styles.pressable, styles.text, styles.active]}>
            {props.text}
          </Text>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={"/" + props.route}>
          <Text style={[styles.pressable, styles.text]}>{props.text}</Text>
        </Link>
      </>
    );
  }
};

export default AppBarTab;
