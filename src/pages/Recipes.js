import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import saladImg from '../assets/images/salad.jpg';
import toastImg from '../assets/images/toast.jpg';
import bologneseImg from '../assets/images/bolognese.jpg';
import pancakesImg from '../assets/images/pancakes.jpg';


const allRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', type: 'Dinner', shortDesc: 'Classic Italian pasta.', image: bologneseImg },
  { id: 2, name: 'Avocado Toast', type: 'Breakfast', shortDesc: 'Healthy breakfast.', image: toastImg },
  { id: 3, name: 'Pancakes', type: 'Breakfast', shortDesc: 'Fluffy and delicious.', image: pancakesImg },
  {id: 4, name: 'Chicken Ceasar Salad', type: 'Lunch', shortDesc: 'Fresh and light.', image: saladImg }
];


function Recipes() {
  const [filter, setFilter] = useState('');
  const filtered = allRecipes.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()) || r.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container">
      <h1>Recipes</h1>
      <input type="text" placeholder="Search by name or type..." value={filter} onChange={e => setFilter(e.target.value)} />
      <div className="grid">
        {filtered.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default Recipes;
