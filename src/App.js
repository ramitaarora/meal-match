// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainMenu from "./pages/MainMenu";
// import MealChoice from "./pages/MealChoice";
// import Recipe from "./pages/Recipe";
// import AddRecipe from "./pages/AddRecipe";

import {Meal, allMeals, mealTypes, mealOptions} from './data.js';
import { useState, useEffect } from 'react';

// function changeState(state) {
//   state = !state;
// }

function App() {
  // Main Manu States
  const [mainMenuPage, setMainMenuPage] = useState(true);
  const [mealTypeData, setMealTypeData] = useState(mealTypes[0]);
  const [optionTypeData, setOptionTypeData] = useState([]);

  // Meal Choice States
  const [mealChoicePage, setMealChoicePage] = useState(false);
  const [mealChoice, setMealChoice] = useState();

  // Recipe Page States
  const [recipePage, setRecipePage] = useState(false);


  const setMeals = (mealData, optionData) => {
    setMealTypeData(mealData);
    console.log(mealTypeData);
    setOptionTypeData([optionData]);
    console.log(optionTypeData);
    setMainMenuPage(false);
    setMealChoicePage(true);
  }

  const setMealSelection = (chosenMeal) => {
    setMealChoice(chosenMeal);
    setMealChoicePage(false);
    setRecipePage(true);
  }

  const backButton = () => {
    setMealChoicePage(false);
    setRecipePage(false);
    setMainMenuPage(true);
  }

  const setPages = () => {
    if (mainMenuPage) {
      return <MainMenu setMeals={setMeals}/>
    } else if (mealChoicePage) {
      return <MealChoice mealOptionseData={mealTypeData} allOptionsData={optionTypeData} mealChoice={setMealSelection} />
    } else if (recipePage) {
      return <Recipe />
    }
    
    else {
      return <p>Error</p>
    }
  }

  return (
    <div className="app">
      <div className="app-card">
        <h1>Meal Match</h1>
        {setPages()}
      </div>
    </div>
    
  );
}

export default App;

function MainMenu({setMeals}) {
  const [mealTypeSelection, setMealTypeSelection] = useState(mealTypes[0]);
  const [otherOptionSelection, setOtherOptionSelection] = useState([]);

  function testing() {
    console.log("meal type", mealTypeSelection);
    console.log("other options", otherOptionSelection);
  }

  return (
      <div className="main-menu">
        <h4>Please select from the following options:</h4>
        <div className="choose-options">
          <form>

            <div className="choose-meal-type">
              <p>Choose Meal Type:</p>
                <select id="meal-types" value={mealTypeSelection} onChange={event => setMealTypeSelection(event.target.value)}>
                  {mealTypes.map(item => <option value={item}>{item}</option>)}
                </select>
            </div>

            <div className="choose-other-options">
              <p>Other:</p>
                {mealOptions.map(option => 
                  <div className="options">
                    <input type="checkbox" value={option} onChange={event => setOtherOptionSelection(pre => [...pre, event.target.value])}>
                    </input>
                    <label for={option}>{option}</label>
                  </div>
                )}
            </div>

            <div className="submit-options">
              <button onClick={() => setMeals(mealTypeSelection, otherOptionSelection)}>Submit</button>
            </div>

          </form>
        </div>
      </div>
  );
}


function MealChoice() {
  return (
    <div className="meal-choice">
      <div className="back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </div>
      <div className="meal-picture">
        <img src={allMeals[0].picture} alt="meal"></img>
      </div>
      <div className="meal-description">
        <h2>{allMeals[0].mealName}</h2>
      </div>
      <div className="flipping-buttons">
        <div className="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
        <div className="heart">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
             <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

function Recipe() {
  return (
    <div className="recipe">
      <div className="back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </div>
      <h2>Recipe</h2>
      {allMeals[0].recipe.map(item => 
        <div className="recipe-map">
          <input type="checkbox"></input><p>{item}</p>
        </div>
        )
      }
      <div className="back">
        <button>Back to Main Menu</button>
      </div>
    </div>
  )
}

function AddRecipe () {
  return (
    <div className="add-recipe">
    </div>
  )
}

function SearchRecipes () {
  return (
    <div className="search-recipes">
    </div>
  )
}