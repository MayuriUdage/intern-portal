// src/App.js
import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <>
          <Dashboard />
          <Leaderboard />
        </>
      )}
    </div>
  );
}

export default App;
