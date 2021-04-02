//TODO: Fix problem in server where follower have different
//ids than their respective ids.

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import isFollowingFunc from "../helpers/isFollowing";
import useFollow from "../hooks/useFollow";

const QUERY_FOLLOWER_COUNT = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
      followerCount
      posts
    }
  }
`;

const FollowerItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--primaryColor);
`;

const FollowerItem = ({ id }) => {
  //   const handleFollow = useFollow(id);
  //   const isFollowing = isFollowingFunc(id);
  const { data, loading, error } = useQuery(QUERY_FOLLOWER_COUNT, {
    variables: {
      userId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  //   const followColor = isFollowing
  //     ? { backgroundColor: "#b4b4b4" }
  //     : { backgroundColor: "" };

  console.log(data);

  const { getUserById } = data;

  const followersText =
    getUserById?.followerCount === 1 ? " Follower" : " Followers";

  return (
    <FollowerItemStyles>
      <div>{id}</div>
      <div>{getUserById?.followerCount}</div>
    </FollowerItemStyles>
  );
};

export default FollowerItem;
