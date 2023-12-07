import { useState } from 'react';
import { mealTypes, mealOptions } from '../data';

export default function MainMenu({setMeals, search}) {
  const [mealTypeSelection, setMealTypeSelection] = useState();
  const [otherOptionSelection, setOtherOptionSelection] = useState([]);

  return (
      <div className="main-menu" id="slideInRight">
      
        <div className="search-button-container">
          <button className="search-button" onClick={search}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
        
        <h2>Please select from the following options:</h2>
        <div className="choose-options">

            <div className="choose-meal-type">
              <p>Choose Meal Type:</p>
                <select id="meal-types" value={mealTypeSelection} onChange={event => setMealTypeSelection(event.target.value)}>
                  <option value=''>All</option>
                  {mealTypes.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>

            <div className="choose-other-options">
              <p>Select Other Options:</p>
                {mealOptions.map((option, index) =>
                  <div key={index} className="options">
                    <input type="checkbox" value={option} id={option} onClick={event => setOtherOptionSelection(pre => [...pre, event.target.value])}></input>
                    <label htmlFor={option} className="label-background" >{option}</label>
                  </div>
                )}
            </div>

            <div className="submit-options">
              <button onClick={() => setMeals(mealTypeSelection, otherOptionSelection)}>Submit</button>
            </div>

          </div>

        </div>
      </div>
  );
}