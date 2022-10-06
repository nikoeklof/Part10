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
export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      text
      user {
        username
        id
        createdAt
      }
      userId
      repository {
        ownerName
        name
        id
      }
      rating
      createdAt
    }
  }
`;

export default { SIGN_IN };
