import styled from "styled-components";
import { Link } from "react-router-dom";

export const BrandLogo = styled(Link)`
  display: block;
  padding: 2rem 0.5rem;
  font-weight: 700;
  color: #414040;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
`;

export const StyleCartBadge = styled.span`
  position: absolute;
  font-family: "Roboto";
  font-size: 0.8rem;
  bottom: 45px;
  right: 7px;
  background: #d78e8e;
  color: #d9d7d7;
  border-radius: 50%;
  padding: 6px 8px;
  font-weight: 500;
`;

export const StyleLeftNavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  list-style: none;
  align-items: center;
  width: 85%;
  margin-left: 3%;
`;

export const ListItem = styled.li`
  li {
    padding: 5% 0;
    margin-left: 0%;
    transition: 0.5s all ease;
    font-weight: 400;
    &:hover {
      padding-left: 5%;
    }

    &:hover a {
      color: #b2b41e;
    }
  }
`;

export const MenuLink = styled(Link)`
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
export const StyleRightNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  list-style: none;
  align-items: center;
  margin-right: auto;
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
