import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path='/'>
            <BenchIndexPage />
          </Route>
          <Route exact path='/api/benches/:benchId'>
            <BenchShowPage />
          </Route>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;