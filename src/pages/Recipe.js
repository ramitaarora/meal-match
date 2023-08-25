import {Meal, allMeals, mealTypes, mealOptions} from './data.js';

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

export default Recipe;