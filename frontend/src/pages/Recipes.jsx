import React from "react";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../context/DataContext";

export default function Recipes() {
  const { recipes, addToPlan } = useData();

  return (
    <div className="container my-5">
      <h2 className="mb-4">All Recipes</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col">
            <RecipeCard recipe={recipe} onAdd={() => addToPlan(recipe, "Monday")} />
          </div>
        ))}
      </div>
    </div>
  );
}
