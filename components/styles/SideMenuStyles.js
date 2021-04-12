import styled from "styled-components";

export const FakeSideMenu = styled.aside`
  width: 15%;
  background: var(--primaryColor);
`;

export const SideMenuWrapper = styled.aside`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  background: var(--primaryColor);
  bottom: 0;
  top: 0;

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
