const express = require("express");
const router = express.Router();
const {
  getMealPlan,
  addToMealPlan,
  removeFromMealPlan,
} = require("../controllers/mealplanController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, getMealPlan);
router.post("/", auth, addToMealPlan);
router.delete("/:id", auth, removeFromMealPlan);

module.exports = router;
