//TODO
//ADD SVG AT THE BOTTOM

import styled from "styled-components";

export const SideMenuWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  background: var(--primaryColor);
  height: 100vh;
  box-shadow: var(--bs);

  .div-logo {
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 4rem;
      color: #fff;
      background-color: #000;
      border-radius: 4px;
      padding: 0rem 2.5rem;
      max-width: 50px;
      cursor: pointer;
      transition: 1s;

      &:hover {
        transition: 1s;
        box-shadow: var(--bs);
        transform: rotate(360deg);
      }
    }
  }

  .div-list {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    ul {
      text-decoration: none;
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        h3 {
          text-decoration: none;
          font-weight: 400;
          font-size: 1.8rem;
          transition: 0.3s;

          &:hover {
            transition: 0.3s;
            background-color: var(--lowOpBlue);
            box-shadow: var(--bs);
            padding: 1rem 0;
          }
        }
      }
    }
  }
`;

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <div className="div-logo">
        <h1>F</h1>
      </div>
      <div className="div-list">
        <ul>
          <li>
            <h3>FEED</h3>
            <h3>CREATE</h3>
            <h3>ABOUT</h3>
          </li>
        </ul>
      </div>
    </SideMenuWrapper>
  );
};

export default SideMenu;
