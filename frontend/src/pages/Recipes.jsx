import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../context/DataContext";

function Recipes() {
  const { recipes } = useData();
  const [filter, setFilter] = useState("");

  const filtered = recipes.filter(
    (r) => r.name.toLowerCase().includes(filter.toLowerCase()) || r.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h1>Recipes</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or type..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="col">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
