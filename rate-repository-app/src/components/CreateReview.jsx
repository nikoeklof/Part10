import Text from "./Text";
import Maintheme from "../themes/MainTheme";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  BackHandler,
} from "react-native";
import FormikTextInput from "./FormikTextInput";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate, useLocation } from "react-router-native";
import { useEffect } from "react";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    marginTop: 50,
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
  rating: yup
    .number()
    .required("Rating is required")
    .typeError("Rating must be a number between 1-100.")
    .min(1, "Rating must be a number between 1-100")
    .max(100, "Rating must be a number between 1-100"),

  text: yup.string().required("Text is required"),
});

const ReviewForm = (props) => {
  const repoValues = props.onSubmit.repoInfo;
  const navigate = useNavigate();
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  const handleBackPress = () => {
    navigate(`/${repoValues.repoId}`);
    return true;
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <FormikTextInput
          name={"rating"}
          placeholder="Give rating in form of 1-100..."
        />
        <FormikTextInput name={"text"} placeholder="Review text..." />
        <TouchableHighlight
          style={styles.submitButton}
          onPress={props.onSubmit.handleSubmit}
          activeOpacity={0.95}
          underlayColor="#004a9c"
        >
          <Text style={styles.textPrimary}>Create review</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const CreateReview = () => {
  const repoInfo = useLocation().state;
  const navigate = useNavigate();
  const [createReview] = useCreateReview();
  const initialValues = {
    rating: "",
    text: "",
  };
  const onSubmit = async (values) => {
    const { rating, text } = values;

    try {
      const response = await createReview({
        reviewData: {
          repositoryName: repoInfo.repoName,
          ownerName: repoInfo.ownerName,
          rating: parseInt(rating),
          text: text,
        },
      });

      if (response.errors?.message) {
        alert(response.errors?.message);
        return;
      }
      navigate(`/${repoInfo.repoId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <ReviewForm onSubmit={{ handleSubmit, repoInfo }} />
        )}
      </Formik>
    </View>
  );
};

export default CreateReview;
