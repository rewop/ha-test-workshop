import * as React from "react";
import { Switch, Route } from "react-router";

import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
// import Listing from "./pages/Listing";
// import NewListing from "./pages/NewListing";

function Root() {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      {/* <Route path="/listing/:id" component={Listing} /> */}
      {/* <Route path="/new" component={NewListing} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Root;
