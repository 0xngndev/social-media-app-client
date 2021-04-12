import CommentPage from "./CommentPage";
import LeaveComment from "./LeaveComment";
import gql from "graphql-tag";
import postedAt from "../helpers/postedAt";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";
import useUser from "./User";
import useLike from "../hooks/useLike";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";

export const QUERY_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      body
      views
      likes {
        username
      }
      comments {
        id
        body
        username
        createdAt
      }
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
  margin-top: 7rem;

  .div-comments {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;

    button {
      outline: none;
      border: none;
      border-radius: 4px;
      background-color: var(--primaryColor);
      color: #fff;
      padding: 1rem 2rem;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    p {
      margin: 0;
    }
    h2 {
      font-size: 1.4rem;
      font-weight: 400;
      margin: 0;
      padding: 0;
      align-self: flex-start;
    }

    .div-likes-comments {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      width: 100%;

      .div-metrics {
        display: flex;
        flex-direction: row;

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
  const handleLikePost = useLike(id);
  const user = useUser();

  const { data, loading, error } = useQuery(QUERY_SINGLE_POST, {
    variables: {
      postId: id,
    },
  });

  if (loading)
    return <Spinner type={"spin"} color={"#8946FF"} height={300} width={200} />;

  const { getPost } = data;

  const userLikedPost = () => {
    const userArray = getPost?.likes?.map((liker) =>
      liker.username.includes(user?.username)
    );
    if (userArray.length <= 0) return false;
    return true;
  };

  const likesString = getPost?.likeCount === 1 ? " Like" : " Likes";
  const commentsString = getPost?.commentCount === 1 ? " Comment" : " Comments";
  const viewString = getPost?.views === 1 ? " view" : " views";

  return (
    <SingleFableStyles>
      <div>
        <h1>{getPost.title}</h1>
        <p
          onClick={() => handleRouting("users", getPost.author.id)}
          style={{ cursor: "pointer" }}
        >
          {"by: " + getPost.author.username}
        </p>
        <div className="div-divider"></div>
        <h2>{getPost?.body}</h2>
        <div className="div-divider"></div>
        <div className="div-likes-comments">
          <div className="div-metrics">
            <div onClick={handleLikePost}>
              {userLikedPost() ? <AiFillHeart /> : <AiOutlineHeart />}
              <h3>{getPost.likeCount + likesString}</h3>
            </div>
            <div>
              {<FaRegComment />}
              <h3>{getPost.commentCount + commentsString}</h3>
            </div>
          </div>
          <div className="div-metrics">
            <div>
              <BsEye />
              <h3>{getPost?.views + viewString}</h3>
            </div>
            <div>
              <MdDateRange />
              <h3>{postedAt(getPost.createdAt) + " ago"}</h3>
            </div>
          </div>
        </div>
        <div className="div-divider"></div>
        <LeaveComment postId={getPost?.id} />
        <h3>Comments</h3>
      </div>
      <div className="div-comments">
        {getPost?.comments?.map((comment) => {
          return <CommentPage key={comment.id} comment={comment} />;
        })}
      </div>
    </SingleFableStyles>
  );
};

export default SingleFablePage;
