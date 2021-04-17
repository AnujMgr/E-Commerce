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
  const ProductPage = ({ match }) => {
    return (
      <ProductsProvider>
        <SingleProduct productSlug={match.params.slug} />
      </ProductsProvider>
    );
  };
  const CategoryPage = ({ match }) => {
    return (
      <ProductsProvider>
        <Categories categorySlug={match.params.slug} />
      </ProductsProvider>
    );
  };
  const HomePage = ({ match }) => {
    return (
      <ProductsProvider>
        <Home />
      </ProductsProvider>
    );
  };

  // const CartPage = cart => {
  //   return <Cart cart={cart} />;
  // };
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Wrapper>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/categories/:slug" component={CategoryPage} exact />
            <Route path="/product/:slug" component={ProductPage} exact />
          </Wrapper>
        </Switch>
        {/* </BaseLayout> */}
        {/* <Footer /> */}
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;

// class App extends Component {
//   render() {
//     function ProductPage({ match }) {
//       return <SingleProduct productSlug={match.params.slug} />;
//     }

//     function CategoryPage({ match }) {
//       return <Categories categorySlug={match.params.slug} />;
//     }
//     return (
//       <BrowserRouter>
//         <BaseLayout>
//           <Switch>
//             <Wrapper>
//               <Route path="/" component={Header} exact />

//               <Route path="/" component={Home} exact />

//               <Route path="/cart" component={Cart} exact />

//               <Route path="/categories/:slug" component={CategoryPage} exact />

//               <Route path="/product/:slug" component={ProductPage} exact />
//             </Wrapper>
//           </Switch>
//         </BaseLayout>
//       </BrowserRouter>
//     );
//   }
// }
