# 🍽️ Gourmetly

Gourmetly is a full-stack web application that allows users to explore recipes, view detailed cooking instructions, and build a personalized weekly meal plan. Authenticated users can add and remove meals from their plan and track their weekly planning progress through a dashboard.

---

## 🚀 Features

- User authentication (Register / Login)
- Browse all recipes
- View detailed recipe instructions
- Add recipes to a personal meal plan
- Remove meals from the meal plan
- User dashboard with weekly meal planning progress
- Protected routes for authenticated users

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API (Global State Management)
- Chart.js (Dashboard visualization)
- Bootstrap (Styling – no Tailwind)

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication

---

## 📁 Project Structure

Gourmetly-Cloud/
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ └── App.jsx
│ └── package.json
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
🔐 Authentication Notes

Meal Plan and Dashboard are protected routes

Users must be logged in to add meals or view dashboard data
📊 Dashboard

The dashboard visualizes weekly meal planning data using Chart.js based on user activity stored in the database.
🧪 Current Status

Core functionality implemented

Meal plan integration working with authentication

Dashboard progress connected to backend
👩‍💻 Author

Lynn Nassar
Computer Science – CSCI426 
