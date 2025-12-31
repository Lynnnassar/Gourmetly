const db = require("../config/db");

const getAllRecipes = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM recipes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM recipes WHERE id = ?", [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: "Recipe not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const { name, type, ingredients, steps, image } = req.body;
    const [result] = await db.execute(
      "INSERT INTO recipes (name, type, ingredients, steps, image) VALUES (?, ?, ?, ?, ?)",
      [name, type, JSON.stringify(ingredients), JSON.stringify(steps), image]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllRecipes, getRecipeById, createRecipe };
