import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../grahql/mutations";
import { useApolloClient } from "@apollo/client";

const useDeleteReview = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({ id }) => {
    const response = await mutate({
      variables: {
        deleteReviewId: id,
      },
      onError: (error) => {
        console.log(error.graphQLErrors[0].message);
      },
    });
    console.log(response);
    if (response) {
      apolloClient.resetStore();
    }
  };
  return [deleteReview, result];
};
export default useDeleteReview;
