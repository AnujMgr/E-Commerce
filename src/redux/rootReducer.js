import { combineReducers } from "redux";

import cartReducer from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { catProductsReducer } from "./products/products-reducer";
import { requestReducer } from "./RequestHandler/request-reducer";

export default combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  catProducts: catProductsReducer,
  requests: requestReducer,
});
