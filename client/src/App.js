import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "../node_modules/react-router-dom";
import { StickyContainer, } from "react-sticky";
import NewNav from "./components/NewNav";
import ContactMain from "./views/ContactMain.js";
import AboutMain from "./views/AboutMain.js";
import HomeMain from "./views/HomeMain.js";
import ElectionsMain from "./views/ElectionsMain.js";
import ServicesMain from "./views/ServicesMain.js";
import GovernanceMain from "./views/GovernanceMain.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import Register from "./components/Register";
import Onboarding from "./views/Onboarding";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";
class App extends React.Component {
  componentDidMount() {
    /*
    axios
      .get(baseURL + "/api/calendar")
      .then(response => {
        console.log("GET to /calendar success!");
        if (response.data.length === 0) {
          console.log("no data");
        } else {
          console.log(response.data);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get(baseURL + "/api/calendar/:" + "9" + "-:" + "1")
      .then(response => {
        console.log("GET to /calendar/dates success!");
        if (response.data.length === 0) {
          console.log("oops");
        } else {
          console.log(response.data);
        }
      })
      .catch(function(error) {
        console.log(error);
      });*/
  }
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div className="App">
            <StickyContainer>
              {window.location.pathname !== "/" ? (
                <>
                  <NewNav /> <br />
                </>
              ) : (
                ""
              )}
              <Switch>
                <Route exact path="/" component={Onboarding} />
                <Route exact path="/home" component={HomeMain} />
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
                <Route
                  exact
                  path="/governance/constitution"
                  render={props => (
                    <GovernanceMain {...props} element="constitution" />
                  )}
                />
                <Route
                  exact
                  path="/governance/meeting_minutes"
                  render={props => (
                    <GovernanceMain {...props} element="meeting" />
                  )}
                />
                <Route
                  exact
                  path="/elections"
                  render={props => <ElectionsMain {...props} element="main" />}
                />
                <Route
                  exact
                  path="/elections/handbook"
                  render={props => (
                    <ElectionsMain {...props} element="handbook" />
                  )}
                />
                <Route
                  exact
                  path="/elections/candidates"
                  render={props => (
                    <ElectionsMain {...props} element="candidates" />
                  )}
                />
                <Route
                  exact
                  path="/elections/complaints"
                  render={props => (
                    <ElectionsMain {...props} element="complaints" />
                  )}
                />
                <Route exact path="/services" component={ServicesMain} />
                <Route exact path="/contact" component={ContactMain} />
                <Route exact path="/governance" component={GovernanceMain} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </StickyContainer>
            {window.location.pathname !== "/" ? <Footer /> : ""}
          </div>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
