const db = require("../config/db");

const Progress = {
  getByUser: async (userId) => {
    const [rows] = await db.query(
      "SELECT * FROM user_progress WHERE user_id = ? ORDER BY date DESC",
      [userId]
    );
    return rows;
  },

  upsert: async (
    userId,
    date,
    meals_planned,
    meals_completed,
    calories_consumed
  ) => {
    const [result] = await db.query(
      `INSERT INTO user_progress
       (user_id, date, meals_planned, meals_completed, calories_consumed)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       meals_planned = VALUES(meals_planned),
       meals_completed = VALUES(meals_completed),
       calories_consumed = VALUES(calories_consumed)`,
      [userId, date, meals_planned, meals_completed, calories_consumed]
    );
    return result;
  }
};

module.exports = Progress;
