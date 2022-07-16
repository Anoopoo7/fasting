import React, { useState } from "react";
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
import Loader from "./widgets/loader";

export default function App() {
  const first = firstUsingApp.isFirstOpeningApp();
  const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <Loader loading={loading}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <EmptyPage first={first} setLoading={setLoading} />
            </Route>
            <Route exact path="/home" setLoading={setLoading} >
              <Homepage setLoading={setLoading} />
            </Route>
            <Route exact path="/entries">
              <Entrypage setLoading={setLoading} />
            </Route>
            <Route exact path="/entry">
              <EntryDetails setLoading={setLoading} />
            </Route>
            <Route exact path="/workout">
              <Workoutpage setLoading={setLoading} />
            </Route>
            <Route exact path="/profile">
              <ProfilePage setLoading={setLoading} />
            </Route>
            <Route exact path="/settings">
              <Settings setLoading={setLoading} />
            </Route>
          </Switch>
          {first && <Navigation />}
        </BrowserRouter>
      </Loader>
    </div>
  );
}
