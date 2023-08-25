class Meal {
  constructor(mealName, mealType, picture) {
      this._mealName = mealName;
      this._mealType = mealType;
      this._isHealthy = false;
      this._isVegetarian = false;
      this._isVegan = false;
      this._ingredients = [];
      this._recipe = [];
      this._picture = picture;
  }

  get mealName() {
      return this._mealName;
  }

  get mealType() {
      return this._mealType;
  }

  get isHealthy() {
      return this._isHealthy;
  }

  get isVegetarian() {
      return this._isVegetarian;
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

  set isVegetarian(value) {
      this._isVegetarian = value;
  }

  set isHealthy(value) {
      this._isHealthy = value;
  }

  set isVegan(value) {
    this._isVegan = value;
  }

  generateRecipe(unit, measurement, food) {
      this.ingredients.push(food);
      this.recipe.push(`${unit} ${measurement} ${food}`)
  }

  toggleVegetarian() {
      this.isVegetarian = !this.isVegetarian;
  }
  
  toggleVegan() {
      this.isVegan = !this.isVegan;
  }
  
  toggleHealthy() {
      this.isHealthy = !this.isHealthy;
  }
}

// function addNewMeal(mealName, mealType, picture, isVegetarian, isVegan, isHealthy) {
    
// }

const pancakes = new Meal("Pancakes", "breakfast", "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg");
pancakes.toggleVegetarian();
pancakes.generateRecipe(1, "cup", "flour");
pancakes.generateRecipe(1, "", "egg");
pancakes.generateRecipe(1, "cup", "water");

const eggsToast = new Meal("Eggs and Toast", "breakfast", "https://images.food52.com/OMFowAX383mQO2W3NYoZy4vXfug=/2016x1344/filters:format(webp)/91fbf05f-31e8-4e64-a042-900e58b1838a--fried_egg_on_toast.jpg");
eggsToast.toggleVegetarian();
eggsToast.generateRecipe(2, "", "eggs");
eggsToast.generateRecipe(2, "pieces of", "toast");
eggsToast.generateRecipe(1, "pinch of", "salt");

const salad = new Meal("Salad", "lunch", "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?quality=90&webp=true&resize=600,545");
salad.generateRecipe(1, "head", "lettuce");
salad.generateRecipe(1, "", "tomato");

const allMeals = [pancakes, eggsToast, salad];
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"];
const mealOptions = ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"];

export {Meal, allMeals, mealTypes, mealOptions};