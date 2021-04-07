import React from "react";
import { Link } from "react-router-dom";
import { StyleRightNavLinks, ListItem } from "../NavBarStyle";
import CartDropDown from "./CartDropDown";

const RightNavLinks = () => {
  console.log("Right Nav Links");

  return (
    <StyleRightNavLinks>
      <ListItem>
        <CartDropDown />
      </ListItem>
      <ListItem>
        <Link to="/cart">
          <span className="icon-favorite_outline large-font"></span>
        </Link>
        {/* <Link to="/cart">
              <StyleCartBadge className="icon-favorite_outline large-font"></StyleCartBadge>
            </Link> */}
      </ListItem>
    </StyleRightNavLinks>
  );
};

export default React.memo(RightNavLinks);
