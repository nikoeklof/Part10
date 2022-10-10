import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../grahql/queries";

const useRepositories = (variables) => {
  const { error, loading, data, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    console.log(canFetchMore);
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        first: 4,
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
