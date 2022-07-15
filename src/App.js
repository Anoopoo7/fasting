import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import Navigation from "./widgets/navigations/navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrypage from "./pages/entrypage";
import EntryDetails from "./pages/entryDetails";
import Workoutpage from "./pages/workoutpage";
import ProfilePage from "./pages/profilePage";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/entries">
            <Entrypage />
          </Route>
          <Route exact path="/entry">
            <EntryDetails />
          </Route>
          <Route exact path="/workout">
            <Workoutpage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}
