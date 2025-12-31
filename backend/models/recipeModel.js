const db = require("../config/db");

exports.getAllRecipes = async () => {
  const [rows] = await db.execute("SELECT * FROM recipes");
  return rows;
};

exports.getRecipeById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM recipes WHERE id = ?", [id]);
  if (!rows.length) return null;

  const recipe = rows[0];
  return {
    ...recipe,
    ingredients: JSON.parse(recipe.ingredients),
    steps: JSON.parse(recipe.steps),
  };
};

exports.createRecipe = async ({ title, ingredients, steps }) => {
  const [result] = await db.execute(
    "INSERT INTO recipes (title, ingredients, steps) VALUES (?, ?, ?)",
    [title, JSON.stringify(ingredients), JSON.stringify(steps)]
  );
  return result.insertId;
};
