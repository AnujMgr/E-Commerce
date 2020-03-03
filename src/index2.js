import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./Components/BaseLayout";
import App from "./Components/App/App";
import Header from "./Components/Header";
import Home from "./Components/pages/HomePage";

import data from "./data";
import Wrapper from "./Components/Base/BaseStyle/Wrapper";

import registerServiceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout data={data}>
      <Switch>
        <Wrapper>
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={App} />
        </Wrapper>
      </Switch>
    </BaseLayout>
  </BrowserRouter>,

  document.getElementById("root")
);
registerServiceWorker();
