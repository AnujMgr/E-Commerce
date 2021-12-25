import React, { useEffect, useState } from "react";
import { GridContainer, StyleMobileMenu } from "./CategoryStyle";
import { useParams } from "react-router";
import Api from "../../helper/api";
import { useDispatch } from "react-redux";
import {
  requestFailed,
  requestFinished,
  requestStarted,
} from "../../redux/RequestHandler/request-actions";
import RequestsEnum from "../../redux//RequestHandler/request-list";
import Aside from "./Aside";
import Main from "./Main";

import Header from "./Header";
import { setFilter } from "../../redux//filter/filter-action";
import { setCatProducts } from "../../redux//products/products-actions";
import { setSelectedCategory } from "../../redux/categories/categories-actions";
import { BiSort, BiSlider } from "react-icons/bi";

const Categories = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const api = new Api();
  // const page = 1;
  // const limit = 8;
  const RequestCategories = RequestsEnum.getCurrentCategory;
  const RequestProducts = RequestsEnum.getCatProducts;

  // const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);

  const items = ["Samsung", "Nokia", "LG"];

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

  dispatch(requestStarted(RequestProducts));
  useEffect(() => {
    items.map((name) => dispatch(setFilter({ name, isChecked: false })));

    const fetchCurrentCategory = async (slug) => {
      dispatch(requestStarted(RequestCategories));
      api
        .getCategoryBySlug(slug)
        .then((response) => {
          dispatch(setSelectedCategory(...response.data));
          dispatch(requestFinished(RequestCategories));
        })
        .catch(function (error) {
          console.log(error);
          dispatch(requestFailed(RequestCategories, error));
        });
    };

    const fetchProducts = async (slug, page, limit) => {
      dispatch(requestStarted(RequestProducts));
      api
        .getProductByCategory(slug, page, limit)
        .then((response) => {
          const count = response.headers["x-total-count"];
          const catProducts = response.data;
          dispatch(setCatProducts({ catProducts, count }));
          dispatch(requestFinished(RequestProducts));
        })
        .catch(function (error) {
          dispatch(requestFailed(RequestProducts, error));
          console.log(error);
        });
    };

    fetchCurrentCategory(slug, page, limit);

    fetchProducts(slug, page, limit);
  }, [slug]);

  return (
    <React.Fragment>
      <Header />
      <GridContainer>
        <Aside />
        <Main handlePageClick={handlePageClick} currentPage={page} />
      </GridContainer>
      <StyleMobileMenu>
        <button>
          <BiSort />
          <span>Sort</span>
        </button>
        <button>
          <BiSlider />
          <span>Filter</span>
        </button>
      </StyleMobileMenu>
    </React.Fragment>
  );
};

export default Categories;
