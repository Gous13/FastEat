import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Category.scss";

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (e, title) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      e.preventDefault();   // stop link
      navigate("/login");   // redirect to login
    }
  };

  return (
    <div className="section-wrapper bg-whitesmoke">
      <div className="container">
        <div className="sc-title">Categories</div>
        <section className="sc-category grid">
          {categories.map(({ idCategory: id, strCategory: title, strCategoryThumb: thumbnail }) => (
            <Link
              to={`/meal/category/${title}`}
              key={id}
              className="category-itm align-center justify-center"
              onClick={(e) => handleClick(e, title)} // ✅ check login before routing
            >
              <div className="category-itm-img h-100 w-100 flex align-center justify-center">
                <img src={thumbnail} alt={title} />
                <div className="category-itm-title bg-orange">
                  <h3 className="text-white fs-11 fw-6 ls-1 text-uppercase">{title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CategoryList;
