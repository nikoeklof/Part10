import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query($first: Int, $after: String) {
    repositories(first: $first, after: $after) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
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
export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      ownerName
      name
      createdAt
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      userHasReviewed
    }
  }
`;
export const GET_REVIEWS = gql`
  query Query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            userId
            user {
              username
              id
            }
            rating
            text
            createdAt
          }
        }
      }
    }
  }
`;
export const GET_USER_REVIEWS = gql`
  query Query($first: Int, $after: String) {
    me {
      id
      username
      createdAt
      reviewCount
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasPreviousPage
          startCursor
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            userId
            repositoryId
            rating
            createdAt
            text
            repository {
              url
              fullName
              ownerName
              name
            }
          }
        }
      }
    }
  }
`;

export default { GET_REPOSITORIES };
