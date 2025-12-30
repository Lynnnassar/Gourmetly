import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "../context/DataContext";

function RecipeDetail() {
  const { id } = useParams();
  const { recipes, addToPlan } = useData();

  const recipe = recipes.find((r) => r.id === Number(id));

  // Guard #1: recipe itself
  if (!recipe) {
    return (
      <div className="container my-5 text-center">
        <h2>Recipe not found 🍽️</h2>
        <Link to="/recipes" className="btn btn-primary mt-3">
          Back to Recipes
        </Link>
      </div>
    );
  }

  // Guard #2: nested properties
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : [];

  const steps = Array.isArray(recipe.steps)
    ? recipe.steps
    : [];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Image */}
        <div className="col-md-6">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h1>{recipe.name}</h1>
          <p className="text-muted">{recipe.type}</p>
          <p>{recipe.shortDesc}</p>

          <button
            className="btn btn-primary mb-4"
            onClick={() => addToPlan(recipe)}
          >
            Add to Meal Plan
          </button>

          <h4>Ingredients</h4>
          {ingredients.length === 0 ? (
            <p className="text-muted">No ingredients listed.</p>
          ) : (
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <h4 className="mt-4">Steps</h4>
          {steps.length === 0 ? (
            <p className="text-muted">No steps available.</p>
          ) : (
            <ol>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
