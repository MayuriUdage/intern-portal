import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Dashboard />}
    </div>
  );
}

export default App;
