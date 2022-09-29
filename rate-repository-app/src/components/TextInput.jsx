import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formInput: {
    width: "70%",
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "center",
    borderColor: "rgba(88, 88, 88, 0.8)",

    padding: 5,
    borderRadius: 5,
    textAlign: "left",
    pardding: 10,
    margin: 2,
  },
  error: {
    borderColor: "red",
  },
});

const TextInput = ({ error, ...props }) => {
  return (
    <NativeTextInput
      style={error ? [styles.formInput, styles.error] : styles.formInput}
      {...props}
    />
  );
};

export default TextInput;
