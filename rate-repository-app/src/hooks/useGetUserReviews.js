import { useQuery } from "@apollo/client";
import { GET_USER_REVIEWS } from "../grahql/queries";

const useGetUserReviews = (variables) => {
  const { error, loading, data, fetchMore, ...result } = useQuery(
    GET_USER_REVIEWS,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      variables,
      onError: (error) => {
        console.log(error.graphQLErrors[0].message);
      },
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        first: 4,
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  console.log(data);
  return {
    reviews: data?.me.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useGetUserReviews;
