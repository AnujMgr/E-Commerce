import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuLink = styled(Link)`
  position: relative;
  overflow: hidden;
  will-change: color;
  transition: color 0.25s ease-out;
  white-space: nowrap;
  display: block;
  padding: 2rem 0.5rem;
  font-weight: 700;
  color: #414040;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  
  &:before,
  &:after {
    content: "";
    width: 0;
    height: 5px;
    background-color: #b4e011;
    will-change: width;
    transition: width 0.1s ease-out;
    position: absolute;
    bottom: 0;
  }

  &:before {
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    right: 50%;
    transform: translateX(50%);
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition-duration: 0.2s;
  }
 
`;

export default MenuLink;
