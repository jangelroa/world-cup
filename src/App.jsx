import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MatchesList from "./components/MatchesList";
import TeamScores from "./components/Teamscores";
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
        <Route path="/matches">
          <MatchesList />
        </Route>
        <Route path="/team-scores">
          <TeamScores />
        </Route>
        <Route path="/user-scores">
          <UserScores />
        </Route>
        <Route path="/add-pool">
          <AddPool />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
