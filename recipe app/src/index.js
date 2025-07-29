// ✅ src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { MealProvider } from './context/mealContext';
import AboutPage from './pages/AboutPage';

// ✅ Create root and render the App with context providers
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>
);