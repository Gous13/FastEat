import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import Feedback from '../../components/Feedback/Feedback';

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className='main-content'>
      {/* ✅ Meals Section */}
      { mealsLoading 
          ? <Loader /> 
          : meals === null 
            ? <NotFound /> 
            : meals?.length 
              ? <MealList meals={meals} /> 
              : "" 
      }

      {/* ✅ Categories Section */}
      { categoryLoading 
          ? <Loader /> 
          : <CategoryList categories={categories} /> 
      }

      {/* ✅ Feedback Section - Always shows after categories */}
      <Feedback />
    </main>
  );
}

export default HomePage;
