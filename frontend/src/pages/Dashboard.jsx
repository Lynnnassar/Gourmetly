import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useData } from "../context/DataContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const { user } = useData();
  const [mealData, setMealData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (!user) return;

    fetch("http://localhost:5000/api/progress", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch progress");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.weeklyMeals)) {
          setMealData(data.weeklyMeals);
        }
      })
      .catch(console.error);
  }, [user]);

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Meals Planned",
        data: mealData,
        backgroundColor: "#ff7a00",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Meal Planning" },
    },
  };

  return (
    <div className="dashboard container my-5">
      <h1 className="mb-4">Your Dashboard</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
}
