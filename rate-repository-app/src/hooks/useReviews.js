import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../grahql/queries";

const useReviews = (variables) => {
  const { error, loading, data, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",

    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        first: 4,
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useReviews;
