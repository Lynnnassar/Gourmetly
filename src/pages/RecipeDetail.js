import React from 'react';
import { useParams } from 'react-router-dom';
import saladImg from '../assets/images/salad.jpg';
import toastImg from '../assets/images/toast.jpg';
import bologneseImg from '../assets/images/bolognese.jpg';
import pancakesImg from '../assets/images/pancakes.jpg';


const recipeData = [
  { id: 1, name:'Spaghetti Bolognese', image:bologneseImg, 
    ingredients:['200g spaghetti','100g minced beef','Tomato sauce','Onion','Garlic'], 
    steps:['Boil pasta','Cook beef','Add sauce','Mix together'] 
  },

  { id: 2, name:'Avocado Toast', image:toastImg, 
    ingredients:['2 slices bread','1 avocado','Salt','Pepper'], 
    steps:['Toast bread','Mash avocado','Spread on bread','Season to taste'] 
  },

  { 
    id: 3, 
    name:'Pancakes', 
    image:pancakesImg, 
    ingredients:[
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '1 cup milk',
      '1 egg',
      '2 tablespoons melted butter',
      '1 teaspoon baking powder',
      'Pinch of salt'
    ], 
    steps:[
      'Mix flour, sugar, salt, and baking powder.',
      'Add milk, egg, and melted butter.',
      'Whisk until smooth.',
      'Heat a lightly greased pan.',
      'Cook until bubbles form, then flip.',
      'Cook until golden.'
    ] 
  },

  { 
    id: 4, 
    name:'Chicken Caesar Salad', 
    image:saladImg, 
    ingredients:[
      '1 grilled chicken breast',
      '2 cups romaine lettuce',
      'Croutons',
      'Parmesan cheese',
      'Caesar dressing',
      'Salt and pepper'
    ], 
    steps:[
      'Chop lettuce.',
      'Slice chicken.',
      'Add lettuce, chicken, croutons, and parmesan to a bowl.',
      'Add Caesar dressing.',
      'Season and toss.'
    ] 
  }
];
function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if(!recipe) return <div className="container"><h2>Recipe not found</h2></div>;

  return (
    <div className="container">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ width:'100%', borderRadius:'10px' }} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h2>Steps</h2>
      <ol>
        {recipe.steps.map((step,i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
}

export default RecipeDetail;
