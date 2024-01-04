import { useState, useEffect } from 'react';
import { mealTypes, mealOptions } from '../data';

export default function MainMenu({setMeals, slide, setSlide}) {
  const [mealTypeSelection, setMealTypeSelection] = useState();
  const [otherOptionSelection, setOtherOptionSelection] = useState([]);

  const handleOtherOptions = (event) => {
    if (event.target.checked) {
      setOtherOptionSelection(pre => [...pre, event.target.value])
    } else {
      let newOptions = [];
      for (let i = 0; i < otherOptionSelection.length; i++) {
        if (otherOptionSelection[i] !== event.target.value) {
          newOptions.push(otherOptionSelection[i])
        }
      }
      setOtherOptionSelection(newOptions)
    }
  }

  const handleSubmit = () => {
    setSlide('slideOutRight')
    setTimeout(() => {
      setMeals(mealTypeSelection, otherOptionSelection)
    }, 500)
  }

  return (
    <div className="main-menu" id={slide}>
      <h2>Please select from the following options:</h2>
      <div className="choose-options">

        <div className="choose-meal-type">
          <p>Choose Meal Type:</p>
          <div id="meal-types">
            {mealTypes.map((item, index) => 
              <div key={index}>
                <input id={item} type="radio" name="meal-type-selection" onClick={event => setMealTypeSelection(event.target.value)} value={item}></input>
                <label id="meal-type-label" htmlFor={item}>{item}</label>
              </div>
            )}
          </div>
        </div>

        <div className="choose-other-options">
          <p>Select Other Options:</p>
          <div className="options-container">
            {mealOptions.map((option, index) =>
              <div key={index} className="each-option">
                <div className="options">
                  <input type="checkbox" value={option.name} id={option.name} onClick={handleOtherOptions}></input>
                  <label htmlFor={option.name} className="label-background">
                    <img src={option.logo} height="30px" alt={option.name}/>
                    {option.name}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="submit-options">
          <button onClick={handleSubmit}>Submit</button>
        </div>

      </div>

    </div>
  );
}