import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          name
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          description
          language
          ownerName
          ownerAvatarUrl
        }
      }
    }
  }
`;
export const GET_ME = gql`
  query me {
    me {
      id
      username
    }
  }
`;

export default { GET_REPOSITORIES };
