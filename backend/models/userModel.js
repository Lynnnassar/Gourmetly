const db = require("../config/db");

const User = {
  create: async (username, email, password) => {
    const [result] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    return result;
  },

  findByEmail: async (email) => {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return rows[0];
  },

  findById: async (id) => {
    const [rows] = await db.query(
      "SELECT id, username, email FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }
};

module.exports = User;
