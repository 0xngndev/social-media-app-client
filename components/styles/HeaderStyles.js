import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  background: var(--primaryColor);

  .div-logo {
    display: flex;
    flex: 0.5;
    flex-direction: row;
    align-items: center;
    padding-left: 5rem;

    span {
      display: flex;
      padding-left: 0.5rem;
      font-weight: bold;
      font-size: 2.5rem;
      color: var(--offWhite);
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        transform: translateY(-10px);
        transition: 0.4s;
      }
    }
    div {
      display: flex;
      background: #000;
      align-items: center;
      border-radius: 4px;
      height: 40px;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        transform: translateY(-10px);
        transition: 0.4s;
      }

      span {
        color: var(--offWhite);
        display: flex;
        padding: 0 1rem;
        font-size: 2.5rem;

        &:hover {
          transform: translateX(0px);
        }
      }
    }
  }

  .div-navbar {
    display: flex;
    flex: 0.5;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5rem;

    ul {
      display: flex;
      flex-direction: row;
      text-decoration: none;

      li {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        h1 {
          padding: 0 2rem;
          color: var(--offWhite);
          cursor: pointer;
          font-size: 2rem;
          transition: 0.5s;

          &:hover {
            color: black;
            transition: 0.5s;
          }
        }
      }
    }
  }
`;
