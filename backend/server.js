require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const mealplanRoutes = require("./routes/mealplanRoutes");
const progressRoutes = require("./routes/progressRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/mealplan", mealplanRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
