import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, NavLink } from "reactstrap";

import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <p className="logo">Demo</p>
          <NavLink>
            <Link to={""}>Home</Link>
          </NavLink>
          <NavLink>
            <Link to={"/about"}>About</Link>
          </NavLink>
          <NavLink>
            <Link to={"/contact"}>Contact</Link>
          </NavLink>
        </Nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
