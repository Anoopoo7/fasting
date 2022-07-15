import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import Navigation from "./widgets/navigations/navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrypage from "./pages/entrypage";
import EntryDetails from "./pages/entryDetails";
import Workoutpage from "./pages/workoutpage";
import ProfilePage from "./pages/profilePage";
import EmptyPage from "./pages/emptyPage";
import firstUsingApp from "./localStorage/firstUsingApp";
import Settings from "./pages/settings";

export default function App() {
  const first = firstUsingApp.isFirstOpeningApp();
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <EmptyPage first={first} />
          </Route>
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
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
        {first && <Navigation />}
      </BrowserRouter>
    </div>
  );
}
