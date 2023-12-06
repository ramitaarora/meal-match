import { useState } from 'react';
import { mealTypes } from './data.js';
import MainMenu from './pages/MainMenu.js';
import MealChoice from './pages/MealChoice.js';
import Recipe from './pages/Recipe.js';
import SearchRecipes from './pages/SearchRecipes.js';

export default function App() {
  // Main Manu States
  const [mainMenuPage, setMainMenuPage] = useState(true);
  const [mealTypeData, setMealTypeData] = useState(mealTypes[0]);
  const [optionTypeData, setOptionTypeData] = useState([]);

  // Meal Choice States
  const [mealChoicePage, setMealChoicePage] = useState(false);
  const [mealChoice, setMealChoice] = useState();

  // Recipe Page States
  const [recipePage, setRecipePage] = useState(false);

  // SearchRecipes Page States
  const [searchRecipes, setSearchRecipes] = useState(false);


  const setMeals = (mealData, optionData) => {
    setMealTypeData(mealData);
    //console.log(mealTypeData);
    setOptionTypeData([optionData]);
    //console.log(optionTypeData);
    setMainMenuPage(false);
    setMealChoicePage(true);
  }

  const setMealSelection = (chosenMeal) => {
    setMealChoice(chosenMeal);
    setMealChoicePage(false);
    setSearchRecipes(false);
    setRecipePage(true);
  }

  const backButton = () => {
    setMealChoicePage(false);
    setRecipePage(false);
    setSearchRecipes(false);
    setMealTypeData(mealTypes[0]);
    setOptionTypeData([]);
    setMealChoice();
    setMainMenuPage(true);
  }

  const searchPage = () => {
    setMainMenuPage(false);
    setSearchRecipes(true);
  }

  const setPages = () => {
    if (mainMenuPage) {
      return <MainMenu setMeals={setMeals} search={searchPage}/>
    } else if (mealChoicePage) {
      return <MealChoice mealOptionsData={mealTypeData} allOptionsData={optionTypeData} mealChoice={setMealSelection} back={backButton}/>
    } else if (recipePage) {
      return <Recipe selectedMeal={mealChoice} back={backButton} />
    } else if (searchRecipes) {
      return <SearchRecipes back={backButton} selectedMeal={setMealSelection}/>
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
};

// function MainMenu({setMeals, search}) {
//   const [mealTypeSelection, setMealTypeSelection] = useState();
//   const [otherOptionSelection, setOtherOptionSelection] = useState([]);

//   return (
//       <div className="main-menu">
      
//         <div className="search-button-container">
//           <button className="search-button" onClick={search}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-search" viewBox="0 0 16 16">
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//           </svg>
//           </button>
        
//         <h2>Please select from the following options:</h2>
//         <div className="choose-options">
//           <form>

//             <div className="choose-meal-type">
//               <p>Choose Meal Type:</p>
//                 <select id="meal-types" value={mealTypeSelection} onChange={event => setMealTypeSelection(event.target.value)}>
//                   <option value=''>All</option>
//                   {mealTypes.map(item => <option value={item}>{item}</option>)}
//                 </select>
//             </div>

//             <div className="choose-other-options">
//               <p>Select Other Options:</p>
//                 {mealOptions.map(option =>
//                   <div className="options">
//                     <input type="checkbox" value={option} id={option} onClick={event => setOtherOptionSelection(pre => [...pre, event.target.value])}></input>
//                     <label htmlFor={option} className="label-background" >{option}</label>
//                   </div>
//                 )}
//             </div>

//             <div className="submit-options">
//               <button onClick={() => setMeals(mealTypeSelection, otherOptionSelection)}>Submit</button>
//             </div>

//           </form>
//           </div>

//         </div>
//       </div>
//   );
// }

// function MealChoice({mealOptionsData, allOptionsData, mealChoice, back}) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mealArray, setMealArray] = useState(allMeals);

//   useEffect (() => {
//     let newMealArray = [];

//     if (allOptionsData[0].length > 0 && mealOptionsData) {
//       newMealArray = allMeals.filter(meal => (meal.mealType === mealOptionsData) && (meal.options[0].some(option => allOptionsData[0].includes(option))) );
//     } else if (allOptionsData[0].length === 0 && mealOptionsData) {
//       newMealArray = allMeals.filter(meal => (meal.mealType === mealOptionsData));
//     } else if (allOptionsData[0].length > 0 && !mealOptionsData) {
//       newMealArray = allMeals.filter(meal => (meal.options[0].some(option => allOptionsData[0].includes(option))) );
//     }

//     if (newMealArray.length !== 0) {
//       setMealArray(newMealArray);
//     } else {
//         console.error("No meals found!");
//         setMealArray(allMeals);
//     }
//   }, [])

//   const nextMeal = () => {
//     if (currentIndex < (mealArray.length -1)) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
//     }

//   const selectMeal = () => {
//     mealChoice(mealArray[currentIndex]);
//   }

//   return (
//     <div className="meal-choice">
//       <div className="back-arrow" onClick={back}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-house-door-fill" viewBox="0 0 16 16">
//           <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
//         </svg>
//         <p>Back to Main Menu</p>
//       </div>
//       <div className="meal-picture">
//         <img src={mealArray[currentIndex].picture} alt={mealArray[currentIndex].mealName}></img>
//       </div>
//       <div className="meal-description">
//         <h2>{mealArray[currentIndex].mealName}</h2>
//       </div>
//       <div className="flipping-buttons">
//         <div className="next" onClick={nextMeal}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">
//           <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
//           </svg>
//           <p>Next Recipe</p>
//         </div>
//         <div className="heart" onClick={selectMeal}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
//              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
//           </svg>
//           <p>Choose Recipe</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Recipe({selectedMeal, back}) {
//   const [step, setStep] = useState(1);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < selectedMeal.instructions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setStep(step + 1);
//     }
//   }

//   const handleBack = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       setStep(step - 1);
//     }
//   }

//   //console.log(selectedMeal);
//   return (
//     <div className="recipe">
//       <div id="recipe-container">
//         <h2>Recipe for {selectedMeal.mealName}</h2>
        
//         <div className="ingredients">
//           <div className="meal-picture-recipe">
//             <img src={selectedMeal.picture} alt={selectedMeal.mealName}/>
//           </div>
//           {selectedMeal.recipe.map(item => 
//             <div className="recipe-map">
//               <input type="checkbox"></input><p>{item}</p>
//             </div>
//             )
//           }

//         </div>
//         <div className="instructions">
//           <h2>Instructions</h2>
//           <div id="instructions-step">
//             <p>{step}. {selectedMeal.instructions[currentIndex]}</p>
//           </div>
//         </div>
//         <div id="arrows">
//         <div id="back-step" onClick={handleBack}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
//           </svg>
//           <p>Previous Step</p>
//         </div>

//         <div id="next-step" onClick={handleNext}>
//           <p>Next Step</p>
//           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
//             <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
//           </svg>
//         </div>
//         </div>
//       </div>
//       <div className="back">
//           <button onClick={back}>Back to Main Menu</button>
//       </div>
//     </div>
//   )
// }

// function SearchRecipes ({back, selectedMeal}) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   // allMeals.map(meal => meal.ingredients.forEach(ingredient => ingredient))

//   useEffect (() => {
//     let searchMeals = allMeals.filter((meal) => ( 
//       (meal.mealName).toLowerCase().includes(searchTerm.toLowerCase()) || 
//       (meal.mealType).toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (meal.ingredients).includes(searchTerm.toLowerCase())
//     ));
//     setSearchResults(searchMeals);
//     //console.log(searchResults)
//   }, [searchTerm])

//   const selectMeal = (event) => {
//     let mealIndex = allMeals.findIndex(meal => meal.mealName === event.target.innerHTML)
//     selectedMeal(allMeals[mealIndex]);
//   }

//   return (
//     <div className="search-recipes">
//       <div id="search-container">
//         <div className="search-bar">
//           <input type="search" placeholder="Search Recipe, Type, Ingredient" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}></input>
//         </div>

//         <div className="search-results">
//           {searchResults.map(meal => <p class="search-result-link" onClick={selectMeal}>{meal.mealName}</p>)}
//         </div>
//       </div>
      
//       <div className="back">
//         <button onClick={back}>Back to Main Menu</button>
//       </div>
    
//     </div>
//   )
// }