class Meal {
  constructor(mealName, mealType, picture, options) {
      this._mealName = mealName;
      this._mealType = mealType;
      this._ingredients = [];
      this._recipe = [];
      this._picture = picture;
      this._options = [options];
  }

  get mealName() {
      return this._mealName;
  }

  get mealType() {
      return this._mealType;
  }

  get ingredients() {
      return this._ingredients;
  }

  get recipe() {
      return this._recipe;
  }

  get picture() {
    return this._picture;
  }
  
  get options() {
    return this._options;
  }

  generateRecipe(unit, measurement, food) {
      this.ingredients.push(food);
      this.recipe.push(`${unit} ${measurement} ${food}`)
  }
}

// function addNewMeal(mealName, mealType, picture, options) {
    
// }

const pancakes = new Meal("Pancakes", "Breakfast", "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg", ["Vegetarian", "Vegan"]);
//pancakes.toggleVegetarian();
pancakes.generateRecipe(1, "cup", "flour");
pancakes.generateRecipe(1, "", "banana");
pancakes.generateRecipe(1, "cup", "water");

const eggsToast = new Meal("Eggs and Toast", "Breakfast", "https://images.food52.com/OMFowAX383mQO2W3NYoZy4vXfug=/2016x1344/filters:format(webp)/91fbf05f-31e8-4e64-a042-900e58b1838a--fried_egg_on_toast.jpg", ["Healthy"]);
//eggsToast.toggleVegetarian();
eggsToast.generateRecipe(2, "", "eggs");
eggsToast.generateRecipe(2, "pieces of", "toast");
eggsToast.generateRecipe(1, "pinch of", "salt");

const salad = new Meal("Salad", "Lunch", "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?quality=90&webp=true&resize=600,545", ["Vegetarian", "Healthy", "Gluten-Free", "Vegan"]);
salad.generateRecipe(1, "head", "lettuce");
salad.generateRecipe(1, "", "tomato");

const butterChicken = new Meal("Butter Chicken", "Dinner", "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg", []);
butterChicken.generateRecipe(1, "", "chicken breast");
butterChicken.generateRecipe(1, "", "tomato");
butterChicken.generateRecipe(2, "cloves", "garlic");
butterChicken.generateRecipe(0.5, "", "onion");
butterChicken.generateRecipe(1, "tsp", "butter chicken masala");

const applesPB = new Meal("Apples and Peanut Butter", "Snacks", "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/apple-slices-with-peanut-butter-snack-recipe.jpg", ["Vegetarian", "Gluten-Free", "Healthy"]);
applesPB.generateRecipe(1, "whole", "apple");
applesPB.generateRecipe(1, "tbsp", "peanut butter");

const brownies = new Meal("Brownies", "Dessert", "https://joyfoodsunshine.com/wp-content/uploads/2019/06/fudgy-homemade-brownies-recipe-from-scratch-7.jpg", []);
brownies.generateRecipe(1, "cup", "flour");
brownies.generateRecipe(0.5, "cup", "sugar");

const allMeals = [pancakes, eggsToast, salad, butterChicken, applesPB, brownies];
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"];
const mealOptions = ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"];

export {Meal, allMeals, mealTypes, mealOptions};