import Text from "./Text";
import Maintheme from "../themes/MainTheme";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import Constants from "expo-constants";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  textPrimary: {
    fontWeight: Maintheme.fontWeights.bold,
    fontSize: Maintheme.fontSizes.body,
    color: "white",
    textAlign: "center",
  },
  submitButton: {
    width: "70%",
    margin: 5,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#0365d0",
    textAlign: "center",
    borderRadius: 4,
    color: "white",
  },
  onsubmitButtonTouch: {
    backgroundColor: "#004a9c",
  },
  formContainer: {
    width: "95%",
    padding: 10,

    position: "absolute",
    top: -40,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#010101",
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "column",
  },
});
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <FormikTextInput name={"username"} placeholder="Username..." />
        <FormikTextInput
          name={"password"}
          placeholder="Password..."
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.submitButton}
          onPress={onSubmit}
          activeOpacity={0.95}
          underlayColor="#004a9c"
        >
          <Text style={styles.textPrimary}>Sign In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const SignIn = () => {
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const response = await signIn({ username, password });

      if (response !== false) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
