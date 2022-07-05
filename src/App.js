import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Recomendations from "./Recomendation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Recomendations />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// export default App;
