import React from "react";
import { useData } from "../context/DataContext";

export default function MealPlan() {
  const { mealPlan, removeFromPlan } = useData();

  if (!mealPlan || mealPlan.length === 0)
    return <p className="text-center my-5">No meals planned yet.</p>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Meal Plan</h2>

      <ul className="list-group">
        {mealPlan.map((item) => (
          <li
            key={item.mealplanId}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.day}</strong> — {item.recipe?.name || "Unnamed Recipe"}
            </div>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromPlan(item.mealplanId)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

