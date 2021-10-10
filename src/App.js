import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import { Switch, Route } from "react-router-dom";

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const HatPage2 = () => {
  return (
    <div>
      <p>Hallo from hats</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hat" component={HatPage} />
        <Route path="/hats" component={HatPage2} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
