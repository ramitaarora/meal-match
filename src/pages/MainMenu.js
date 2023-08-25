import {Meal, allMeals, mealTypes, mealOptions} from './data.js';

function MainMenu() {
    return (
        <div className="main-menu">
          <h4>Please select from the following options:</h4>
          <div className="choose-options">
            <form>
  
              <div className="choose-meal-type">
                <p>Choose Meal Type:</p>
                  <select name={mealTypes[0]} id="meal-types">
                    {mealTypes.map(item => <option value={item}>{item}</option>)}
                  </select>
              </div>
  
              <div className="choose-other-options">
                <p>Other:</p>
                  {mealOptions.map(option => <div className="options"><input type="checkbox"></input><p>{option}</p></div>)}
              </div>
  
              <div className="submit-options">
                <button>Submit</button>
              </div>
  
            </form>
          </div>
        </div>
    );
  }

  export default MainMenu;