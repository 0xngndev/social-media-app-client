import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { GET_FOLLOWERS_QUERY } from "../helpers/isFollowing";

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($userId: ID!) {
    followUser(userId: $userId) {
      id
    }
  }
`;

const useFollow = (userId) => {
  const [followUser] = useMutation(FOLLOW_USER_MUTATION);

  const handleFollow = async () => {
    await followUser({
      variables: {
        userId,
      },
      refetchQueries: [
        {
          query: GET_FOLLOWERS_QUERY,
          variables: {
            userId,
          },
        },
      ],
    });
  };

  return handleFollow;
};

export default useFollow;
