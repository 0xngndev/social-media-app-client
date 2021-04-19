//TODO: With a clear head, think if you can extract
//the whole userLikedPost functionality into a helper function

import isFollowingFunc from "../helpers/isFollowing";
import postedAt from "../helpers/postedAt";
import useRedirect from "../hooks/useRedirect";
import useFollow from "../hooks/useFollow";
import useUser from "./User";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ADD_VIEW } from "../graphql/mutations";
import { FaRegComment } from "react-icons/fa";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Wrapper } from "./styles/FableStyles";
import { useMutation } from "@apollo/client";
import PostOptions from "./PostOptions";
import Popup from "reactjs-popup";

const Fable = ({ fable }) => {
  const handleFollow = useFollow(fable.author.id);
  const handleRouting = useRedirect();
  const isFollowing = isFollowingFunc(fable.author.id);
  const user = useUser();
  const [addView] = useMutation(ADD_VIEW, {
    variables: {
      postId: fable.id,
    },
  });

  const followColor = isFollowing
    ? { backgroundColor: "#b4b4b4" }
    : user?.username === fable.author.username
    ? { backgroundColor: "var(--secondaryColor)" }
    : { backgroundColor: "" };

  const userLikedPost = () => {
    const userArray = fable?.likes?.map(
      (liker) => liker.username === user?.username
    );
    if (userArray.length <= 0) return false;
    return true;
  };

  const likesString = fable?.likeCount === 1 ? " Like" : " Likes";
  const commentsString = fable?.commentCount === 1 ? " Comment" : " Comments";
  const viewString = fable?.views === 1 ? " view" : " views";

  const handleClick = () => {
    addView();
    handleRouting("fables", fable.id);
  };

  const stylePostByUser = {
    color:
      user?.username === fable.author.username ? "var(--secondaryColor)" : "",
  };

  return (
    <Wrapper
      style={{
        border:
          user?.username === fable.author.username
            ? "3px solid var(--secondaryColor)"
            : "",
        borderTop:
          user?.username === fable.author.username
            ? "50px solid var(--secondaryColor)"
            : "",
      }}
    >
      <div className="div-author">
        <h3 onClick={() => handleRouting("users", fable.author.id)}>
          {fable?.author.username}
        </h3>
        {user ? (
          <div className="div-followers-menu">
            <button onClick={handleFollow} style={followColor}>
              {isFollowing ? "Unfollow -" : "Follow +"}
            </button>
            {user.username === fable.author.username ? (
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
                    fableId={fable?.id}
                    feedPage={true}
                  />
                </Popup>
              </>
            ) : (
              ""
            )}
          </div>
        ) : (
          <button style={{ cursor: "not-allowed", backgroundColor: "gray" }}>
            {isFollowing ? "Unfollow -" : "Follow +"}
          </button>
        )}
      </div>
      <div className="div-divider-short"></div>
      <h2 onClick={handleClick}>{fable?.title}</h2>
      <div className="div-divider-small"></div>
      <p>
        {fable?.excerpt + "..."}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClick}
        >
          Read more
        </p>
      </p>
      <div className="div-likes">
        <div>
          {userLikedPost() ? (
            <AiFillHeart style={stylePostByUser} />
          ) : (
            <AiOutlineHeart style={stylePostByUser} />
          )}
          <h3>{fable?.likeCount + likesString}</h3>
        </div>
        <div>
          {<FaRegComment style={stylePostByUser} />}
          <h3>{fable?.commentCount + commentsString}</h3>
        </div>
      </div>
      <div className="div-likes">
        <div>
          <BsEye style={stylePostByUser} />
          <h3>{fable?.views + viewString}</h3>
        </div>
        <div>
          <MdDateRange style={stylePostByUser} />
          <h3>{postedAt(fable.createdAt) + " ago"}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Fable;
