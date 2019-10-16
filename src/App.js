import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "HomePage";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
