import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../styles/mediaQuery";
const height = "4.5em";
const color = "#000";

export const StyleWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  border-bottom: ${(props) => (props.border ? props.border : "none")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
`;

export const NavBar = styled.div`
  max-width: 1300px;
  width: 100%;
  height: ${height};
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  margin: auto;
`;

export const SecondNavBar = styled(NavBar)`
  height: 3em;
  box-shadow: inset 0px -1px 0px #f3f3f4;
`;

export const StyleLeftNavLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
  list-style: none;
  align-items: center;
  margin: 0;
  li {
    flex: 1;
  }
  li:last-child {
    flex: 10;
  }

  @media ${device.tablet} {
    @media ${device.tablet} {
      display: none;
    }
  }
`;

export const StyleRightNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  list-style: none;
  align-items: center;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline-flex;
  height: ${height};
  cursor: pointer;
  align-items: center;
  margin: 0 0.4rem;
  justify-content: center;
  padding: 0.5rem;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  color: ${color};
`;

export const Overlay = styled.div`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  pointer-events: none;
`;

export const BrandLogo = styled(Link)`
  display: block;
  padding: 0.5rem;
  font-weight: 700;
  color: #414040;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  img {
    height: 3em;
  }
`;

export const NavWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    background-color: #fff;
    top: 70px;
    z-index: 999;
    display: none;
    padding: 0em 1em;
    min-width: 15em;
    :hover {
      display: block;
    }
    a:hover {
      color: blue;
    }
  }
`;

export const NavItem = styled(Link)`
  color: ${color};
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  transition: all ease-in 0.3s;
  padding-left: 1em;
  padding-right: 1em;
  height: ${height};
  border: 2px solid #fff;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  :hover {
    + div {
      display: block;
    }
    border-bottom: 2px solid #000;
  }
`;

export const StyleCartBadge = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem !important;
  background: #b39c9c;
  color: #fff;
  border-radius: 50%;
  padding: 6px;
  font-weight: 500;
  bottom: 15px;
  height: 25px;
  width: 25px;
`;

export const MenuLink = styled(Link)`
  position: relative;
  overflow: hidden;
  will-change: color;
  transition: color 0.25s ease-out;
  white-space: nowrap;
  display: block;
  padding: 0.5rem;
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

export const SingleMegaTitle = styled.p`
  font-size: $smallFont;
  font-weight: 500;
  text-align: left;
`;

export const SubCategoryList = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  font-size: 15px;
`;

export const StyleCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;
