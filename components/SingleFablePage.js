//TODO: error handling--spinners--moreshit

import gql from "graphql-tag";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import useUser from "./User";

const QUERY_SINGLE_POST = gql`
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
      justify-content: space-around;
      padding: 0;

      div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        svg {
          padding-right: 0.5rem;
          height: 20px;
          width: 20px;
          cursor: pointer;
          color: var(--primaryColor);
        }
      }
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
  const user = useUser();
  const { data, loading, error } = useQuery(QUERY_SINGLE_POST, {
    variables: {
      postId: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  const { getPost } = data;

  const userLikedPost = getPost?.likes?.map(
    (liker) => liker.username === user.username
  ) ? (
    <AiFillHeart />
  ) : (
    <AiOutlineHeart />
  );

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
          <div>
            {userLikedPost}
            <h3>{getPost.likeCount + " Likes"}</h3>
          </div>
          <div style={{ justifyContent: "flex-end" }}>
            {<FaRegComment />}
            <h3>{getPost.commentCount + " Comments"}</h3>
          </div>
        </div>
      </div>
    </SingleFableStyles>
  );
};

export default SingleFablePage;
