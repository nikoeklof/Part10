import React from "react";
import useSignUp from "../hooks/useSignUp";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import * as yup from "yup";
import { View, Text, BackHandler, TouchableHighlight } from "react-native";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1)
    .typeError("Username must be at least 1 character long."),
  password: yup
    .string()
    .required("Password is required")
    .min(5)
    .typeError("Password must be at least 5 characters long."),
});

const SignUpForm = ({ onSubmit }) => {
  const navigate = useNavigate("/");
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    navigate("/");
    return true;
  };

  return (
    <View className="flex-1 w-full h-full bg-slate-100 items-center justify-center p-0">
      <View className=" w-11/12 bg-slate-300 p-3 h-5/6 mt-0 rounded-xl shadow-xl shadow-zinc-800 top-0 relative align-middle">
        <Text className="text-center text-lg font-bold m-3">Sign up</Text>
        <FormikTextInput
          className="mt-4 bg-white w-5/6 self-center rounded-lg p-2 font-bold "
          name={"username"}
          placeholder={"Username..."}
        />
        <FormikTextInput
          className="mt-4 bg-white w-5/6 self-center rounded-lg p-2 font-bold "
          name={"password"}
          placeholder={"Password..."}
          secureTextEntry={true}
        />

        <TouchableHighlight
          className=" bg-blue-700 rounded p-2 m-2 mt-4"
          activeOpacity={0.95}
          underlayColor="#004a9c"
          onPress={onSubmit}
        >
          <Text className="text-center text-white font-bold text-base">
            Sign up
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const SignUp = () => {
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const response = await signUp({ username, password });
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
