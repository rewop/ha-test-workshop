import React from "react";
import { ApiContext, newApi } from "./api";
import { BrowserRouter as Router } from "react-router-dom";

import Root from "./Root";

function App() {
  return (
    <Router>
      <ApiContext.Provider value={newApi()}>
        <Root />
      </ApiContext.Provider>
    </Router>
  );
}

export default App;
