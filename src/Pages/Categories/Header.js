import React from "react";
import { useSelector } from "react-redux";
import { BreadCrumb } from "../../Components/Modules";
import { StyleHeader, StyleOverlay } from "./CategoryStyle";

function Header() {
  const category = useSelector((state) => state.category);
  return (
    <StyleHeader image={category.image}>
      <BreadCrumb category={category} page={"Category"} />
      <h1>{category.name}</h1>
      <StyleOverlay></StyleOverlay>
    </StyleHeader>
  );
}

export default Header;
