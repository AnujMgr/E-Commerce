import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ category }) {
  return (
    <BreadCrumb>
      <Link to="/">Home</Link>
      {category.map((category) => {
        <Link to={`/Category/` + category.slug} title={category.name}>
          {category.name}
        </Link>;
      })}
    </BreadCrumb>
  );
}

export default BreadCrumb;
