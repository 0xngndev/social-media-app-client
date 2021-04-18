//TODO: Add spinner

import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";
import { ADD_VIEW } from "../graphql/mutations";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useMutation, useQuery } from "@apollo/client";
import postedAt from "../helpers/postedAt";
import Spinner from "./Spinner";
import Popup from "reactjs-popup";
import useUser from "./User";
import PostOptions from "./PostOptions";

const GET_FABLE_BY_ID = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      hot
      views
      title
      likes {
        id
        username
      }
      excerpt
      body
      author {
        id
        username
      }
      createdAt
      likeCount

      comments {
        id
        username
        body
      }
      commentCount
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
  margin-bottom: 2rem;

  .div-title-settings {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .button-popup {
      padding: 0;
      border: 0;
      background: transparent;
      color: #000;

      &:hover {
        background: transparent;
      }

      svg {
        cursor: pointer;
        padding-left: 1rem;
      }
    }

    h3 {
      display: flex;
      align-self: flex-start;
      margin: 0;
      padding: 0;
      justify-content: flex-start;
      line-height: 2;
      cursor: pointer;
    }
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

  .div-sep {
    margin-top: 1.5rem;

    background-color: #949494;
    height: 1px;
  }

  .div-comment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      span {
        padding-right: 2rem;
        &:hover {
          text-decoration: none;
        }
        cursor: text;
      }

      svg {
        padding-right: 0.5rem;
        height: 20px;
        width: 20px;
        cursor: pointer;
        color: var(--primaryColor);
      }
    }

    .span-last {
      padding-right: 0rem;
    }
  }
`;

const PostByUser = ({ id }) => {
  const user = useUser();
  const handleRouting = useRedirect();
  const { data, loading, error } = useQuery(GET_FABLE_BY_ID, {
    variables: {
      postId: id,
    },
  });
  const [addView] = useMutation(ADD_VIEW, {
    variables: {
      postId: id,
    },
  });

  if (loading)
    return <Spinner type={"spin"} color={"#8946FF"} height={75} width={40} />;

  const { getPost } = data;

  const handleClick = () => {
    addView();
    handleRouting("fables", id);
  };

  const likesString = getPost?.likeCount === 1 ? " Like" : " Likes";
  const commentsString = getPost?.commentCount === 1 ? " Comment" : " Comments";
  const viewString = getPost?.views === 1 ? " view" : " views";

  return (
    <PostByUserStyles>
      {error && <p>{error}</p>}
      <div className="div-title-settings">
        <h3 onClick={handleClick}>{getPost?.title}</h3>
        {user?.username === getPost.author.username ? (
          <>
            <Popup
              trigger={(open) => (
                <button className="button-popup">
                  <BsThreeDotsVertical />
                </button>
              )}
              position="right center"
              closeOnDocumentClick
            >
              <PostOptions
                open={open}
                fableId={getPost?.id}
                userPage={true}
                userId={id}
              />
            </Popup>
          </>
        ) : (
          ""
        )}
      </div>

      <p>
        {getPost?.excerpt + "..."}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClick}
        >
          Read more
        </p>
      </p>
      <div className="div-sep"></div>
      <div className="div-comment">
        <div>
          <AiFillHeart />
          <span>{getPost?.likeCount + likesString}</span>
        </div>
        <div>
          <FaRegComment />
          <span>{getPost?.commentCount + commentsString}</span>
        </div>
        <div>
          <BsEye />
          <span>{getPost?.views + viewString}</span>
        </div>
        <div>
          <MdDateRange />
          <span className="span-last">
            {postedAt(getPost?.createdAt) + " ago"}
          </span>
        </div>
      </div>
    </PostByUserStyles>
  );
};

export default PostByUser;
