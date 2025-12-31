const db = require("../config/db");

const MealPlan = {
  getUserMealPlan: async (userId) => {
    const [rows] = await db.execute(
      `SELECT mp.id, mp.day, r.id AS recipeId, r.name, r.type, r.image
       FROM mealplans mp
       JOIN recipes r ON mp.recipe_id = r.id
       WHERE mp.user_id = ?`,
      [userId]
    );

    return rows.map(r => ({
      mealplanId: r.id,
      day: r.day,
      recipe: {
        id: r.recipeId,
        name: r.name,
        type: r.type,
        image: r.image
      }
    }));
  },

  addMealPlan: async (userId, recipeId, day) => {
    const [res] = await db.execute(
      "INSERT INTO mealplans (user_id, recipe_id, day) VALUES (?, ?, ?)",
      [userId, recipeId, day]
    );
    return res.insertId;
  },

  removeMealPlan: async (id, userId) => {
    const [res] = await db.execute(
      "DELETE FROM mealplans WHERE id = ? AND user_id = ?",
      [id, userId]
    );
    return res.affectedRows;
  },
};

module.exports = MealPlan;
