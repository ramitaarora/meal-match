import { useState, useEffect } from 'react';
import { allMeals } from '../data';

export default function SearchRecipes ({back, selectedMeal, slide, setSlide}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect (() => {
    let searchMeals = allMeals.filter((meal) => ( 
      (meal.mealName).toLowerCase().includes(searchTerm.toLowerCase()) || 
      (meal.mealType).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (meal.ingredients).includes(searchTerm.toLowerCase())
    ));
    setSearchResults(searchMeals);
  }, [searchTerm])

  const selectMeal = (event) => {
    let mealIndex = allMeals.findIndex(meal => meal.mealName === event.target.innerHTML)
    setSlide('slideOutRight')
    setTimeout(() => {
      selectedMeal(allMeals[mealIndex]);
    }, 300)
    
  }

  return (
    <div className="search-recipes" id={slide}>
      <div id="search-container">
        <div className="search-bar">
          <input type="search" placeholder="Search Recipe, Type, Ingredient" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}></input>
        </div>

        <div className="search-results">
          {searchResults.map((meal, index) => <p key={index} className="search-result-link" onClick={selectMeal}>{meal.mealName}</p>)}
        </div>
      </div>
    
    </div>
  )
}