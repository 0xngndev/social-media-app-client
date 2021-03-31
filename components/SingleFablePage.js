//TODO: error handling--spinners--moreshit

import gql from "graphql-tag";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";
import { useQuery } from "@apollo/client";

const QUERY_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      title
      body
      author {
        username
        id
      }
      createdAt
      likeCount
      commentCount
    }
  }
`;

const SingleFableStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    padding-top: 7rem;

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
    h2 {
      font-size: 1.4rem;
      font-weight: 400;
      margin: 0;
      padding: 0;
      align-self: flex-start;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
  .div-divider {
    height: 1px;
    background-color: #d4d4d4;
    opacity: 50%;
    width: 100%;
    padding: 0;
    margin: 3rem 0;
  }
`;

const SingleFablePage = ({ id }) => {
  const handleRouting = useRedirect();
  const { data, loading, error } = useQuery(QUERY_SINGLE_POST, {
    variables: {
      postId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getPost } = data;

  return (
    <SingleFableStyles>
      <div>
        <h1>{getPost.title}</h1>
        <p onClick={() => handleRouting("users", getPost.author.id)}>
          {"by: " + getPost.author.username}
        </p>
        <div className="div-divider"></div>
        <h2>{getPost?.body}</h2>
        <div className="div-divider"></div>
        <div>
          <h3>{getPost.likeCount + " Likes"}</h3>
          <h3>{getPost.commentCount + " Comments"}</h3>
        </div>
      </div>
    </SingleFableStyles>
  );
};

export default SingleFablePage;
