import React from "react";
import { Link } from "react-router-dom";
import { StyleBreadCrumb } from "./StyleBreadCrumb";

function BreadCrumb({ category }) {
  return (
    <StyleBreadCrumb>
      <Link to="/">Home</Link>
      <Link to={`/categories/` + category.slug} title={category.name}>
        {category.name}
      </Link>
    </StyleBreadCrumb>
  );
}

export default BreadCrumb;
