import styled from "styled-components";
import MenuLink from "../Typography/StyleMenuLink";

 const NavBar = styled.div`
  position: fixed;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 999;

  &:hover ${MenuLink}:not(:hover) {
    color: #241c69;
  }
`;

export default NavBar;
