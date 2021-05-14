import React from "react";
import { useSelector } from "react-redux";
import { BreadCrumb } from "../../Components/Modules";
import { StyleHeader } from "./CategoryStyle";

function Header() {
  const category = useSelector((state) => state.category);

  return (
    <StyleHeader>
      <BreadCrumb category={category} page={"Category"} />
      <h1>{category.name}</h1>
    </StyleHeader>
  );
}

export default Header;
