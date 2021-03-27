import React from "react";

const FablePage = ({ query }) => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>{query.id}</h2>
    </div>
  );
};

export default FablePage;
