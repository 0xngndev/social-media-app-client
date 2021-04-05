//TODO: With a clear head, think if you can extract
//the whole userLikedPost functionality into a helper function

import React from "react";
import { Wrapper } from "./styles/FableStyles";
import useRedirect from "../hooks/useRedirect";
import useFollow from "../hooks/useFollow";
import isFollowingFunc from "../helpers/isFollowing";
import { FaRegComment } from "react-icons/fa";
import useUser from "./User";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DiscoveryPost = ({ fable }) => {
  const handleFollow = useFollow(fable.author.id);
  const handleRouting = useRedirect();
  const isFollowing = isFollowingFunc(fable.author.id);
  const user = useUser();

  const followColor = isFollowing
    ? { backgroundColor: "#b4b4b4" }
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

  return (
    <Wrapper>
      <div className="div-author">
        <h3 onClick={() => handleRouting("users", fable.author.id)}>
          {fable?.author.username}
        </h3>
        <button onClick={handleFollow} style={followColor}>
          {isFollowing ? "Unfollow -" : "Follow +"}
        </button>
      </div>
      <p style={{ cursor: "pointer" }}>321 Followers</p>
      <div className="div-divider-short"></div>
      <h2 onClick={() => handleRouting("fables", fable.id)}>{fable?.title}</h2>
      <div className="div-divider-small"></div>
      <p>
        {fable?.excerpt + "..."}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => handleRouting("fables", fable.id)}
        >
          Read more
        </p>
      </p>
      <div className="div-likes">
        <div>
          {userLikedPost() ? <AiFillHeart /> : <AiOutlineHeart />}
          <h3>{fable?.likeCount + likesString}</h3>
        </div>
        <div>
          {<FaRegComment />}
          <h3>{fable?.commentCount + commentsString}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default DiscoveryPost;
