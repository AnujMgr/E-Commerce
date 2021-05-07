import React, { useEffect, useState } from "react";
import axios from "axios";
// import { StyleCategoryHeader, StyleCategoryTitle } from "./HomeStyle";
import Banner from "./Component/Banner";
import { useDispatch, useSelector } from "react-redux";
import CategoryProductsList from "./Component/CategoryProductsList";
import {
  FluidImage,
  GridContainer,
  Wrapper,
  FeatureCard,
} from "./HomeStyle/HomeStyle";
import { setCategories } from "../../../redux/categories/categories-actions";
import { namedRequestsInProgress } from "../../../redux/RequestHandler/request-selectors";
import RequestsEnum from "../../../redux/RequestHandler/request-list";
import {
  requestStarted,
  requestFinished,
  requestFailed,
} from "../../../redux/RequestHandler/request-actions";

const Home = () => {
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
