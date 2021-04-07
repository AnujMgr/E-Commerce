import React, { useContext } from "react";
import { StyleLeftNavLinks, ListItem, BrandLogo } from "../NavBarStyle";
import Dropdown from "./dropdown";
import Search from "./search";
// import { CategoriesContext } from "../../../ContextApi/CategoriesContext";
import { CategoriesContext } from "../../../ContextApi/CategoriesContext";

const LeftNavLinks = () => {
  console.log("Left Nav Links");
  const { categories } = useContext(CategoriesContext);
  // const { categories } = props;
  return (
    <StyleLeftNavLinks>
      <ListItem>
        <BrandLogo to="/">Logo</BrandLogo>
      </ListItem>

      <React.Fragment>
        {categories.map(category => (
          <ListItem key={category.id}>
            <Dropdown category={category} key={category.id} />
          </ListItem>
        ))}
      </React.Fragment>

      <ListItem>
        <Search />
      </ListItem>
    </StyleLeftNavLinks>
  );
};

export default React.memo(LeftNavLinks);
