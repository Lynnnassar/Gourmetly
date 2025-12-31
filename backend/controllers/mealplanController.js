const db = require("../config/db");

const getMealPlan = async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT mp.id, mp.day, r.id AS recipeId, r.name, r.type, r.image
       FROM mealplans mp
       JOIN recipes r ON mp.recipe_id = r.id
       WHERE mp.user_id = ?`,
      [req.user.id]
    );

    const formatted = rows.map(r => ({
      mealplanId: r.id,
      day: r.day,
      recipe: {
        id: r.recipeId,
        name: r.name,
        type: r.type,
        image: r.image
      }
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


const addToMealPlan = async (req, res) => {
  try {
    const { recipe_id, day } = req.body;

    if (!recipe_id || !day) {
      return res.status(400).json({ message: "recipe_id and day are required" });
    }

    const [result] = await db.execute(
      "INSERT INTO mealplans (user_id, recipe_id, day) VALUES (?, ?, ?)",
      [req.user.id, recipe_id, day]
    );

    const [rows] = await db.execute(
      `SELECT mp.id, mp.day, r.id AS recipeId, r.name, r.type, r.image
       FROM mealplans mp
       JOIN recipes r ON mp.recipe_id = r.id
       WHERE mp.id = ?`,
      [result.insertId]
    );

    const r = rows[0];

    res.json({
      mealplanId: r.id,
      day: r.day,
      recipe: {
        id: r.recipeId,
        name: r.name,
        type: r.type,
        image: r.image
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const removeFromMealPlan = async (req, res) => {
  try {
    const { id } = req.params;

    await db.execute(
      "DELETE FROM mealplans WHERE id = ? AND user_id = ?",
      [id, req.user.id]
    );

    res.json({ message: "Removed from meal plan" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMealPlan,
  addToMealPlan,
  removeFromMealPlan,
};
