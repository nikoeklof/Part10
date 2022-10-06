import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../grahql/queries";

const useReviews = (id) => {
  const { error, loading, data } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",

    variables: { repositoryId: id },
  });

  if (loading) return loading;

  return data;
};

export default useReviews;
