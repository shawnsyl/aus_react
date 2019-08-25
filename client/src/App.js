import React from "react";
import logo from "./logo.svg";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "../node_modules/react-router-dom";

import Navbar from "./components/Navbar.js";
import ContactMain from "./views/ContactMain.js";
import AboutMain from "./views/AboutMain.js";
import HomeMain from "./views/HomeMain.js";
import ElectionsMain from "./views/ElectionsMain.js";
import ServicesMain from "./views/ServicesMain.js";
import Footer from "./components/Footer.js";

import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route
              exact
              path="/about"
              render={props => <AboutMain {...props} element="main" />}
            />
            <Route
              exact
              path="/about/handbook"
              render={props => <AboutMain {...props} element="handbook" />}
            />

            <Route
              exact
              path="/about/team"
              render={props => <AboutMain {...props} element="team" />}
            />
            <Route exact path="/elections" component={ElectionsMain} />
            <Route exact path="/services" component={ServicesMain} />
            <Route exact path="/contact" component={ContactMain} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
