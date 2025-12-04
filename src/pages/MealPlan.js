import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

import saladImg from '../assets/images/salad.jpg';
import toastImg from '../assets/images/toast.jpg';
import bologneseImg from '../assets/images/bolognese.jpg';
import pancakesImg from '../assets/images/pancakes.jpg';

const weeklyRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', type: 'Dinner', shortDesc: 'Classic Italian pasta.', image: bologneseImg },
  { id: 2, name: 'Avocado Toast', type: 'Breakfast', shortDesc: 'Healthy breakfast.', image: toastImg },
  { id: 3, name: 'Chicken Ceasar Salad', type: 'Lunch', shortDesc: 'Fresh and light.', image: saladImg },
  { id: 4, name: 'Pancakes', type: 'Breakfast', shortDesc: 'Fluffy and delicious.', image: pancakesImg },
];

function MealPlan() {
  const [plan, setPlan] = useState([]);

  const addToPlan = (recipe) => {
    if (!plan.includes(recipe)) {
      setPlan([...plan, recipe]);
    }
  };

  const removeFromPlan = (id) => {
    setPlan(plan.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="container">
      <h1>Meal Plan</h1>

      <h2>Add Recipes to Your Week</h2>
      <div className="grid">
        {weeklyRecipes.map(r => (
          <div key={r.id} className="card">
            <RecipeCard recipe={r} />
            <button onClick={() => addToPlan(r)}>Add to Plan</button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '30px' }}>Your Weekly Plan</h2>
      {plan.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <div className="grid">
          {plan.map(r => (
            <RecipeCard 
              key={r.id} 
              recipe={r}
              showRemove={true}
              onRemove={() => removeFromPlan(r.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MealPlan;
