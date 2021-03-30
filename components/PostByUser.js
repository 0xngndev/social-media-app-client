//TODO: Add spinner

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";

const GET_FABLE_BY_ID = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      likes {
        username
      }
      body
      author {
        id
        username
      }
      createdAt
      likeCount
      commentCount
      excerpt
    }
  }
`;

const PostByUserStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--primaryColor);
  border-radius: 4px;
  border-left: 30px solid var(--primaryColor);
  padding: 1.5rem;
  box-shadow: var(--bs);

  h3 {
    display: flex;
    align-self: flex-start;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    line-height: 2.5;
    cursor: pointer;
  }

  p {
    align-self: flex-start;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #949494;
    white-space: normal;
    justify-self: flex-start;
  }

  .div-comment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #949494;
    margin-top: 1.5rem;

    span {
      padding-top: 1rem;
    }
  }
`;

const PostByUser = ({ id }) => {
  const handleRouting = useRedirect();
  const { data, loading, error } = useQuery(GET_FABLE_BY_ID, {
    variables: {
      postId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getPost } = data;

  return (
    <PostByUserStyles>
      {error && <p>{error}</p>}
      <h3 onClick={() => handleRouting("fables", id)}>{getPost?.title}</h3>

      <p>
        {getPost?.excerpt + "..."}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => handleRouting("fables", id)}
        >
          Read more
        </p>
      </p>

      <div className="div-comment">
        <span>{getPost?.likeCount + " Likes"}</span>
        <span>{getPost?.commentCount + " Comments"}</span>
      </div>
    </PostByUserStyles>
  );
};

export default PostByUser;
