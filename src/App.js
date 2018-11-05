import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsData from "./scenes/NewsData";
import Header from "./components/Header";
import Landing from "./scenes/Landing";
import NotFound from "./scenes/NotFound";
import TwitchStreamData from "./components/TwitchStreamData";
// import BackToTop from "./components/BackToTop";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <div
              className="App"
              style={{
                backgroundColor: "black"
              }}
            >
              <Header />
              {/* <BackToTop /> */}
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/News" component={NewsData} />
                <Route path="/Streams" component={TwitchStreamData} />
                <Route path="/twitch-auth/" component={TwitchStreamData} />
                <Route
                  path="localhost:3000/twitch-auth/"
                  component={TwitchStreamData}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
