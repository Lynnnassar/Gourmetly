import React from 'react';
import RecipeCard from '../components/RecipeCard';
import saladImg from '../assets/images/salad.jpg';
import toastImg from '../assets/images/toast.jpg';
import bologneseImg from '../assets/images/bolognese.jpg';



const recipes = [
  { id: 1, name: 'Spaghetti Bolognese', shortDesc:'Classic Italian pasta.', image: bologneseImg},
  { id: 2, name: 'Avocado Toast', shortDesc:'Healthy breakfast.', image: toastImg },
  { id: 3, name: 'Chicken Ceasar Salad', shortDesc:'Fresh and light.', image: saladImg },
];

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Gourmetly</h1>
      <p>Your personal recipe organizer and meal planner.</p>

      <h2>Featured Recipes</h2>
      <div className="grid">
        {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </div>

      <h2 style={{ marginTop:'30px' }}>Today's Meal</h2>
      <div className="card">
        <h3>Avocado Toast</h3>
        <p>Breakfast of the day. Healthy and energizing!</p>
      </div>
    </div>
  );
}

export default Home;
