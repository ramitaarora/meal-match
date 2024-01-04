import { useState, useEffect } from 'react';

export default function Recipe({selectedMeal, slide, setSlide}) {
  const [step, setStep] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevColor, setPrevColor] = useState({color: '', cursor: ''})
  const [nextColor, setNextColor] = useState({color: '', cursor: ''})
  const [recipeSlide, setRecipeSlide] = useState('')

  useEffect(() => {
    if (currentIndex === 0 && selectedMeal.instructions.length === 1) {
      setPrevColor({color: 'grey', cursor: 'default'})
      setNextColor({color: 'grey', cursor: 'default'})
    }
    if (currentIndex === 0 && selectedMeal.instructions.length > 1) {
      setPrevColor({color: 'grey', cursor: 'default'})
      setNextColor({color: 'black', cursor: 'pointer'})
    }
    if (currentIndex > 0 && currentIndex < selectedMeal.instructions.length - 1) {
      setPrevColor({color: 'black', cursor: 'pointer'})
      setNextColor({color: 'black', cursor: 'pointer'})
    }
    if (currentIndex > 0 && currentIndex === selectedMeal.instructions.length - 1) {
      setNextColor({color: 'grey', cursor: 'default'})
      setPrevColor({color: 'black', cursor: 'pointer'})
    }
  }, [currentIndex])

  useEffect(() => {
    if (recipeSlide === 'slideOutLeft') {
      setTimeout(() => {
        setRecipeSlide('slideInRight')
      }, 500);
    }

    if (recipeSlide === 'slideOutRight') {
      setTimeout(() => {
        setRecipeSlide('slideInLeft')
      }, 500);
    }
    
  }, [recipeSlide])

  const handleNext = () => {
    if (currentIndex < selectedMeal.instructions.length - 1) {
      setRecipeSlide('slideOutLeft')
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setStep(step + 1);
      }, 400)
      
    }
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setRecipeSlide('slideOutRight')
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setStep(step - 1);
      }, 400)
    }
  }

  return (
    <div className="recipe" id={slide}>
      <div id="recipe-container">
        <h2>Recipe for {selectedMeal.mealName}</h2>
        
        <div className="ingredients">
          <div className="meal-picture-recipe">
            <img src={selectedMeal.picture} alt={selectedMeal.mealName}/>
          </div>
          {selectedMeal.recipe.map((item, index) => 
            <div key={index} className="recipe-map">
              <input type="checkbox"></input><p>{item}</p>
            </div>
            )
          }

        </div>
        <div className="instructions">
          <h2>Instructions</h2>
          <div id="instructions-step">
            <p id={recipeSlide}>{step}. {selectedMeal.instructions[currentIndex]}</p>
          </div>
        </div>
        <div id="arrows">
        <div id="back-step" onClick={handleBack}>
          <svg style={prevColor} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
          </svg>
          <p style={prevColor}>Previous Step</p>
        </div>

        <div id="next-step" onClick={handleNext}>
          <p style={nextColor}>Next Step</p>
          <svg style={nextColor} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
          </svg>
        </div>
        </div>
      </div>
    </div>
  )
}