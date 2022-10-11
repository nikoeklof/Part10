import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../grahql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
      onError: (error) => {
        console.log(error.graphQLErrors[0].message);
      },
    });
  };

  return [createUser, result];
};

export default useSignUp;
