import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onAdd }) {
  const imageSrc = recipe.image
    ? `/src/assets/images/${recipe.image}`
    : "/src/assets/images/default.png";

  return (
    <div className="card h-100">
      <img src={imageSrc} className="card-img-top" alt={recipe.name} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.type}</p>

        <div className="mt-auto d-flex gap-2">
          <Link to={`/recipes/${recipe.id}`} className="btn btn-outline-primary btn-sm">
            See Recipe
          </Link>

          {onAdd && (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => onAdd(recipe)}
            >
              Add to Meal Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
