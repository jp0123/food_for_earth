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
import MakeFertilizer from "./components/fertilizer/makeFertilizer";
import BinsIndex from "./components/bin/binIndex";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bins: [
        {
          user: "John Doe",
          location: {
            address: "7 Kelly Street Ultimo 2007",
            latitude: "123",
            longitude: "321"
          },
          progress: "75"
        },
        {
          user: "John Smith",
          location: {
            address: "10 Kelly Street Ulitmo 2007",
            latitude: "123",
            longitude: "321"
          },
          progress: "80"
        }
      ]
    };
  }

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
          <Route exact path="/make-fertilizer" component={MakeFertilizer} />
          <Route
            exact
            path="/bins"
            render={() => <BinsIndex bins={this.state.bins} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
