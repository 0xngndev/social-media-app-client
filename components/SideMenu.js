//TODO:
//ADD SVG AT THE BOTTOM
//Modularize Styles

import styled from "styled-components";
import Popup from "reactjs-popup";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/router";
import CreatePost from "./CreatePost";
import Logout from "./Logout";

export const StyledPopup = styled(Popup)`
  &-overlay {
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 999;
    pointer-events: auto;
  }
  &-content {
    position: relative;
    margin: auto;
    pointer-events: auto;
    background: white;
    border-radius: 12px 12px 6px 6px;
  }
`;

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
  const router = useRouter();

  return (
    <>
      <FakeSideMenu></FakeSideMenu>
      <SideMenuWrapper>
        <div className="div-logo">
          <h1 onClick={() => router.push(`/`)}>F</h1>
        </div>
        <div className="div-list">
          <ul>
            <li>
              <h3 onClick={() => router.push(`/feed`)}>FEED</h3>
              <StyledPopup trigger={<h3>CREATE</h3>} modal>
                {(close) => <CreatePost close={close} />}
              </StyledPopup>
              <h3>ABOUT</h3>
              <StyledPopup trigger={<h3>LOGIN</h3>} modal>
                {(close) => <LoginForm close={close} />}
              </StyledPopup>
              <StyledPopup trigger={<h3>SIGN UP</h3>} modal>
                {(close) => <RegisterForm close={close} />}
              </StyledPopup>
              <Logout />
            </li>
          </ul>
        </div>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;
