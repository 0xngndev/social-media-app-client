import gql from "graphql-tag";
import styled from "styled-components";
import isFollowingFunc from "../helpers/isFollowing";
import useFollow from "../hooks/useFollow";
import PostByUser from "./PostByUser";
import { useQuery } from "@apollo/client";
import { StyledPopup } from "./styles/StyledPopup";
import CreatePost from "./CreatePost";
import FollowersList from "./FollowersList";

const QUERY_SINGLE_USER_ID = gql`
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
    }
  }
`;

const UserPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin-top: 5rem;

    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      margin: 0;
      padding: 0;
    }

    .div-divider {
      height: 1px;
      background-color: #d4d4d4;
      opacity: 50%;
      width: 100%;
      padding: 0;
      margin: 3rem 0;
    }

    button {
      outline: none;
      border: none;
      display: flex;
      cursor: pointer;
      background: var(--primaryColor);
      color: #fff;
      border-radius: 4px;
      margin: 0;
      padding: 0.5rem 1rem;
      width: fit-content;
      font-size: 1.2rem;
      margin: 0;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        background: var(--secondaryColor);
      }
    }
  }
`;

const SingleUserPage = ({ id }) => {
  const handleFollow = useFollow(id);
  const isFollowing = isFollowingFunc(id);
  const { data, loading, error } = useQuery(QUERY_SINGLE_USER_ID, {
    variables: {
      userId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const followColor = isFollowing
    ? { backgroundColor: "#b4b4b4" }
    : { backgroundColor: "" };

  const { getUserById } = data;

  const followersText =
    getUserById.followerCount === 1 ? " Follower" : " Followers";

  return (
    <UserPageStyles>
      <div>
        <h1>{getUserById.username}</h1>
        <StyledPopup
          trigger={<span>{getUserById.followerCount + followersText}</span>}
          modal
        >
          {(close) => (
            <FollowersList close={close} followers={getUserById?.followers} />
          )}
        </StyledPopup>
        <button onClick={handleFollow} style={followColor}>
          {isFollowing ? "Unfollow -" : "Follow +"}
        </button>
        <div className="div-divider"></div>
        <h3>Latest Posts</h3>
        {getUserById.posts.map((postId) => {
          return <PostByUser id={postId} key={postId} />;
        })}
      </div>
    </UserPageStyles>
  );
};

export default SingleUserPage;
