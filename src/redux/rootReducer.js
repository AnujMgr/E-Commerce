import { combineReducers } from "redux";

import cartReducer from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/categories-reducer";

export default combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});
