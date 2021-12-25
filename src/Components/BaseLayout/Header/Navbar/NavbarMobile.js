import React, { useState } from "react";
import { BsArrowLeftShort, BsBag, BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { StylePrimaryButton } from "../../../../utils/CommonStyle";
import Sidebar from "./Sidebar";
import {
  ListItem,
  StyleCartBadge,
  StyleCartTotal,
  StyleLeftNavSM,
  StyleRightNavSM,
} from "./StyleNavbar";

function NavbarMobile() {
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const category = useSelector((state) => state.category);
  const { catProducts } = useSelector((state) => state.catProducts);
  const cartItem = useSelector((state) => state.cart.cart);
  const { cart } = useSelector((state) => state.cart);

  function handleSideBar(open) {
    setOpen(open);
  }
  return (
    <>
      <StyleLeftNavSM>
        {location.pathname === "/" ? (
          <>
            <ListItem>
              <StylePrimaryButton
                border="0"
                bgColor="#ffffff00"
                hoverBgColor="#ffffff00"
                hoverColor="#000"
                onClick={(e) => handleSideBar(!open)}
              >
                <FiMenu size={25} />
              </StylePrimaryButton>
            </ListItem>
            <ListItem>
              <Link to={`/`}>
                <p>HOME</p>
              </Link>
            </ListItem>{" "}
          </>
        ) : (
          <>
            <ListItem>
              <Link to={`/`}>
                <BsArrowLeftShort size={35} />
              </Link>
            </ListItem>
            <ListItem>
              <div>
                <h4>{category.name}</h4>
                <p>{catProducts.count} items</p>
              </div>
            </ListItem>
          </>
        )}
      </StyleLeftNavSM>
      <StyleRightNavSM>
        <ListItem>
          <BsSearch size="24" onClick={(e) => history.push("/search/q")} />
        </ListItem>
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
      </StyleRightNavSM>
      <Sidebar open={open} handleSidebar={handleSideBar} />
    </>
  );
}

export default NavbarMobile;

function getTotal(cartItem) {
  let val = [];
  cartItem.map((product) => val.push(product.cartItem.price * product.qty));
  const total = val.reduce((a, b) => a + b, 0);
  return total;
}
