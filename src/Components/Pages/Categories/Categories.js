import React, { useContext, useEffect, useState } from "react";

import { Card, BreadCrumb, SortOption } from "../../Modules";
import {
  StyleFilterContainer,
  StyleFilterTitle,
  StyleCategoryTitle,
  StyleInputFilter,
} from "./CategoryStyle";
import { setCatProducts } from "../../../redux/products/products-actions";
import { useParams } from "react-router";
import axios from "axios";
import Api from "../../../helper/api";
import { useDispatch } from "react-redux";
import {
  requestFailed,
  requestFinished,
  requestStarted,
} from "../../../redux/RequestHandler/request-actions";
import RequestsEnum from "../../../redux/RequestHandler/request-list";

const Categories = () => {
  // const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { slug } = useParams();
  const api = new Api();
  const dispatch = useDispatch();
  const page = 1;
  const limit = 8;

  const requestName = RequestsEnum.getCatProducts;

  useEffect(() => {
    const fetchCategoriesById = async (slug, page, limit) => {
      dispatch(requestStarted(requestName));
      api
        .getProductByCategory(slug, page, limit)
        .then((response) => {
          dispatch(setCatProducts(response.data));
          dispatch(requestFinished(requestName));
        })
        .catch(function (error) {
          console.log(error);
          dispatch(requestFailed(requestName));
        });
    };
    fetchCategoriesById(slug, page, limit);
  }, []);

  return (
    <React.Fragment>
      {!isLoading ? (
        <React.Fragment>
          <BreadCrumb category={product.category} />

          <div className="row">
            <StyleFilterContainer className="col-12 col-md-2">
              <div className="bottom-border">
                <h5 className="medium-text m-6-0 weight-300">FILTERS</h5>
              </div>

              <StyleFilterTitle> BRAND </StyleFilterTitle>

              <div className="border-bottom p-b-10"></div>
              <div className="border-bottom p-b-10">
                <StyleFilterTitle>PRICE</StyleFilterTitle>
                <div className="flex">
                  <StyleInputFilter placeholder="min" /> -
                  <StyleInputFilter placeholder="max" />
                  <button className="btn-danger m-l-auto"> GO </button>
                </div>
              </div>
            </StyleFilterContainer>

            <div className="col-12 col-md-10">
              <div className="d-flex justify-content-between bottom-border">
                <div>
                  <StyleCategoryTitle>SmartPhones / Mobiles</StyleCategoryTitle>
                  <p className="black-light small-text">
                    {product.length} items found in Mobiles
                  </p>
                </div>
                <SortOption />
              </div>

              <div className="grid-container">
                {product.map((prod) => (
                  <Card key={prod.id} product={prod} width="100" />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <h6>Loading....</h6>
      )}
    </React.Fragment>
  );
};

export default Categories;
