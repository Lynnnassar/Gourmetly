import React, { createContext, useContext, useState } from "react";

/* Image imports */
import spaghettiBolognese from "../assets/images/bolognese.jpg";
import avocadoToast from "../assets/images/egg-toast.jpg";
import chickenCaesarSalad from "../assets/images/ceasar-salad.jpg";
import pancakes from "../assets/images/pancakes.jpg";
import grilledSalmon from "../assets/images/grilled-salmon.png";
import beefTacos from "../assets/images/beef-tacos.png";
import veggieStirFry from "../assets/images/Veggie-stir-fry.png";
import frenchToast from "../assets/images/french-toast.png";
import cheeseburger from "../assets/images/cheeseburger.png";
import margheritaPizza from "../assets/images/pizza-marguerita.png";
import chickenWrap from "../assets/images/chicken-wrap.png";
import chocolateCake from "../assets/images/choco-cake.png";
import capreseSalad from "../assets/images/caprese.png";
import omelette from "../assets/images/omelette.png";
import bbqRibs from "../assets/images/bbq-ribs.png";
import shrimpPasta from "../assets/images/shrimp-pasta.png";
import greekSalad from "../assets/images/greek-salad.png";
import fruitSmoothie from "../assets/images/smoothie-fruit.png";
import lasagna from "../assets/images/lasagna.png";
import tunaSalad from "../assets/images/tuna-salad.png";
import frenchFries from "../assets/images/french-fries.png";
import chickenCurry from "../assets/images/chicken-curry.png";
import veggieBurger from "../assets/images/veggie-burger.png";
import chocolateMuffins from "../assets/images/choco-muffins.png";
import mushroomRisotto from "../assets/images/mushroom-risotto.png";
import caesarWrap from "../assets/images/ceasar-wrap.png";
import eggSalad from "../assets/images/egg-salad.png";
import pestoPasta from "../assets/images/pesto-pasta.png";
import berryParfait from "../assets/images/berry-parfait.png";
import grilledVegetables from "../assets/images/grilled vegetables.png";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [recipes] = useState([
  {
    id: 1,
    name: "Spaghetti Bolognese",
    type: "Dinner",
    image: spaghettiBolognese,
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Olive oil",
      "Salt & pepper"
    ],
    steps: [
      "Boil spaghetti until al dente.",
      "Sauté onion and garlic in olive oil.",
      "Add ground beef and cook until browned.",
      "Pour in tomato sauce and simmer.",
      "Serve sauce over spaghetti."
    ]
  },
  {
    id: 2,
    name: "Avocado Toast",
    type: "Breakfast",
    image: avocadoToast,
    ingredients: [
      "Bread slices",
      "Avocado",
      "Lemon juice",
      "Salt",
      "Chili flakes"
    ],
    steps: [
      "Toast the bread.",
      "Mash avocado with lemon juice and salt.",
      "Spread mixture on toast.",
      "Sprinkle chili flakes and serve."
    ]
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    type: "Lunch",
    image: chickenCaesarSalad,
    ingredients: [
      "Chicken breast",
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    steps: [
      "Grill the chicken and slice it.",
      "Wash and chop lettuce.",
      "Combine lettuce, chicken, and croutons.",
      "Drizzle with dressing and top with parmesan."
    ]
  },
  {
    id: 4,
    name: "Pancakes",
    type: "Breakfast",
    image: pancakes,
    ingredients: [
      "Flour",
      "Milk",
      "Egg",
      "Baking powder",
      "Sugar",
      "Butter"
    ],
    steps: [
      "Mix dry ingredients.",
      "Add milk and egg to form batter.",
      "Pour batter onto hot pan.",
      "Flip when bubbles appear.",
      "Serve with butter or syrup."
    ]
  },
  {
    id: 5,
    name: "Grilled Salmon",
    type: "Dinner",
    image: grilledSalmon,
    ingredients: [
      "Salmon fillet",
      "Olive oil",
      "Lemon",
      "Salt & pepper"
    ],
    steps: [
      "Season salmon with oil, salt, and pepper.",
      "Grill skin-side down.",
      "Flip once and cook through.",
      "Serve with lemon slices."
    ]
  },

  /* ===== SAME STRUCTURE FOR ALL BELOW ===== */

  {
    id: 6,
    name: "Beef Tacos",
    type: "Lunch",
    image: beefTacos,
    ingredients: ["Taco shells", "Ground beef", "Lettuce", "Cheese", "Salsa"],
    steps: [
      "Cook ground beef with seasoning.",
      "Warm taco shells.",
      "Fill shells with beef.",
      "Top with lettuce, cheese, and salsa."
    ]
  },
  {
    id: 7,
    name: "Veggie Stir Fry",
    type: "Dinner",
    image: veggieStirFry,
    ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Oil"],
    steps: [
      "Heat oil in a pan.",
      "Add garlic and vegetables.",
      "Stir fry until tender.",
      "Add soy sauce and serve."
    ]
  },
  {
    id: 8,
    name: "French Toast",
    type: "Breakfast",
    image: frenchToast,
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter"],
    steps: [
      "Whisk eggs, milk, and cinnamon.",
      "Dip bread slices.",
      "Cook on buttered pan.",
      "Flip and serve warm."
    ]
  },
  {
    id: 9,
    name: "Cheeseburger",
    type: "Lunch",
    image: cheeseburger,
    ingredients: ["Burger buns", "Beef patty", "Cheese", "Lettuce", "Tomato"],
    steps: [
      "Grill beef patty.",
      "Toast buns.",
      "Assemble burger with toppings."
    ]
  },
  {
    id: 10,
    name: "Margherita Pizza",
    type: "Dinner",
    image: margheritaPizza,
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
    steps: [
      "Spread sauce on dough.",
      "Add mozzarella.",
      "Bake until golden.",
      "Top with basil."
    ]
  },

  /* Desserts, wraps, salads, etc follow SAME PATTERN */

  {
    id: 30,
    name: "Grilled Vegetables",
    type: "Dinner",
    image: grilledVegetables,
    ingredients: ["Zucchini", "Bell peppers", "Olive oil", "Salt"],
    steps: [
      "Slice vegetables.",
      "Brush with olive oil.",
      "Grill until charred.",
      "Season and serve."
    ]
  }
]);


  const [mealPlan, setMealPlan] = useState([]);

  const addToPlan = (recipe) => {
    if (!mealPlan.some((r) => r.id === recipe.id)) {
      setMealPlan([...mealPlan, recipe]);
    }
  };

  const removeFromPlan = (id) => {
    setMealPlan(mealPlan.filter((r) => r.id !== id));
  };

  return (
    <DataContext.Provider value={{ recipes, mealPlan, addToPlan, removeFromPlan }}>
      {children}
    </DataContext.Provider>
  );
}
