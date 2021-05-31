import React from "react";
import {
  NavBar,
  BrandLogo,
  ListItem,
  StyleLeftNavLinks,
  StyleRightNavLinks,
  StyleWrapper,
  StyleCartBadge,
  NavItem,
  NavWrapper,
  StyleCartTotal,
} from "./StyleNavbar";
import { StyleCartDropDown } from "../NavBarStyle";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { namedRequestsInProgress } from "../../../../redux/RequestHandler/request-selectors";
import RequestsEnum from "../../../../redux/RequestHandler/request-list";

const Navbar = () => {
  // const [activeMenu, setActiveMenu] = useState("men");
  const requestState = useSelector((state) => state.requests);
  const { categories } = useSelector((state) => state.categories);
  const { cart } = useSelector((state) => state.cart);
  const loading = namedRequestsInProgress(
    requestState,
    RequestsEnum.getCategories
  );

  const cartItem = useSelector((state) => state.cart.cart);

  function getTotal(cartItem) {
    let val = [];
    cartItem.map((product) => val.push(product.cartItem.price * product.qty));
    const total = val.reduce((a, b) => a + b, 0);
    return total;
  }

  return (
    <>
      <StyleWrapper
        bgColor="#fff"
        boxShadow="1px 19px 24px -5px rgb(195 207 255 / 18%)"
      >
        <NavBar>
          <StyleLeftNavLinks>
            <BrandLogo to="/">
              <img src="/logo192.png" alt="Logo" />
            </BrandLogo>
            {categories.map((category) => {
              if (category.parentId === 0)
                return (
                  <NavWrapper key={category.id}>
                    <NavItem to={`/category/${category.slug}`}>
                      {category.name}
                    </NavItem>

                    <div>
                      {categories.map((cat) => {
                        if (cat.parentId === category.id) {
                          return (
                            <Link key={cat.id} to={`/category/${cat.slug}`}>
                              <p>{cat.name}</p>
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </NavWrapper>
                );
            })}
          </StyleLeftNavLinks>
          <StyleRightNavLinks>
            <Search />
            {/* <ListItem>
              <StyleCartDropDown />
            </ListItem> */}
            <ListItem>
              <Link className="pos-relative" to="/cart">
                <FiShoppingCart color="black" size="1.4em" />
                {cart.length !== 0 ? (
                  <StyleCartBadge className="icon-favorite_outline large-font">
                    {cart.length}
                  </StyleCartBadge>
                ) : (
                  <></>
                )}
              </Link>
            </ListItem>
            {cartItem.length !== 0 ? (
              <ListItem>
                <StyleCartTotal>
                  <p>Your Cart</p>
                  <p>
                    <b>$ {getTotal(cartItem)}</b>
                  </p>
                </StyleCartTotal>
              </ListItem>
            ) : null}
          </StyleRightNavLinks>
        </NavBar>
      </StyleWrapper>
    </>
  );
};

export default React.memo(Navbar);
