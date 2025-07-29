# MealDB Food Recipe App with Axios

## Overview
A modern React web application for browsing, searching, and viewing detailed information about meals and recipes using the [MealDB API](https://www.themealdb.com/). This project demonstrates dynamic ingredient scaling, category browsing, and a clean, responsive UI. It is designed for learning and as a starter for your own recipe projects.

---

## Features
- Browse meals by category (e.g., Beef, Chicken, Vegetarian)
- View detailed meal pages with:
  - Ingredients and measurements
  - Cooking instructions
  - Source and YouTube video (if available)
  - Calories (mocked for demo)
  - Dynamic scaling: select number of persons and see ingredient amounts and calories update instantly
- Responsive design for desktop and mobile
- Loading indicators while fetching data
- Error handling for failed API requests

---

## Technologies Used

### Frontend
- *React* (with Hooks and Context API)
- *Axios* (for HTTP requests)
- *React Router* (for navigation)
- *SCSS* (for styling)
- *MealDB API* (external data source)

### Backend
- *None* (This is a frontend-only project. All data is fetched from the public MealDB API.)

---

## Project Structure

mealdb-food-recipe-app-with-axios/
├── public/                # Static files (index.html, icons, etc.)
├── src/
│   ├── actions/           # Functions for fetching data from the API
│   ├── api/               # Axios instance setup
│   ├── components/        # UI components (Header, Footer, Meal, Loader, etc.)
│   ├── context/           # React Context for global state (meals, sidebar)
│   ├── pages/             # Main pages (Home, Category, Meal Details, etc.)
│   ├── reducers/          # Reducers for state management
│   ├── utils/             # Utility files (constants, images)
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation


### Folder Explanations
- *public/*: Static files and HTML template
- *src/actions/*: Functions to fetch meals and categories from the API
- *src/api/*: Axios configuration for API requests
- *src/components/*: Reusable UI components
- *src/context/*: Global state management using React Context
- *src/pages/*: Main application pages
- *src/reducers/*: State reducers for meals and sidebar
- *src/utils/*: Constants and image assets
- *src/App.js*: Main app logic and routing
- *src/index.js*: App entry point

---

## How to Run the Project
1. *Install dependencies:*
   
   npm install
   
2. *Start the development server:*
   
   npm start
   
   The app will open at [http://localhost:3000](http://localhost:3000).

> *Note:* If you get a PowerShell script error, run this in PowerShell as admin:
> 
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> 

---

## How to Extend or Customize
- Replace mocked calories with real data if available
- Add a search bar to find meals by name or ingredient
- Add user authentication to save favorite recipes
- Customize the look and feel in the SCSS files
- Add more error handling and user feedback

---

## Contact
- *Author:* FastEat.Team
- *Email:* fasteatsupportteam@gmail.com


---

## Useful Links
- [MealDB API Docs](https://www.themealdb.com/api.php)
- [React Documentation](https://reactjs.org/)
- [Axios Documentation](https://axios-http.com/)
