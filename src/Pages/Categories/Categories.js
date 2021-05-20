import React, { useEffect, useState } from "react";
import { GridContainer } from "./CategoryStyle";
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

const Categories = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const api = new Api();
  // const page = 1;
  // const limit = 8;
  const RequestCategories = RequestsEnum.getCategories;
  const RequestProducts = RequestsEnum.getCatProducts;

  // const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);

  const items = ["Samsung", "Nokia", "LG"];

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

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

    fetchCurrentCategory(slug, page, limit);
  }, [slug]);

  useEffect(() => {
    const fetchProducts = async (slug, page, limit) => {
      dispatch(requestStarted(RequestProducts));
      api
        .getProductByCategory(slug, page, limit)
        .then((response) => {
          dispatch(setCatProducts(response.data));
          dispatch(requestFinished(RequestProducts));
        })
        .catch(function (error) {
          dispatch(requestFailed(RequestProducts, error));
          console.log(error);
        });
    };
    fetchProducts(slug, page, limit);
  }, [slug]);

  return (
    <React.Fragment>
      <Header />
      <GridContainer>
        <Aside />
        <Main handlePageClick={handlePageClick} currentPage={page} />
      </GridContainer>
    </React.Fragment>
  );
};

export default Categories;
