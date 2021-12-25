import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_url = process.env.REACT_APP_API_URL;
  }

  init = () => {
    this.client = axios.create({
      baseURL: this.api_url,
      // headers: headers,
    });

    return this.client;
  };

  getCategories = () => {
    return this.init().get("/categories");
  };

  getCategoryBySlug = (slug) => {
    return this.init().get(`/categories?slug=${slug}`);
  };

  getProductByCategory = (slug, page, limit) => {
    return this.init().get(
      `products?category=${slug}&&_page=${page}&_limit=${limit}`
    );
  };

  getCurrentProduct = (slug) => {
    return this.init().get(`/products?slug=${slug}`);
  };

  getSearchedProduct = (query) => {
    return this.init().get(`/products?q=${query}`);
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}
