import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "../dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  // Sample chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Meals Planned",
        data: [3, 4, 2, 5, 3, 4, 2],
        backgroundColor: "#ff7a00"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Weekly Meal Planning Overview"
      }
    }
  };

  return (
    <div className="dashboard container">
      <h1 style={{ marginBottom: "20px" }}>Your Dashboard</h1>

      <p style={{ maxWidth: "800px", lineHeight: "1.7", marginBottom: "30px" }}>
        This is your personal space on Gourmetly. From here, you can review your
        saved recipes, track your weekly meal plans, and monitor your consistency
        in maintaining healthy eating habits.
      </p>

      {/* Top Stats */}
      <div className="grid">
        <div className="card">
          <h3>Saved Recipes</h3>
          <p>
            You have saved several recipes that match your taste and lifestyle.
            Revisit them anytime and add them directly to your weekly plan.
          </p>
          <p><strong>Total:</strong> 4 recipes</p>
        </div>

        <div className="card">
          <h3>Weekly Meal Plan</h3>
          <p>
            Your current weekly plan helps you stay organized and avoid last-minute
            unhealthy choices.
          </p>
          <p><strong>Planned meals:</strong> 3</p>
        </div>

        <div className="card">
          <h3>Healthy Consistency</h3>
          <p>
            Consistency is key. Based on your recent activity, you’re maintaining
            a positive routine and regularly planning your meals.
          </p>
          <p><strong>Active streak:</strong> 5 days</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-card">
        <Bar data={data} options={options} />
      </div>

      {/* Tips Section */}
      <div className="card tips-card">
        <h2>Tips for Better Meal Planning</h2>
        <ul>
          <li>Plan your meals at the beginning of the week</li>
          <li>Balance proteins, vegetables, and carbohydrates</li>
          <li>Save recipes you enjoy to reuse later</li>
          <li>Avoid skipping meals to maintain energy levels</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
