import React from "react";
import logo from "./logo.svg";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "../node_modules/react-router-dom";

import Navbar from "./components/Navbar.js";
import ContactMain from "./views/ContactMain.js";
import HomeMain from "./views/HomeMain.js";
import Footer from "./components/Footer.js";

import "./App.css";

class App extends React.Component {
  render() {
    const { match, location, history } = this.props;
    console.log(this.props.location);

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route exact path="/contact" component={ContactMain} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
