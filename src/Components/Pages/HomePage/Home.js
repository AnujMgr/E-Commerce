import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleCategoryHeader, StyleCategoryTitle } from "./HomeStyle";
import Banner from "./Component/Banner";
import { useDispatch, useSelector } from "react-redux";
import CategoryProductsList from "./Component/CategoryProductsList";
import {
  FluidImage,
  GridContainer,
  Wrapper,
  FeatureCard,
} from "./HomeStyle/HomeStyle";
import Api from "../../../helper/api";
import { setCategories } from "../../../redux/categories/categories-actions";
import { namedRequestsInProgress } from "../../../redux/RequestHandler/request-selectors";
import RequestsEnum from "../../../redux/RequestHandler/request-list";
import {
  requestStarted,
  requestFinished,
  requestFailed,
} from "../../../redux/RequestHandler/request-actions";

const Home = () => {
  const api = new Api();
  const dispatch = useDispatch();
  // const [activeMenu, setActiveMenu] = useState("men");
  const categories = useSelector((state) => state);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/categories/list",
    params: { country: "US", lang: "en-US" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_HOST,
    },
  };

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(requestStarted(RequestsEnum.getCategories));

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          dispatch(setCategories(response.data));
          dispatch(requestFinished(RequestsEnum.getCategories));
        })
        .catch(function (error) {
          const name = RequestsEnum.getCategories;
          dispatch(requestFailed({ name, error }));
        });
      // await requestHelper(dispatch, RequestsEnum.getCategories, async () => {
      //   const result = await api.getCategories();
      //   console.log(result);
      //   dispatch(setCategories(result));
      // });
    };
    fetchProducts();
  }, []);

  const [loading, setLoading] = useState(false);

  console.log(loading);

  // const [categories, setCategories] = useState([]);

  return (
    <React.Fragment>
      <Banner />

      <CategoryProductsList />

      <Wrapper>
        <GridContainer>
          <FeatureCard>
            <FluidImage src="/images/swimStyles.jpg" />
            <h1>SWIM STYLES</h1>
            <p>Summer is Comming</p>
          </FeatureCard>
          <FeatureCard>
            <FluidImage src="/images/jeans.webp" />
            <h1>SWIM STYLES</h1>
            <p>Summer is Comming</p>
          </FeatureCard>

          <FeatureCard>
            <FluidImage src="/images/loafers.webp" />
            <h1>SWIM STYLES</h1>
            <p>Summer is Comming</p>
          </FeatureCard>
          <FeatureCard>
            <FluidImage src="/images/jewelry.webp" />
            <h1>SWIM STYLES</h1>
            <p>Summer is Comming</p>
          </FeatureCard>
        </GridContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default React.memo(Home);
