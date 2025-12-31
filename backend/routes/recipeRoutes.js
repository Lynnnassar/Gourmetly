const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getAllRecipes, getRecipeById, createRecipe } = require("../controllers/recipeController");

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.post("/", auth, createRecipe);

module.exports = router;
