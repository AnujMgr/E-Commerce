import React, { Component } from "react";

import data from "../data";
import { FormatNumber } from "./Modules";

const AppContext = React.createContext();
//If you only want to avoid passing some props
//through many levels. Context is designed to share
//data that can be considered “global” for a tree of
//React components, such as the current authenticated user, theme, or preferred language.”
class AppProvider extends Component {
  state = {
    cartProducts: [],
    products: [],
    categories: [],
    cateProducts: [],
    singleProduct: []
  };

  componentDidMount = () => {
    const cartProducts = localStorage.getItem("cartProducts");
    this.setState({ products: data.products });
    this.setState({ categories: data.categories });

    if (cartProducts) {
      const savedProducts = JSON.parse(cartProducts);
      this.setState({ cartProducts: savedProducts });
    }
  };

  handleAddToCart = async (product, size, color) => {
    const newCartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.image,
      discount: product.discount,
      brand: product.brand,
      star: product.star,
      noOfOrder: product.noOfOrder,
      size: size,
      color: color
    };
    await this.setState({
      cartProducts: [
        ...this.state.cartProducts.filter(
          product => product.id !== newCartProduct.id
        ),
        newCartProduct
      ]
    });

    localStorage.setItem(
      "cartProducts",
      JSON.stringify(this.state.cartProducts)
    );
  };

  handleFilter = async (filter, isChecked) => {
    console.log(filter);
    console.log(isChecked);
  };

  handleCartTotal = () => {
    var sum = 0;
    var discount = 0;
    var totalSum = 0;

    let item = this.state.cartProducts.map(product => product);
    let length = item.length;

    for (let i = 0; i < length; i++) {
      sum = sum + Number(item[i].price) * item[i].noOfOrder; //to parse value into number
      discount =
        (discount + Number(item[i].price) * (item[i].discount / 100)) *
        item[i].noOfOrder;
      totalSum = sum - discount;
    }

    return totalSum;
  };

  handleOrderSummary = () => {
    var sum = 0;
    var discount = 0;
    var totalSum = 0;

    let item = this.state.cartProducts.map(product => product);
    let length = item.length;

    for (let i = 0; i < length; i++) {
      sum = sum + Number(item[i].price) * item[i].noOfOrder; //to parse value into number
      discount =
        discount +
        Number(item[i].price * item[i].noOfOrder) * (item[i].discount / 100);
      totalSum = sum - discount;
    }

    return (
      <React.Fragment>
        <div className="flex-sb">
          <p className="m-6-0 small-text semi-bold">Cart Total</p>
          <p className="m-6-0 small-text semi-bold">
            {FormatNumber(Number(sum).toFixed(2))}
          </p>
        </div>
        <div className="flex-sb">
          <p className="m-6-0 small-text semi-bold">Cart Discount</p>
          <p className="m-6-0 small-text black-light semi-bold">
            {FormatNumber(Number(discount).toFixed(2))}
          </p>
        </div>
        <hr className="black-light" />
        <div className="flex-sb">
          <p className="m-6-0 small-text semi-bold">Total Order</p>
          <p className="m-6-0 small-text semi-bold">
            {FormatNumber(Number(totalSum).toFixed(2))}
          </p>
        </div>
      </React.Fragment>
    );
  };

  handleRating = async (element, id) => {
    await this.setState({
      products: this.state.products.map(product => {
        if (product.id === id) {
          product.star = element;
        }
        return product;
      })
    });
  };

  handleOrderIncrement = async (id, noOfOrder) => {
    console.log("increment" + id);
    let increment;
    if (noOfOrder < 5) {
      increment = noOfOrder + 1;
      await this.setState({
        products: this.state.products.map(product => {
          if (product.id === id) {
            product.noOfOrder = increment;
          }
          return product;
        })
      });
      await this.setState({
        cartProducts: this.state.cartProducts.map(product => {
          if (product.id === id) {
            product.noOfOrder = increment;
          }
          localStorage.setItem(
            "cartProducts",
            JSON.stringify(this.state.cartProducts)
          );
          return product;
        })
      });
    } else {
      increment = noOfOrder;
    }
  };

  handleOrderDecrement = async (id, noOfOrder) => {
    let decrement;
    if (noOfOrder > 1) {
      decrement = noOfOrder - 1;
      await this.setState({
        products: this.state.products.map(product => {
          if (product.id === id) {
            product.noOfOrder = decrement;
          }
          return product;
        })
      });
      await this.setState({
        cartProducts: this.state.cartProducts.map(product => {
          if (product.id === id) {
            product.noOfOrder = decrement;
          }
          return product;
        })
      });
    } else {
      decrement = noOfOrder;
    }
  };

  handleMinMaxPrice = async () => {};

  removeCartItem = async id => {
    await this.setState({
      cartProducts: [
        ...this.state.cartProducts.filter(product => product.id !== id)
      ]
    });

    localStorage.setItem(
      "cartProducts",
      JSON.stringify(this.state.cartProducts)
    );
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleAddToCart: this.handleAddToCart,
          handleOrderSummary: this.handleOrderSummary,
          handleRating: this.handleRating,
          handleOrderIncrement: this.handleOrderIncrement,
          handleOrderDecrement: this.handleOrderDecrement,
          handleSingleProduct: this.handleSingleProduct,
          removeCartItem: this.removeCartItem,
          handleFilter: this.handleFilter,
          handleCartTotal: this.handleCartTotal
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
