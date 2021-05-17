import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_url = process.env.REACT_APP_API_URL;
  }

  init = () => {
    // let headers = {
    //   Authorization:
    //     "Bearer " +
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTYyMDQ5MjkyMiwiZXhwIjoxNjIwNDk2NTIyfQ.BcOPslhGFsnLPLX-ySSina_ou2To5BlgKFZrA8KgDgs",
    // };

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
    return this.init().get(`/products?category=${slug}&&_start=0&_limit=10}`);
  };

  getCurrentProduct = (slug) => {
    return this.init().get(`/products?slug=${slug}`);
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}
