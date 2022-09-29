import { SIGN_IN } from "../grahql/mutations";
import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: {
          username: username,
          password: password,
        },
      },
    });

    if (response.data) {
      const token = response.data?.authenticate?.accessToken;
      console.log("new token", token);

      await authStorage.setAccessToken(token);

      apolloClient.resetStore();

      return token;
    }

    return false;
  };

  return [signIn, result];
};

export default useSignIn;
