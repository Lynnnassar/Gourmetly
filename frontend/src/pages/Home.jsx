import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../context/DataContext";

function Home() {
  const { recipes } = useData();

  const featuredRecipes = recipes.slice(0, 3); // carousel
  const topRecipes = recipes.slice(0, 5); // grid (MAX 5)

  return (
    <div className="container my-4">

      {/* Hero */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold">Welcome to Gourmetly</h1>
        <p className="lead">
          Your personal recipe organizer and weekly meal planner
        </p>
        <Link to="/recipes" className="btn btn-primary btn-lg mt-3">
          Explore Recipes
        </Link>
      </section>

      {/* Carousel */}
      <section className="mb-5">
        <h2 className="mb-3">Featured Recipes</h2>

        <div
          id="recipeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {featuredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={recipe.image}
                  className="d-block w-100 rounded"
                  alt={recipe.name}
                  style={{
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>{recipe.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#recipeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#recipeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Featured Recipes Grid */}
      <section className="mb-5">
        <h2 className="mb-3">Our Top Recipes</h2>

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

export default Home;
