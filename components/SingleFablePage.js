import CommentPage from "./CommentPage";
import LeaveComment from "./LeaveComment";
import gql from "graphql-tag";
import postedAt from "../helpers/postedAt";
import styled from "styled-components";
import Spinner from "./Spinner";
import useRedirect from "../hooks/useRedirect";
import useUser from "./User";
import useLike from "../hooks/useLike";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useQuery } from "@apollo/client";
import { SingleFableStyles } from "./styles/SingleFableStyles";

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
            <div className="div-likes-svg" onClick={handleLikePost}>
              {userLikedPost() ? <AiFillHeart /> : <AiOutlineHeart />}
              <h3>{getPost.likeCount + likesString}</h3>
            </div>
            <div className="div-comments-svg">
              {<FaRegComment />}
              <h3>{getPost.commentCount + commentsString}</h3>
            </div>
          </div>
          <div className="div-metrics">
            <div className="div-likes-svg">
              <BsEye />
              <h3>{getPost?.views + viewString}</h3>
            </div>
            <div className="div-comments-svg">
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
