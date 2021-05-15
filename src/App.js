import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Categories from "./Pages/Categories";
import Home from "./Pages/HomePage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import CartProvider from "./Components/ContextApi/CartProvider";
import { Navbar } from "./Components/BaseLayout";
import "./index.css";
import { useDispatch } from "react-redux";
import Api from "./helper/api";
import {
  requestFailed,
  requestFinished,
  requestStarted,
} from "./redux/RequestHandler/request-actions";
import RequestsEnum from "./redux/RequestHandler/request-list";
import { setCategories } from "./redux/categories/categories-actions";

const App = () => {
  const api = new Api();
  const dispatch = useDispatch();
  const requestName = RequestsEnum.getCategories;

  useEffect(() => {
    const fetchCategories = () => {
      console.log("I am fetching Categories");
      dispatch(requestStarted(requestName));
      api
        .getCategories()
        .then((response) => {
          dispatch(setCategories(response.data));
          dispatch(requestFinished(requestName));
        })
        .catch(function (error) {
          console.log(error);
          dispatch(requestFailed(requestName));
        });
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/categories/:slug" component={Categories} exact />
          <Route path="/product/:slug" component={SingleProduct} exact />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
