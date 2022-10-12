import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Rules from "./components/pages/rules";
import TeamScores from "./components/pages/teamscores";
import UserScores from "./components/pages/userscores";
import AddPool from "./components/pages/addpool";

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
      </Switch>
    </Router>
  );
}

export default App;
