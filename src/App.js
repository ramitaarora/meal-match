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

  // Slide Animations
  const [slide, setSlide] = useState('slideInLeft')


  const setMeals = (mealData, optionData) => {
    setMealTypeData(mealData);
    //console.log(mealTypeData);
    setOptionTypeData([optionData]);
    //console.log(optionTypeData);
    setMainMenuPage(false);
    setMealChoicePage(true);

    setSlide('slideInLeft')
  }

  const setMealSelection = (chosenMeal) => {
    setMealChoice(chosenMeal);
    setMealChoicePage(false);
    setSearchRecipes(false);
    setRecipePage(true);

    setSlide('slideInLeft')
  }

  const backButton = () => {
    setMealChoicePage(false);
    setRecipePage(false);
    setSearchRecipes(false);
    setMealTypeData(mealTypes[0]);
    setOptionTypeData([]);
    setMealChoice();
    setMainMenuPage(true);

    setSlide('slideInLeft')
  }

  const searchPage = () => {
    setMainMenuPage(false);
    setMealChoicePage(false);
    setRecipePage(false);
    setMealTypeData(mealTypes[0]);
    setOptionTypeData([]);
    setMealChoice();
    setSearchRecipes(true);

    setSlide('slideInLeft')
  }

  const handleSearch = () => {
    setSlide('slideOutRight');
    setTimeout(() => {
      searchPage()
    }, 300)
  }

  const setPages = () => {
    if (mainMenuPage) {
      return <MainMenu setMeals={setMeals} search={handleSearch} slide={slide} setSlide={setSlide}/>
    } else if (mealChoicePage) {
      return <MealChoice mealOptionsData={mealTypeData} allOptionsData={optionTypeData} mealChoice={setMealSelection} slide={slide} setSlide={setSlide}/>
    } else if (recipePage) {
      return <Recipe selectedMeal={mealChoice} slide={slide} setSlide={setSlide}/>
    } else if (searchRecipes) {
      return <SearchRecipes selectedMeal={setMealSelection} slide={slide} setSlide={setSlide}/>
    }
    
    else {
      return <p>Error</p>
    }
  }

  return (
    <div className="app">
      <div className="app-card">
        <Header />
        <div id={slide}>
        {setPages()}
        </div>
        <Nav back={backButton} search={searchPage} slide={slide} setSlide={setSlide}/>
      </div>
    </div>
    
  );
};