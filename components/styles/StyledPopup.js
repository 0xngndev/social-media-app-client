import styled from "styled-components";
import Popup from "reactjs-popup";

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
