import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
import About from "./components/layout/about";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Fertilizer from "./components/fertilizer/fertilizer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/fertilizer" component={Fertilizer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
