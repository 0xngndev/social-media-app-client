import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import isFollowingFunc from "../helpers/isFollowing";
import useFollow from "../hooks/useFollow";
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

const FollowerItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--primaryColor);
  width: 300px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-left: 20px solid var(--primaryColor);
  border-radius: 4px;

  span {
    font-size: 1.2rem;
    font-weight: 400;
    align-self: flex-start;
    color: #b4b4b4;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      margin: 0;
      cursor: pointer;
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
