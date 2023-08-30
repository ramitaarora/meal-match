import {Meal, allMeals, mealTypes, mealOptions} from './data.js';
import {setMeals} from '../App.js';
import { useState, useEffect } from 'react';

export default function MainMenu({setMeals}) {
  const [mealTypeSelection, setMealTypeSelection] = useState(mealTypes[0]);
  const [otherOptionSelection, setOtherOptionSelection] = useState([]);

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