const Leaderboard = ({ data }) => (
  <div>
    <h3>Leaderboard</h3>
    <ol>
      {data?.leaderboard?.map((entry, i) => (
        <li key={i}>{entry.name} - ${entry.donations}</li>
      ))}
    </ol>
  </div>
);
export default Leaderboard;
