import { FollowerItemQuery } from "./FollowerItem";
import { FollowerListStyles } from "./styles/FollowerListStyles";

const FollowersList = ({ close, followers, follows }) => {
  {
    if (followers.length === 0) {
      return (
        <FollowerListStyles>
          <h3>This is as empty as the soul</h3>
        </FollowerListStyles>
      );
    } else {
      return (
        <FollowerListStyles>
          {follows ? <h3>Following</h3> : <h3>Followers List</h3>}
          <div className="div-divider"></div>
          {followers.map((follower) => {
            return (
              <FollowerItemQuery
                key={follower.id}
                username={follower.username}
                close={close}
              />
            );
          })}
        </FollowerListStyles>
      );
    }
  }
};

export default FollowersList;
