import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  // ================= AUTH =================
  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
    }

    return data;
  };

  const register = async ({ name, email, password }) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    return res.json();
  };

  const logout = () => {
    setUser(null);
    setToken("");
    setMealPlan([]);
    localStorage.clear();
  };

  // ================= RECIPES =================
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((r) => r.json())
      .then(setRecipes)
      .catch(console.error);
  }, []);

  // ================= MEAL PLAN =================
useEffect(() => {
  if (!token) return;

  fetch("http://localhost:5000/api/mealplan", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((r) => r.json())
    .then(setMealPlan)
    .catch(console.error);
}, [token]);

const addToPlan = async (recipe, day) => {
  const res = await fetch("http://localhost:5000/api/mealplan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      recipe_id: recipe.id,
      day,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message);
  }

  const newItem = await res.json();
  setMealPlan(prev => [...prev, newItem]);
};



const removeFromPlan = async (mealplanId) => {
  const res = await fetch(`http://localhost:5000/api/mealplan/${mealplanId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json();
    return alert(err.message || "Failed to remove meal plan");
  }

  setMealPlan((prev) => prev.filter((m) => m.mealplanId !== mealplanId));
};


  return (
    <DataContext.Provider
      value={{
        user,
        token,
        recipes,
        mealPlan,
        login,
        register,
        logout,
        addToPlan,
        removeFromPlan,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
 