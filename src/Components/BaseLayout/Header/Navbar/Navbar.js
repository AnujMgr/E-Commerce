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

const Navbar = () => {
  // const toggleActiveMenu = () => {
  //   setActiveMenu(activeMenu === "men" ? "women" : "men");
  // };
  const [activeMenu, setActiveMenu] = useState("men");

  const categories = useSelector((state) => state.categories);
  console.log(categories);
  return false ? (
    <>
      <StyleWrapper bgColor="#2e2e2e">
        <NavBar>
          <StyleLeftNavLinks>
            <ListItem>
              <BrandLogo to="/">
                <img src="/logo192.png" alt="Logo" />
              </BrandLogo>
            </ListItem>
            {categories !== undefined ? (
              <React.Fragment>
                {categories.map((category) => (
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
                    {/* <Dropdown category={category} key={category.id} /> */}
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
      {/* <StyleWrapper bgColor="#5f5c5cf7">
        {activeMenu === "men" ? (
          <SecondNavBar>
            {categories[0].children[4].children.map((category) => {
              return <p>{category.content.title}</p>;
            })}
          </SecondNavBar>
        ) : (
          <SecondNavBar>
            {categories[1].children[4].children.map((category) => {
              return <p>{category.content.title}</p>;
            })}
          </SecondNavBar>
        )}
      </StyleWrapper> */}
    </>
  ) : (
    <></>
  );
};

export default React.memo(Navbar);
