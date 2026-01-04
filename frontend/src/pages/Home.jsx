// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "../App.css"; // 

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p className="text-center my-5">Loading recipes...</p>;

  const featuredRecipes = recipes.slice(0, 3);
  const topRecipes = recipes.slice(0, 5);

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <section className="hero mb-5">
        <h1>Welcome to Gourmetly</h1>
        <p>Your personal recipe organizer and weekly meal planner</p>
        <a href="/recipes" className="btn btn-primary btn-lg mt-3">Explore Recipes</a>
      </section>

      {/* Featured Recipes Carousel */}
      <section className="featured-section mb-5">
        <h2>Featured Recipes</h2>
        <div className="carousel">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Top Recipes Grid */}
      <section className="mb-5">
        <h2>Top Recipes</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {topRecipes.map((recipe) => (
            <div key={recipe.id} className="col">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
