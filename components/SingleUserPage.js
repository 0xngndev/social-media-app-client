import FollowersList from "./FollowersList";
import gql from "graphql-tag";
import isFollowingFunc from "../helpers/isFollowing";
import Spinner from "./Spinner";
import PostByUser from "./PostByUser";
import useUser from "./User";
import useFollow from "../hooks/useFollow";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { StyledPopup } from "./styles/StyledPopup";
import { useQuery } from "@apollo/client";
import { UserPageStyles } from "./styles/UserPageStyles";

export const QUERY_SINGLE_USER_ID = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
      id
      posts
      email
      username
      email
      createdAt
      followers {
        id
        username
      }
      followerCount
      follows {
        id
        username
      }
    }
  }
`;

const SingleUserPage = ({ id }) => {
  const handleFollow = useFollow(id);
  const isFollowing = isFollowingFunc(id);
  const user = useUser();
  const { data, loading, error } = useQuery(QUERY_SINGLE_USER_ID, {
    variables: {
      userId: id,
    },
  });

  console.log(data);

  if (loading)
    return <Spinner type={"spin"} color={"#8946FF"} height={100} width={50} />;

  const followColor = isFollowing
    ? { backgroundColor: "#b4b4b4" }
    : { backgroundColor: "" };

  const { getUserById } = data;

  const followersText =
    getUserById.followerCount === 1 ? " Follower" : " Followers";

  const latestPosts = getUserById.posts.map((postId) => postId);
  const limitedLatestPosts = latestPosts.reverse().slice(0, 5);

  return (
    <UserPageStyles>
      <div className="div-user">
        <h1>{getUserById?.username}</h1>
        {user ? (
          <button onClick={handleFollow} style={followColor}>
            {isFollowing ? "Unfollow -" : "Follow +"}
          </button>
        ) : (
          <button style={{ cursor: "not-allowed", backgroundColor: "gray" }}>
            {isFollowing ? "Unfollow -" : "Follow +"}
          </button>
        )}
        <div className="div-follow-direction">
          <div className="div-followers">
            <AiOutlineUserAdd />
            <StyledPopup
              trigger={
                <span>{getUserById?.followerCount + followersText}</span>
              }
              modal
            >
              {(close) => (
                <FollowersList
                  close={close}
                  followers={getUserById?.followers}
                  follows={false}
                />
              )}
            </StyledPopup>
          </div>
          <div className="div-followers">
            <BiUserCircle />
            <StyledPopup
              trigger={
                <span>{getUserById?.follows.length + " Following"}</span>
              }
              modal
            >
              {(close) => (
                <FollowersList
                  close={close}
                  followers={getUserById?.follows}
                  follows={true}
                />
              )}
            </StyledPopup>
          </div>
        </div>
        <div className="div-divider"></div>
        <h3>Latest Posts</h3>
        {limitedLatestPosts.length > 0 ? (
          limitedLatestPosts.map((postId) => {
            return <PostByUser id={postId} key={postId} />;
          })
        ) : (
          <p>This user has not posted yet.</p>
        )}
      </div>
    </UserPageStyles>
  );
};

export default SingleUserPage;
