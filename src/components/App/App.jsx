import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Landing from "../Landing/Landing";
import Admin from "../Admin/Admin";

// ALL I DO IS ROUTE

// ALL DAY E'RRY DAY

// ASK ME HOW LONG I CAN ROUTE FOR

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/supported" component={Supported} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
        <Route path="/success" component={Success} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

// TOLD YOU

export default App;
