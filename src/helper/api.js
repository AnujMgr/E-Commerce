import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_url = process.env.REACT_APP_API_URL;
  }

  init = () => {
    let headers = {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_HOST,
    };

    this.client = axios.create({
      baseURL: this.api_url,
      headers: headers,
    });

    return this.client;
  };

  getCategories = (params) => {
    return this.init().get("/categories/list", { params: params });
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}
