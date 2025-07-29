import React, { useState } from 'react';
import "./Meal.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';

const MealSingle = ({meal}) => {
  const [persons, setPersons] = useState(1);
  console.log(meal);
  let tags = meal?.tags?.split(',');
  console.log(meal);
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);
  const totalCalories = meal?.calories ? meal.calories * persons : null;

  // Helper to scale a measure string
  function scaleMeasure(measure, factor) {
    if (!measure) return '';
    // Match leading number (integer or decimal, possibly fraction)
    const match = measure.match(/^(\d+\.?\d*|\d*\/\d+)(.*)$/);
    if (match) {
      let [ , num, rest ] = match;
      // Handle fractions like 1/2
      let value = 0;
      if (num.includes('/')) {
        const [n, d] = num.split('/').map(Number);
        value = n/d;
      } else {
        value = parseFloat(num);
      }
      const scaled = value * factor;
      // If original was integer, show integer; else, 2 decimals
      const display = Number.isInteger(value) ? Math.round(scaled) : scaled.toFixed(2);
      return display + rest;
    }
    // If no number, return as-is
    return measure;
  }

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='breadcrumb bg-orange text-white'>
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <Link to = "/" className='flex align-center'>
                <AiFillHome size = {22} />
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size = {23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span to = "" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <div className='sc-title'>Meal Details</div>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src = {meal?.thumbnail} alt = "" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-orange'>{meal?.title}</h3>
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{ meal?.category }</span>
                </div>

                <div className='source flex align-center'>
                  <span className='fw-7'>Source: &nbsp;</span>
                  <a href = {meal.source} target='_blank' rel='noopener noreferrer'>
                    {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found" }
                  </a>
                </div>
                <div className='persons-calories flex align-center' style={{marginTop: '1rem', gap: '1.5rem'}}>
                  <label htmlFor='persons' className='fw-7'>Persons: </label>
                  <select id='persons' value={persons} onChange={e => setPersons(Number(e.target.value))} style={{marginRight: '1.5rem'}}>
                    {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                  <span className='fw-7'>Total Calories for {persons} person{persons > 1 ? 's' : ''}: </span>
                  <span>{totalCalories ? totalCalories + ' kcal' : 'N/A'}</span>
                </div>
                {meal.youtube && (
                  <div className='youtube-link' style={{marginTop: '1rem'}}>
                    <a href={meal.youtube} target='_blank' rel='noopener noreferrer' style={{color: '#FF0000', fontWeight: 'bold'}}>
                      Watch on YouTube
                    </a>
                  </div>
                )}
              </div>

              <div className='tags flex align-start flex-wrap'>
                <h6 className='fs-16'>Tags:</h6>
                <ul className='flex align-center flex-wrap'>
                  {
                    tags?.map((tag, idx) => (<li key = {idx} className = "fs-14">{tag}</li>))
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3'>
                <h6 className='fs-16 text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key = {idx} className = "flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='measures my-4'>
              <h6 className='fs-16'>Measure{persons > 1 ? ` (for ${persons} persons)` : ''}:</h6>
              <ul className='grid'>
                {
                  meal?.measures?.map((measure, idx) => (
                    <li key = {idx} className = "fs-14 flex align-end">
                      <span className='li-icon fs-12 text-orange'>
                        <FaUtensilSpoon />
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{scaleMeasure(measure, persons)}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key = {idx} className = "fs-14">
                      <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle