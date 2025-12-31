import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  const ingredients = JSON.parse(recipe.ingredients || "[]");
  const steps = JSON.parse(recipe.steps || "[]");

  return (
    <div className="container my-5">
      <h1>{recipe.name}</h1>
       <img
        src={`/src/assets/images/${recipe.image}`}
        alt={recipe.name}
        className="img-fluid mb-4"
        style={{ maxHeight: "300px" }}
      />


      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      <button className="btn btn-primary mt-3">Add to Meal Plan</button>
    </div>
  );
}

