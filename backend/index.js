const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/intern-data", (req, res) => {
  res.json({
    name: "Jane Doe",
    referralCode: "janedoe2025",
    donations: 1500,
    rewards: ["Bronze Badge", "Free T-shirt"],
    leaderboard: [
      { name: "Alice", donations: 2000 },
      { name: "Jane Doe", donations: 1500 },
      { name: "Bob", donations: 1200 },
    ],
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
