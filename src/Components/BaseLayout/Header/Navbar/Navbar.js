import React from "react";
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
import { FiShoppingCart } from "react-icons/fi";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { namedRequestsInProgress } from "../../../../redux/RequestHandler/request-selectors";
import RequestsEnum from "../../../../redux/RequestHandler/request-list";

const Navbar = () => {
  // const [activeMenu, setActiveMenu] = useState("men");
  const requestState = useSelector((state) => state.requests);
  const { categories } = useSelector((state) => state.categories);
  const loading = namedRequestsInProgress(
    requestState,
    RequestsEnum.getCategories
  );

  return (
    <>
      <StyleWrapper bgColor="#2e2e2e">
        <NavBar>
          <StyleLeftNavLinks>
            <BrandLogo to="/">
              <img src="/logo192.png" alt="Logo" />
            </BrandLogo>

            <Search />
          </StyleLeftNavLinks>
          <StyleRightNavLinks>
            <ListItem>
              <StyleCartDropDown />
            </ListItem>
            <ListItem>
              <Link to="/cart">
                <FiShoppingCart color="white" size="1.4em" />
              </Link>
              {/* <Link to="/cart">
              <StyleCartBadge className="icon-favorite_outline large-font"></StyleCartBadge>
            </Link> */}
            </ListItem>
          </StyleRightNavLinks>
        </NavBar>
      </StyleWrapper>
      <StyleWrapper bgColor="#5f5c5cf7">
        {!loading ? (
          <SecondNavBar>
            {categories.map((category) => {
              return (
                <Link to={`/categories/${category.slug}`} key={category.id}>
                  {category.name}
                </Link>
              );
              // <p key={category.id}>{category.name}</p>;
            })}
          </SecondNavBar>
        ) : (
          <p>Loading...</p>
        )}
      </StyleWrapper>
    </>
  );
};

export default React.memo(Navbar);
