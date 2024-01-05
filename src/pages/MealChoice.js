import { useState, useEffect } from 'react';
import { allMeals } from '../data';

export default function MealChoice({mealOptionsData, allOptionsData, mealChoice, slide, setSlide}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mealArray, setMealArray] = useState(allMeals);
  const [animation, setAnimation] = useState('');
  const [length, setLength] = useState(false);

  useEffect (() => {
    let newMealArray = [];

    if (allOptionsData[0].length > 0 && mealOptionsData) {
      newMealArray = allMeals.filter(meal => (meal.mealType === mealOptionsData) && (meal.options[0].some(option => allOptionsData[0].includes(option))) );
    } else if (allOptionsData[0].length === 0 && mealOptionsData) {
      newMealArray = allMeals.filter(meal => (meal.mealType === mealOptionsData));
    } else if (allOptionsData[0].length > 0 && !mealOptionsData) {
      newMealArray = allMeals.filter(meal => (meal.options[0].some(option => allOptionsData[0].includes(option))) );
    }

    if (newMealArray.length !== 0) {
      let shuffledMealArray = newMealArray.sort(() => Math.random() - 0.5);
      setMealArray(shuffledMealArray);
      setLength(true);
    }

    else if (newMealArray.length === 0 && !mealOptionsData && allOptionsData[0].length === 0) {
      let shuffledMealArray = allMeals.sort(() => Math.random() - 0.5);
      setMealArray(shuffledMealArray);
      setLength(true);
    } 

  }, [])

  useEffect(() => {
    if (animation === 'backOutLeft') {
      setTimeout(() => {
        setAnimation('backIn')
      }, 500)
    }
  }, [animation])

  const nextMeal = () => {
    if (currentIndex < (mealArray.length -1)) {
      setAnimation('backOutLeft')
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200)
      
    } else {
      setAnimation('backOutLeft')
      setTimeout(() => {
        setCurrentIndex(0);
      }, 300)
      
    }
    }

  const selectMeal = () => {
    setAnimation('backOutRight')
    setTimeout(() => {
      setSlide('slideOutRight')
      mealChoice(mealArray[currentIndex]);
    }, 300)
  }

  return (
    <div className="meal-choice" id={slide}>
    {(length) 
      ? (
      <div>
        <div className="meal-picture" id={animation}>
          <img src={mealArray[currentIndex].picture} alt={mealArray[currentIndex].mealName}></img>
        </div>
        <div className="meal-description" id={animation}>
          <h2>{mealArray[currentIndex].mealName}</h2>
        </div>
        <div className="flipping-buttons">
          <div className="next" onClick={nextMeal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
            </svg>
            <p>Next Recipe</p>
          </div>
          <div className="heart" onClick={selectMeal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
            </svg>
            <p>Choose Recipe</p>
          </div>
        </div>  
      </div>  
      ) :
      <div id="error">
          <p>No meals found!</p>
      </div>
    }
    </div>
  )
};