import { useState, useEffect } from 'react';
import { mealTypes, mealOptions } from '../data';

export default function MainMenu({setMeals, search}) {
  const [mealTypeSelection, setMealTypeSelection] = useState();
  const [otherOptionSelection, setOtherOptionSelection] = useState([]);
  const [slide, setSlide] = useState('slideInLeft')
  const [highlight, setHighlight] = useState({backgroundColor: '#f88c00'})

  const handleSetMealType= (event) => {
    setHighlight({backgroundColor: 'rgb(247, 169, 66)'});
    setMealTypeSelection(event.target.innerHTML)
  }

  const handleSubmit = () => {
    setSlide('slideOutRight')
    setTimeout(() => {
      setMeals(mealTypeSelection, otherOptionSelection)
    }, 500)
  }

  const handleSearch = () => {
    setSlide('slideOutRight');
    setTimeout(() => {
      search()
    }, 300)
  }

  return (
    <div className="main-menu" id={slide}>

      <h2>Please select from the following options:</h2>
      <div className="choose-options">

        <div className="choose-meal-type">
          <p>Choose Meal Type:</p>
          {/*<select id="meal-types" value={mealTypeSelection} onChange={event => setMealTypeSelection(event.target.value)}>
            <option value=''>All</option>
            {mealTypes.map((item, index) => <option key={index} value={item}>{item}</option>)}
  </select>*/}
          <div id="meal-types">
            {mealTypes.map((item, index) => <p style={highlight} onClick={event => handleSetMealType(event)} key={index} value={item}>{item}</p>)}
          </div>
        </div>

        <div className="choose-other-options">
          <p>Select Other Options:</p>
          <div className="options-container">
            {mealOptions.map((option, index) =>
              <div key={index} className="each-option">
                <div className="options">
                  <img src={option.logo} height="30px" alt={option.name}/>
                  <input type="checkbox" value={option.name} id={option.name} onClick={event => setOtherOptionSelection(pre => [...pre, event.target.value])}></input>
                  <label htmlFor={option.name} className="label-background">{option.name}</label>
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