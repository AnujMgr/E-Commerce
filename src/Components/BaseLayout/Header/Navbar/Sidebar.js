import React, { useState } from "react";
import { StyleSideBar, StyleOverlay } from "./StyleNavbar";

function Sidebar({ open, handleSidebar }) {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <StyleSideBar open={open}>
        <h1>SideBar</h1>
      </StyleSideBar>
      <StyleOverlay
        open={open}
        onClick={(e) => handleSidebar(!open)}
      ></StyleOverlay>
    </>
  );
}

export default Sidebar;
