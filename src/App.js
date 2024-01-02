import { useState } from 'react';
import { mealTypes } from './data.js';
import MainMenu from './pages/MainMenu.js';
import MealChoice from './pages/MealChoice.js';
import Recipe from './pages/Recipe.js';
import SearchRecipes from './pages/SearchRecipes.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';

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
        <Header />
        {setPages()}
        <Nav back={backButton} search={searchPage}/>
      </div>
    </div>
    
  );
};