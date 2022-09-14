import { Pressable, Text, StyleSheet } from "react-native";
import Maintheme from "../themes/MainTheme";
const styles = StyleSheet.create({
  pressable: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: Maintheme.fontWeights.bold,
    color: "white",
  },
});

const AppBarTab = (props) => {
  return (
    <>
      <Pressable
        style={styles.pressable}
        onPress={() => console.log("pressed:" + props.text)}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </>
  );
};

export default AppBarTab;
