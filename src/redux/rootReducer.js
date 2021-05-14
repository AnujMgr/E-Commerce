import { combineReducers } from "redux";

import cartReducer from "./cart/cart-reducer";
import {
  categoriesReducer,
  selectedCategoryReducer,
} from "./categories/categories-reducer";
import { filterReducer } from "./filter/filter-reducer";
import { catProductsReducer } from "./products/products-reducer";
import { requestReducer } from "./RequestHandler/request-reducer";

export default combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  category: selectedCategoryReducer,
  catProducts: catProductsReducer,
  requests: requestReducer,
  filter: filterReducer,
});
