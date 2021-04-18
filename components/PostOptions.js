import styled from "styled-components";

const PostOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;

  border-radius: 4px;
  box-shadow: var(--bs);
  border: 1px solid var(--primaryColor);

  h1 {
    margin: auto;
    padding: 1rem;
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primaryColor);

    &:first-of-type {
      color: #f00;
    }
  }

  .div-separator {
    height: 1px;
    background-color: var(--primaryColor);
    width: 100%;
  }
`;

const PostOptions = ({ open }) => {
  return (
    <PostOptionsStyle>
      <h1>DELETE</h1>
      <div className="div-separator"></div>
      <h1>EDIT</h1>
    </PostOptionsStyle>
  );
};

export default PostOptions;
