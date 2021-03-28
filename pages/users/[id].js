import React from "react";
import SingleUserPage from "../../components/SingleUserPage";

const UserPage = ({ query }) => {
  const { id } = query;

  return (
    <>
      <SingleUserPage id={id} />
    </>
  );
};

export default UserPage;
