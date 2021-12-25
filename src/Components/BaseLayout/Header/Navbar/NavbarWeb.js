import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

import {
  BrandLogo,
  ListItem,
  StyleLeftNavLinks,
  StyleRightNavLinks,
  StyleCartBadge,
  NavItem,
  NavWrapper,
  StyleCartTotal,
} from "./StyleNavbar";

function NavbarWeb() {
  const { categories } = useSelector((state) => state.categories);
  const { cart } = useSelector((state) => state.cart);
  const cartItem = useSelector((state) => state.cart.cart);

  function handleSubmit(e, value) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <StyleLeftNavLinks>
        <BrandLogo to="/">
          <img src="/logo192.png" alt="Logo" />
        </BrandLogo>
        {categories.map((category) => {
          if (category.parentId === 0) {
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
          } else {
            <></>;
          }
        })}
      </StyleLeftNavLinks>

      <StyleRightNavLinks>
        <Search handleSubmit={handleSubmit} />

        <ListItem>
          <Link className="pos-relative" to="/cart">
            <BsBag color="black" size={26} />
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
    </>
  );
}

export default NavbarWeb;

function getTotal(cartItem) {
  let val = [];
  cartItem.map((product) => val.push(product.cartItem.price * product.qty));
  const total = val.reduce((a, b) => a + b, 0);
  return total;
}
