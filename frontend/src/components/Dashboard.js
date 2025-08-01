import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://intern-portal-p3lt.onrender.com/api/intern-data")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {data.name}</h2>
      <p>Referral Code: <strong>{data.referralCode}</strong></p>
      <p>Total Donations Raised: <strong>${data.donations}</strong></p>

      <h3>Rewards</h3>
      <ul>{data.rewards.map((r, i) => <li key={i}>{r}</li>)}</ul>
    </div>
  );
};

export default Dashboard;
