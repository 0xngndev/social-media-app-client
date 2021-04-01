import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

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
    });
  };

  return handleFollow;
};

export default useFollow;
