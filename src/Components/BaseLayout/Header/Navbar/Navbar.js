import React, { useState } from "react";
import {
  NavBar,
  SecondNavBar,
  BrandLogo,
  ListItem,
  StyleLeftNavLinks,
  StyleRightNavLinks,
  StyleWrapper,
} from "./StyleNavbar";
import { StyleCartDropDown } from "../NavBarStyle";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { namedRequestsInProgress } from "../../../../redux/RequestHandler/request-selectors";
import RequestsEnum from "../../../../redux/RequestHandler/request-list";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("men");
  const requestState = useSelector((state) => state.requests);
  const categories = useSelector((state) => state.categories);
  const loading = namedRequestsInProgress(
    requestState,
    RequestsEnum.getCategories
  );

  return (
    <>
      <StyleWrapper bgColor="#2e2e2e">
        <NavBar>
          <StyleLeftNavLinks>
            <ListItem>
              <BrandLogo to="/">
                <img src="/logo192.png" alt="Logo" />
              </BrandLogo>
            </ListItem>
            {!loading ? (
              <React.Fragment>
                {categories.categories.navigation.map((category) => (
                  <ListItem
                    key={category.id}
                    onClick={() =>
                      setActiveMenu(category.content.title.toLowerCase())
                    }
                    bgColor={
                      activeMenu === category.content.title.toLowerCase()
                        ? "#5f5c5cf7"
                        : "#2e2e2e"
                    }
                  >
                    {category.content.title}
                  </ListItem>
                ))}
              </React.Fragment>
            ) : (
              <></>
            )}

            <ListItem>
              <Search />
            </ListItem>
          </StyleLeftNavLinks>
          <StyleRightNavLinks>
            <ListItem>
              <StyleCartDropDown />
            </ListItem>
            <ListItem>
              <Link to="/cart">
                <BsHeart className="large-font" />
              </Link>
              {/* <Link to="/cart">
              <StyleCartBadge className="icon-favorite_outline large-font"></StyleCartBadge>
            </Link> */}
            </ListItem>
          </StyleRightNavLinks>
        </NavBar>
      </StyleWrapper>
      {!loading ? (
        <StyleWrapper bgColor="#5f5c5cf7">
          {activeMenu === "men" ? (
            <SecondNavBar>
              {categories.categories.navigation[
                activeMenu === "men" ? 0 : 1
              ].children[4].children.map((category) => {
                return <p key={category.id}>{category.content.title}</p>;
              })}
            </SecondNavBar>
          ) : (
            <SecondNavBar>
              {categories.categories.navigation[
                activeMenu === "men" ? 0 : 1
              ].children[4].children.map((category) => {
                return <p key={category.id}>{category.content.title}</p>;
              })}
            </SecondNavBar>
          )}
        </StyleWrapper>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default React.memo(Navbar);
