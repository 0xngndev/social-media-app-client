import isFollowingFunc from "../helpers/isFollowing";
import gql from "graphql-tag";
import useFollow from "../hooks/useFollow";
import { FollowerItemStyles } from "./styles/FollowerItemStyles";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const QUERY_FOLLOWER_COUNT = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      username
      id
      posts
      followerCount
    }
  }
`;

export const FollowerItemQuery = ({ username, close }) => {
  const { data, loading, error } = useQuery(QUERY_FOLLOWER_COUNT, {
    variables: {
      username,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getUserByUsername } = data;

  return (
    <>
      <FollowerItem follower={getUserByUsername} close={close} />
    </>
  );
};

const FollowerItem = ({ follower, close }) => {
  const router = useRouter();
  const handleFollow = useFollow(follower?.id);
  const isFollowing = isFollowingFunc(follower?.id);

  const postsText = follower.posts.length === 1 ? "post" : "posts";
  const postsLength = follower.posts.length + " " + postsText;

  const followColor = isFollowing
    ? { backgroundColor: "#b4b4b4" }
    : { backgroundColor: "" };

  const followersText =
    follower?.followerCount === 1 ? " Follower" : " Followers";

  const handleRouting = () => {
    close();
    router.push(`/users/${follower.id}`);
  };

  return (
    <FollowerItemStyles>
      <div>
        <p onClick={handleRouting}>
          {follower.username}
          <span>{" | " + follower?.followerCount + followersText}</span>{" "}
          <span>{" | " + postsLength}</span>{" "}
        </p>
        <button onClick={handleFollow} style={followColor}>
          {isFollowing ? "Unfollow -" : "Follow +"}
        </button>
      </div>
    </FollowerItemStyles>
  );
};

export default FollowerItem;
