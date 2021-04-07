import React from "react";
import { NavBar } from "./NavBarStyle";
import RightNavLinks from "./Components/RightNavLinks";
import LeftNavLinks from "./Components/LeftNavLinks";
import { CategoriesProvider } from "../../../Components/ContextApi/CategoriesProvider";

const Navbar = () => {
  console.log("i am Navbar");
  // const { categories } = useContext(CategoriesContext);

  return (
    <NavBar>
      <CategoriesProvider>
        <LeftNavLinks />

        <RightNavLinks />
      </CategoriesProvider>
      {/* <ListItem>
          <CartDropDown cartProducts={cartItem} />
        </ListItem>
        <ListItem>
          <Link to="/cart">
            <span className="icon-favorite_outline large-font"></span>
          </Link>
          {/* <Link to="/cart">
              <StyleCartBadge className="icon-favorite_outline large-font"></StyleCartBadge>
            </Link> 
        </ListItem> 
      </RightNavLinks>*/}
    </NavBar>
  );
};

export default React.memo(Navbar);
