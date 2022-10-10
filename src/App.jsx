import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rules from "./pages/rules";
import TeamScores from "./pages/teamscores";
import UserScores from "./pages/userscores";
import AddPool from "./pages/addpool";
// import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/team-scores">
          <TeamScores />
        </Route>
        <Route path="/user-scores">
          <UserScores />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/add-pool">
          <AddPool />
        </Route>
        {/* <Route path="/sign-up" component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;
