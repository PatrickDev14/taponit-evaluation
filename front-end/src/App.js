import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/shared/Header";
import ProductsList from "./layout/ProductsList";
import FullProductView from "./layout/FullProductView";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>
        <Route path="/:productId">
          <FullProductView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;