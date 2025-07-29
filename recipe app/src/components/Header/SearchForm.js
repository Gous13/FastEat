import React, { useState, useRef } from 'react';
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useMealContext();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setErrorMsg("");
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    if (value.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    setIsLoading(true);
    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        const data = await res.json();
        if (data.meals) {
          // Filter to include any recipe name containing the input (case-insensitive)
          const filtered = data.meals.filter(meal => meal.strMeal.toLowerCase().includes(value.toLowerCase()));
          setSuggestions(filtered.slice(0, 15).map(meal => meal.strMeal));
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch (err) {
        setSuggestions([]);
        setShowSuggestions(false);
      } finally {
        setIsLoading(false);
      }
    }, 300); // debounce 300ms
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    setErrorMsg("");
    navigate("/");
    startFetchMealsBySearch(dispatch, suggestion);
  };

  const handleFocus = () => {
    if (searchTerm.trim().length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150); // Delay to allow click
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setErrorMsg("Please enter a valid search term.");
      return;
    }
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
      <input
        type="text"
        className='form-control-input text-dark-gray fs-15'
        placeholder='Search recipes here ...'
        value={searchTerm}
        onChange={handleSearchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
      />
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size={20} />
      </button>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="autocomplete-suggestions">
          {isLoading ? (
            <li style={{padding: '8px'}}>Loading...</li>
          ) : (
            suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          )}
        </ul>
      )}
      {errorMsg && (
        <div className="error-message text-danger fs-14 mt-1">
          {errorMsg}
        </div>
      )}
    </form>
  );
}

export default SearchForm;