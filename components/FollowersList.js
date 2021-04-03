import React from "react";
import styled from "styled-components";
import FollowerItem from "./FollowerItem";

const FollowerListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  overflow: scroll;
  overflow-x: hidden;

  h3 {
    font-weight: 500;
    margin: 0;
    color: var(--primaryColor);
  }

  .div-divider {
    height: 1px;
    background-color: var(--primaryColor);
    opacity: 0.3;
    width: 40%;
    margin-bottom: 2rem;
  }
`;

const FollowersList = ({ close, followers }) => {
  return (
    <FollowerListStyles>
      <h3>Follower List</h3>
      <div className="div-divider"></div>
      {followers.map((follower) => {
        return <FollowerItem key={follower.id} username={follower.username} />;
      })}
    </FollowerListStyles>
  );
};

export default FollowersList;
