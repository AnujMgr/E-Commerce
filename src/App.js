import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Wrapper from "./Components/Base/BaseStyle/Wrapper";
// import BaseLayout from "./Components/BaseLayout";

import Categories from "./Components/Pages/Categories";
import Home from "./Components/Pages/HomePage";
import SingleProduct from "./Components/Pages/SingleProduct";
import Cart from "./Components/Pages/Cart";
import CartProvider from "./Components/ContextApi/CartProvider";
import ProductsProvider from "./Components/ContextApi/ProductsProvider";
import { Navbar } from "./Components/BaseLayout";
import "./index.css";

const App = () => {
  // const ProductPage = ({ match }) => {
  //   return (
  //     <ProductsProvider>
  //       <SingleProduct productSlug={match.params.slug} />
  //     </ProductsProvider>
  //   );
  // };
  // const CategoryPage = ({ match }) => {
  //   return (
  //     <ProductsProvider>
  //       <Categories categorySlug={match.params.slug} />
  //     </ProductsProvider>
  //   );
  // };
  // const HomePage = ({ match }) => {
  //   return (
  //     <ProductsProvider>
  //       <Home />
  //     </ProductsProvider>
  //   );
  // };

  // const CartPage = cart => {
  //   return <Cart cart={cart} />;
  // };
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
