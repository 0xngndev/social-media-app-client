import { gql, useQuery } from "@apollo/client";
import useUser from "../components/User";

export const GET_FOLLOWERS_QUERY = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
      followers {
        username
      }
      followerCount
    }
  }
`;

const isFollowingFunc = (userId) => {
  const user = useUser();
  const { data, loading, error } = useQuery(GET_FOLLOWERS_QUERY, {
    variables: {
      userId,
    },
  });

  if (loading) return <p>Loading...</p>;

  const {
    getUserById: { followers },
  } = data;

  const isFollowing = () => {
    const followersArray = followers?.filter(
      (follower) => follower?.username === user?.username
    );
    if (followersArray.length <= 0) return false;
    return true;
  };

  return isFollowing();
};

export default isFollowingFunc;
