import React from "react";
import { useMutation, useApolloClient } from "@apollo/client";
import { CREATE_USER } from "../grahql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const apolloClient = useApolloClient();

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
    if (response.data) {
      console.log(`User ${response.data.createUser.username} created`);
    }
  };
  return [createUser, result];
};

export default useSignUp;
