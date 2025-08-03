// src/components/Login.js
import "../styles/Login.css";

const Login = ({ onLogin }) => (
  <div className="login-container">
    <div className="login-box">
      <h2>Welcome Intern 👋</h2>
      <p>Click below to access your dashboard</p>
      <button onClick={onLogin}>Go to Dashboard</button>
    </div>
  </div>
);

export default Login;
