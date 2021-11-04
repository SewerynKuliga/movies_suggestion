import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
// import MoviesToWatch from "./Components/MoviesToWatch/MoviesToWatch";

function App() {
  return (
    <>
    <Main />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Movies" exact component={MoviesToWatch} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
