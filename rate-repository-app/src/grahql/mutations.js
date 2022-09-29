import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
        id
      }
      accessToken
      expiresAt
    }
  }
`;

export default { SIGN_IN };
