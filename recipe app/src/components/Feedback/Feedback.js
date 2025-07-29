import React from "react";
import "./Feedback.scss";

const feedbackData = [
  { id: 1, name: "Nagendra Nattu", review: "Amazing food and great service!", rating: 5 },
  { id: 2, name: "Vira Prasad", review: "Loved the experience, will come again.", rating: 4 },
  { id: 3, name: "Manipur Mani", review: "Delicious cuisines, highly recommended!", rating: 5 },
  { id: 4, name: "Gouse P", review: "Good ambiance and tasty dishes.", rating: 4 },
  { id: 5, name: "Monkey Moin", review: "Affordable and flavorful meals!", rating: 5 },
   { id: 6, name: "Aravind Dolle", review: "flavorful meals!", rating: 5 },
   { id: 7, name: "Aravind D", review: "flavorful meals!", rating: 5 },
];
const Feedback = () => {
  return (
    <div className="section-wrapper bg-whitesmoke">
      <div className="container">
        <div className="sc-title">Feedback by Users</div>

        {/* ✅ Row 1 - scroll left */}
        <div className="feedback-row scroll-left">
          {[...feedbackData, ...feedbackData].map((fb, index) => (
            <div className="feedback-card" key={`row1-${index}`}>
              <h4>{fb.name}</h4>
              <p>{fb.review}</p>
              <span>{"⭐".repeat(fb.rating)}</span>
            </div>
          ))}
        </div>

        {/* ✅ Row 2 - scroll right */}
        <div className="feedback-row scroll-right">
          {[...feedbackData, ...feedbackData].map((fb, index) => (
            <div className="feedback-card" key={`row2-${index}`}>
              <h4>{fb.name}</h4>
              <p>{fb.review}</p>
              <span>{"⭐".repeat(fb.rating)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
