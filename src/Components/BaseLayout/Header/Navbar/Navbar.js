import React from "react";
import { NavBar, StyleWrapper } from "./StyleNavbar";
import NavbarMobile from "./NavbarMobile";
import NavbarWeb from "./NavbarWeb";

const Navbar = () => {
  // const [activeMenu, setActiveMenu] = useState("men");

  return (
    <>
      <StyleWrapper
        position="fixed"
        bgColor="#fffffff5"
        boxShadow="1px 19px 24px -5px rgb(195 207 255 / 18%)"
      >
        <NavBar>
          <NavbarMobile />
          <NavbarWeb />
        </NavBar>
      </StyleWrapper>
    </>
  );
};

export default React.memo(Navbar);
