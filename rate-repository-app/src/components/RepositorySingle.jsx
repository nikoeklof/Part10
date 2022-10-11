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
const RepositorySingleContainer = ({ onEndReach, reviews, repoId }) => {
  const repository = useRepository(repoId);

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <View style={styles.backgroundlayer}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={RepositoryInfo(repository)}
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.15}
        renderItem={RepositoryReview}
        ListEmptyComponent={RepositoryReview}
      />
    </View>
  );
};

const RepositorySingle = () => {
  let { repoId } = useParams();
  const { reviews, fetchMore } = useReviews({ repositoryId: repoId, first: 4 });
  const onEndReach = () => {
    
    fetchMore();
  };
  return (
    <RepositorySingleContainer
      reviews={reviews}
      onEndReach={onEndReach}
      repoId={repoId}
    />
  );
};

export default RepositorySingle;
