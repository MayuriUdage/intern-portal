// src/components/Dashboard.js
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://intern-portal-p3lt.onrender.com/api/intern-data")
      .then((res) => setData(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!data) return <p className="loading">Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h2>Hello, {data.name}</h2>
      <div className="info-box">
        <p><strong>Referral Code:</strong> {data.referralCode}</p>
        <p><strong>Donations:</strong> ${data.donations}</p>
      </div>

      <h3 className="reward-title">Rewards</h3>
      <div className="rewards">
        {data.rewards.map((reward, index) => (
          <div className="reward-card" key={index}>
            🎁 {reward}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


