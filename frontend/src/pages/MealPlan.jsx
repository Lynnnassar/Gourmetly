import React from "react";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../context/DataContext";

function MealPlan() {
  const { recipes, mealPlan, addToPlan, removeFromPlan } = useData();

  return (
    <div className="container my-4">
      <h1>Meal Plan</h1>

      <h2 className="mt-4">Add Recipes</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col">
            <RecipeCard recipe={recipe} />
            <button className="btn btn-success mt-2 w-100" onClick={() => addToPlan(recipe)}>Add to Plan</button>
          </div>
        ))}
      </div>

      <h2>Your Weekly Plan</h2>
      {mealPlan.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {mealPlan.map((recipe) => (
            <div key={recipe.id} className="col">
              <RecipeCard recipe={recipe} showRemove={true} onRemove={() => removeFromPlan(recipe.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MealPlan;
