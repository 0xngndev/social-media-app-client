import React from "react";
import { Wrapper } from "./styles/FableStyles";
import useRedirect from "../hooks/useRedirect";

const Fable = ({ fable }) => {
  const handleRouting = useRedirect();

  return (
    <Wrapper>
      <div className="div-author">
        <h3 onClick={() => handleRouting("users", fable.author.id)}>
          {fable?.author.username}
        </h3>
        <span>Follow +</span>
      </div>
      <p style={{ cursor: "pointer" }}>321 Followers</p>
      <div className="div-divider-short"></div>
      <h2 onClick={() => handleRouting("fables", fable.id)}>{fable?.title}</h2>
      <div className="div-divider-small"></div>
      <p>{fable?.body}</p>
      <div className="div-likes">
        <h3>{fable?.likeCount + " Likes"}</h3>
        <h3>{fable?.commentCount + " Comments"}</h3>
      </div>
    </Wrapper>
  );
};

export default Fable;
