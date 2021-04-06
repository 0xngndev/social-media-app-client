import gql from "graphql-tag";

export const ADD_VIEW = gql`
  mutation addView($postId: ID!) {
    addView(postId: $postId)
  }
`;
