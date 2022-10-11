import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import { SignOut } from "./SignOut";
import UserReviews from "./UserReviews";
import RepositorySingle from "./RepositorySingle";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/:repoId" element={<RepositorySingle />} />
        <Route path="/:repoId/review" element={<CreateReview />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserReviews" element={<UserReviews />} />
      </Routes>
    </View>
  );
};

export default Main;
