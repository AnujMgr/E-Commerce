import React from "react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  MegaMenu,
  SingleMega,
  SingleMegaTitle,
  MenuLink,
  SubCategoryList,
  ListItem,
  Overlay
} from "../NavBarStyle";

const Dropdown = props => {
  const { title, subcategory, slug } = props.category;
  return (
    <DropdownMenu>
      <MenuLink to={"/categories/" + slug}>{title}</MenuLink>
      <MegaMenu>
        {subcategory.map(category => {
          return (
            <SingleMega key={category.id}>
              <SingleMegaTitle>{category.title}</SingleMegaTitle>
              <SubCategoryList>
                {category.SubCategory.map(subCat => {
                  return (
                    <ListItem key={subCat.id}>
                      <Link to="">{subCat.title}</Link>
                    </ListItem>
                  );
                })}
              </SubCategoryList>
            </SingleMega>
          );
        })}
      </MegaMenu>
      <Overlay />
    </DropdownMenu>
  );
};

export default React.memo(Dropdown);
