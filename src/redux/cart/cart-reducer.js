import { ActionTypes } from "./cart-types";

const INITIAL_STATE = {
  products: [
    {
      id: "1",
      slug: "iphone-7",
      title: "iPhone 7",
      star: "4",
      price: "900.2",
      discount: "15",
      category: "electronics",
      brand: "Apple",
      image: "/images/iphone.png",
      isInCart: false,
      noOfOrder: 1,
      color: ["red", "green", "blue"],
      size: ["32", "24", "44"],
    },
  ],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      //Get the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);

      //Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ActionTypes.MODIFY_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
