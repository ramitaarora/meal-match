import {Meal, allMeals, mealTypes, mealOptions} from './data.js';
import {selectedMeal, back} from '../App.js';
import { useState, useEffect } from 'react';

export default function Recipe({selectedMeal, back}) {
  console.log(selectedMeal);
  return (
    <div className="recipe">
      <h2>Recipe for {selectedMeal.mealName}</h2>
      <div className="meal-picture-recipe">
        <img src={selectedMeal.picture} alt={selectedMeal.mealName}/>
      </div>
      {selectedMeal.recipe.map(item => 
        <div className="recipe-map">
          <input type="checkbox"></input><p>{item}</p>
        </div>
        )
      }
      <div className="back">
        <button onClick={back}>Back to Main Menu</button>
      </div>
    </div>
  )
};