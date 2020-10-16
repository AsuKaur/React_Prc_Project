import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Packages from "./Components/pages/Packages";
import Places from "./Components/pages/Places";
import Contact from "./Components/pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/places" exact component={Places}></Route>
          <Route path="/packages" exact component={Packages}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
