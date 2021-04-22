import gql from "graphql-tag";
import Spinner from "./Spinner";
import postedAt from "../helpers/postedAt";
import Popup from "reactjs-popup";
import PostOptions from "./PostOptions";
import useRedirect from "../hooks/useRedirect";
import useUser from "./User";
import { ADD_VIEW } from "../graphql/mutations";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PostByUserStyles } from "./styles/PostByUserStyles";
import { useMutation, useQuery } from "@apollo/client";
import { StyledPopup } from "./styles/StyledPopup";
import FollowersList from "./FollowersList";

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

  const userLikedPost = () => {
    const userArray = getPost?.likes?.map(
      (liker) => liker.username === user?.username
    );
    if (userArray.length <= 0) return false;
    return true;
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
              closeOnDocumentClick={false}
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
        <div style={{ cursor: "pointer" }}>
          {userLikedPost() ? <AiFillHeart /> : <AiOutlineHeart />}

          <StyledPopup
            trigger={<span>{getPost?.likeCount + likesString}</span>}
            modal
          >
            {(close) => (
              <FollowersList
                close={close}
                followers={getPost?.likes}
                follows={false}
                likes={true}
              />
            )}
          </StyledPopup>
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
