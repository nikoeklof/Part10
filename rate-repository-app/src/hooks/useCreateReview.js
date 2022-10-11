import { CREATE_REVIEW } from "../grahql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const apolloClient = useApolloClient();

  const createReview = async ({ reviewData }) => {
    const response = await mutate({
      variables: {
        review: {
          repositoryName: reviewData.repositoryName,
          ownerName: reviewData.ownerName,
          rating: reviewData.rating,
          text: reviewData.text,
        },
      },

      onError: (error) => {
        console.log(error.graphQLErrors[0].message);
      },
    });

    if (response) {
      apolloClient.resetStore();
    }
    return response;
  };
  return [createReview, result];
};
export default useCreateReview;
