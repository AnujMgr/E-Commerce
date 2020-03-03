import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Wrapper from "./Components/Base/BaseStyle/Wrapper";
import BaseLayout from "./Components/BaseLayout";

import Categories from "./Components/Pages/Categories";
import Home from "./Components/Pages/HomePage";
import SingleProduct from "./Components/Pages/SingleProduct";

import Header from "./Components/Header";
import Cart from "./Components/Pages/Cart";
import "./index.css";
import CartProvider from "./Components/ContextApi/CartProvider";

const App = () => {
  const ProductPage = ({ match }) => {
    return <SingleProduct productSlug={match.params.slug} />;
  };
  const CategoryPage = ({ match }) => {
    return <Categories categorySlug={match.params.slug} />;
  };
  // const CartPage = cart => {
  //   return <Cart cart={cart} />;
  // };
  return (
    <BrowserRouter>
      <CartProvider>
        <BaseLayout>
          <Switch>
            <Wrapper>
              <Route path="/" component={Header} exact />
              <Route path="/" component={Home} exact />
              <Route path="/cart" component={Cart} exact />
              <Route path="/categories/:slug" component={CategoryPage} exact />
              <Route path="/product/:slug" component={ProductPage} exact />
            </Wrapper>
          </Switch>
        </BaseLayout>
      </CartProvider>
    </BrowserRouter>
  );
};
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

export default App;
