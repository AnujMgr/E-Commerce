import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../styles/mediaQuery";
const height = "4em";

export const StyleWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
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
  a {
    color: #fff;
    display: inline-flex;
    align-items: center;
  }
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
  color: #fff;
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

export const StyleCartBadge = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem !important;
  background: #b39c9c;
  color: #000;
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
