import RepositoryDetails from "./RepositoryDetails";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native";
import useReviews from "../hooks/useReviews";
import RepositoryReview from "./RepositoryReview";

const styles = StyleSheet.create({
  backgroundlayer: {
    flex: 1,

    flexDirection: "row",
  },
  separator: {
    height: 10,
  },
});
const RepositoryInfo = (repository) => {
  return <RepositoryDetails content={repository} />;
};
const ItemSeparator = () => <View style={styles.separator} />;
const RepositorySingle = () => {
  let { repoId } = useParams();

  const repository = useRepository(repoId);
  const reviews = useReviews(repoId);
  const reviewNodes = reviews.repository
    ? reviews.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.backgroundlayer}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={RepositoryInfo(repository)}
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryReview}
        ListEmptyComponent={RepositoryReview}
      />
    </View>
  );
};

export default RepositorySingle;
