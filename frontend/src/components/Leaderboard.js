// src/components/Leaderboard.js
import "../styles/LeaderBoard.css";

const Leaderboard = () => {
  const dummyData = [
    { name: "Nikita", donations: 2600 },
    { name: "Monali", donations: 2500 },
    { name: "Rutuja", donations: 2000 },
    { name: "Khiti", donations: 1800 },
    { name: "Kausar", donations: 1600 },
  ];

  return (
    <div className="leaderboard">
      <h3>Top Performers</h3>
      <ol>
        {dummyData.map((entry, i) => (
          <li key={i}>
            <span className="rank">{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`}</span>
            {entry.name} — <strong>${entry.donations}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
