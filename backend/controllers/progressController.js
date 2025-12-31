const db = require("../config/db");

const getProgress = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT date, meals_completed FROM user_progress WHERE user_id = ? ORDER BY date ASC",
      [req.user.id]
    );

    // Convert to 7-day array (Mon → Sun)
    const week = [0, 0, 0, 0, 0, 0, 0];

    rows.forEach((r) => {
      const day = new Date(r.date).getDay(); // 0=Sun,6=Sat
      const index = day === 0 ? 6 : day - 1; // shift so Mon=0
      week[index] = r.meals_completed;
    });

    res.json({ weeklyMeals: week });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProgress = async (req, res) => {
  try {
    const { date, meals_completed } = req.body;

    await db.execute(
      `INSERT INTO user_progress (user_id, date, meals_completed)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE meals_completed = VALUES(meals_completed)`,
      [req.user.id, date, meals_completed]
    );

    res.json({ message: "Progress saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProgress, updateProgress };
