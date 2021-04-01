import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export const QUERY_LIKES = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      likeCount
    }
  }
`;

export const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
    }
  }
`;

const useLike = (id) => {
  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    refetchQueries: [
      {
        query: QUERY_LIKES,
        variables: {
          postId: id,
        },
      },
    ],
  });

  const handleLikePost = async () => {
    await likePost({
      variables: {
        postId: id,
      },
    });
  };

  return handleLikePost;
};

export default useLike;
