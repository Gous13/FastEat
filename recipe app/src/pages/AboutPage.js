import React from "react";
import "./About.scss";

const AboutPage = () => {
  return (
    <main className="main-content about-page">
      <div className="container">
        <h1 className="text-orange">About FastEat</h1>
        <p className="fs-16">
          <strong>FastEat</strong> is an innovative recipe discovery platform designed to make cooking easy and fun. 
          Our application provides users with a wide variety of meal categories, detailed recipes, and step-by-step 
          instructions to help them prepare delicious dishes.
        </p>

        <h2>Features</h2>
        <ul className="fs-15">
          <li>Secure login and registration system.</li>
          <li>Explore recipes by category.</li>
          <li>Search meals with keywords.</li>
          <li>View detailed ingredients and instructions.</li>
          <li>Personalized experience with saved user sessions.</li>
        </ul>

        <h3>Why Choose FastEat?</h3>
        <p className="fs-16">
          - Wide range of global cuisines <br />
          - Easy search & category filters <br />
          - User authentication for personalized experience <br />
          - Clean UI built with React and a secure Flask backend
        </p>

        <h2>Our Mission</h2>
        <p className="fs-16">
          At FastEat, we aim to inspire everyone to cook at home by providing easy access to recipes from around the world. 
          Whether you are a beginner or an experienced chef, FastEat is your companion in the kitchen.
        </p>

        <h2>About the Project</h2>
        <p className="fs-16">
          This project is built with <strong>React.js</strong> for the frontend and <strong>Flask (Python)</strong> 
          as the backend API. It also uses <strong>SQLite</strong> to store user data securely.
        </p>

        <p className="fs-16">
          FastEat is developed as part of a learning project to integrate modern frontend and backend technologies, 
          providing a seamless user experience.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
