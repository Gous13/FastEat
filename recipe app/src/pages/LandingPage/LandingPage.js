// import React from 'react';
// import Navbar from "../../components/Header/Navbar";   // ✅ Navbar
// // import Footer from "../../components/Footer/Footer";   // ✅ Footer
// import "./LandingPage.scss";
// import Feedback from '../../components/Feedback/Feedback';

// // ✅ Example categories (replace images later)
// const categories = [
//   { id: 1, name: "Pizza", img: require("../../assets/images/pizza.jpg") },
//   { id: 2, name: "Burgers", img: require("../../assets/images/burger.jpg") },
//   { id: 3, name: "Sandwich", img: require("../../assets/images/sandwich.jpg") },
//   { id: 4, name: "Pasta", img: require("../../assets/images/pasta.jpg") },
//   { id: 5, name: "Dosa", img: require("../../assets/images/dosa.jpg") },
//   { id: 6, name: "Soup", img: require("../../assets/images/soup.jpg") }
// ];

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
      
//       {/* ✅ Navbar without Sidebar button */}
//       <Navbar showSidebar={false} />

//       {/* ✅ Hero Section */}
//       <section className="landing-hero">
//         <div className="overlay">
//           <h1 className="hero-title">Welcome to FastEat</h1>
//           <p className="hero-subtitle">Delicious meals delivered to your door</p>
//         </div>
//       </section>

//       {/* ✅ Category Slider */}
//       <section className="landing-categories">
//         <h2 className="section-title">Explore Our Categories</h2>
//         <div className="slider-container">
//           <button className="slider-btn prev">&#10094;</button>
//           <div className="slider-track">
//             {categories.map(cat => (
//               <div className="category-card" key={cat.id}>
//                 <img src={cat.img} alt={cat.name} />
//                 <h3>{cat.name}</h3>
//               </div>
//             ))}
//           </div>
//           <button className="slider-btn next">&#10095;</button>
//         </div>
//       </section>

//       {/* ✅ Feedback Section */}
//       <section className="landing-feedback">
//         <h2 className="feedback-heading">What Our Users Say</h2>
//         <Feedback />
//       </section>

//       {/* ✅ Footer
//       <Footer /> */}

//     </div>
//   );
// };

// export default LandingPage;
