import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReposityListContainer = ({ repositories, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.25}
    />
  );
};

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories({
    first: 6,
  });
  const onEndReach = () => {
    fetchMore();
  };
  return (
    <ReposityListContainer
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
