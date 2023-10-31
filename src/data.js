class Meal {
  constructor(mealName, mealType, picture, options) {
      this._mealName = mealName;
      this._mealType = mealType;
      this._ingredients = [];
      this._recipe = [];
      this._picture = picture;
      this._options = [options];
      this._instructions = [];
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

  get instructions() {
    return this._instructions;
  }

  generateRecipe(unit, measurement, food) {
      this.ingredients.push(food);
      this.recipe.push(`${unit} ${measurement} ${food}`)
  }

  addInstructions(num, instruct) {
    this.instructions.push(`${num}, ${instruct}`)
  }
}

// function addNewMeal(mealName, mealType, picture, options) {
    
// }

// Breakfast

const pancakes = new Meal("Pancakes", "Breakfast", "./images/pancakes.jpeg", ["Vegetarian", "Vegan"]);
pancakes.generateRecipe(1, "cup", "flour");
pancakes.generateRecipe(1, "", "banana");
pancakes.generateRecipe(1, "cup", "water");
pancakes.generateRecipe("half", "tsp", "baking powder");
pancakes.addInstructions(1, "Mash the banana.")
pancakes.addInstructions(2, "Mix all ingredients together in a bowl until liquidy and smooth.")
pancakes.addInstructions(3, "Use a ladle and pour pancake batter onto a med-hot griddle.")
pancakes.addInstructions(4, "Flip over every 30 seconds or so until golden brown.")


const eggsToast = new Meal("Eggs and Toast", "Breakfast", "./images/eggs-toast.jpeg", ["Healthy", "Vegetarian"]);
eggsToast.generateRecipe(2, "", "eggs");
eggsToast.generateRecipe(2, "pieces of", "toast");
eggsToast.generateRecipe(1, "pinch of", "salt and/or pepper");
eggsToast.addInstructions(1, "Toast the bread.")
eggsToast.addInstructions(2, "Crack eggs over a med-hot pan and cover with a lid for two minutes.")
eggsToast.addInstructions(3, "Serve together when yolks are cooked as desired.")

const breakfastQuiche = new Meal("Crustless Breakfast Quiche", "Breakfast", "./images/breakfast-quiche.jpeg", ["Gluten-Free", "Vegetarian"]);
// breakfastQuiche.generateRecipe()

const crepes = new Meal("Crepes", "Breakfast", "./images/crepes.jpeg", ["Vegetarian"]);

const loxBagel = new Meal("Lox Bagel", "Breakfast", "./images/lox-bagel.jpeg", []);

const omelette = new Meal("Omelette", "Breakfast", "./images/omelette.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);

const shakshuka = new Meal("Shakshuka", "Breakfast", "./images/shakshuka.jpeg", ["Healthy", "Gluten-Free"]);

// Lunch

const salad = new Meal("Salad", "Lunch", "./images/salad.jpeg", ["Vegetarian", "Healthy", "Gluten-Free", "Vegan"]);
salad.generateRecipe(1, "head", "lettuce");
salad.generateRecipe(1, "", "tomato");

const avocadoSandwich = new Meal("Avocado Sandwich", "Lunch", "./images/avocado-sandwich.jpeg", ["Vegetarian", "Healthy"]);

const lentilSoup = new Meal("Lentil Soup", "Lunch", "./images/lentil-soup.jpeg", ["Gluten-Free", "Healthy", "Vegetarian", "Vegan"]);

const pumpkinSoup = new Meal("Pumpkin Soup", "Lunch", "./images/pumpkin-soup.jpeg", ["Healthy", "Gluten-Free", "Vegetarian", "Vegan"]);

const ramen = new Meal("Ramen", "Lunch", "./images/ramen.jpeg", []);

const grilledChickenSandwich = new Meal("Grilled Chicken Sandwich", "Lunch", "./images/chicken-sandwich.jpeg", ["Healthy"]);

const spinachChicken = new Meal("Spinach Chicken", "Lunch", "./images/spinach-chicken.jpeg", ["Healthy", "Gluten-Free"]);

// Dinner

const butterChicken = new Meal("Butter Chicken", "Dinner", "./images/butter-chicken.jpg", ["Gluten-Free"]);
butterChicken.generateRecipe(1, "", "chicken breast");
butterChicken.generateRecipe(1, "", "tomato");
butterChicken.generateRecipe(2, "cloves", "garlic");
butterChicken.generateRecipe(0.5, "", "onion");
butterChicken.generateRecipe(1, "tsp", "butter chicken masala");

const tacos = new Meal("Tacos", "Dinner", "./images/tacos.jpeg", ["Vegetarian"])
tacos.generateRecipe("", "", "taco shells");
tacos.generateRecipe("", "", "meat of choice");
tacos.generateRecipe("", "", "lettuce");
tacos.generateRecipe("", "", "refried beans");
tacos.generateRecipe("", "", "cheese");

const burger = new Meal("Burger", "Dinner", "./images/burger.jpeg", []);
burger.generateRecipe(1, "", "patty");
burger.generateRecipe("", "", "buns");
burger.generateRecipe(1, "slice", "onion");
burger.generateRecipe(1, "slice", "tomato");
burger.generateRecipe(1, "slice", "cheese");
burger.generateRecipe("", "", "lettuce");

const biriyani = new Meal("Biriyani", "Dinner", "./images/biryani.jpeg", ["Gluten-Free"]);

const pasta = new Meal("Pasta", "Dinner", "./images/pasta.jpeg", ["Vegetarian", "Vegan"]);

const pizza = new Meal("Pizza", "Dinner", "./images/pizza.jpeg", ["Vegetarian"]);

const salmon = new Meal("Salmon", "Dinner", "./images/salmon.jpeg", ["Healthy", "Gluten-Free"]);

const sushi = new Meal("Sushi", "Dinner", "./images/sushi.jpeg", []);

// Snacks

const applesPB = new Meal("Apples and Peanut Butter", "Snacks", "./images/apples-peanut-butter.jpeg", ["Vegetarian", "Gluten-Free", "Healthy"]);
applesPB.generateRecipe(1, "whole", "apple");
applesPB.generateRecipe(1, "tbsp", "peanut butter");

const breadCheese = new Meal("Bread, Cheese & Meat", "Snacks", "./images/bread-cheese-snack.jpeg", ["Healthy"]);

const charcuterieBoard = new Meal("Charcuterie Board", "Snacks", "./images/charcuterie-board.jpeg", ["Healthy"]);

const peanutButterToast = new Meal("Peanut Butter Toast", "Snacks", "./images/pb-toast.jpeg", ["Vegetarian", "Vegan"]);

// Desserts

const brownies = new Meal("Brownies", "Dessert", "./images/brownies.jpeg", []);
brownies.generateRecipe(1, "cup", "flour");
brownies.generateRecipe(0.5, "cup", "sugar");

const iceCream = new Meal("Ice Cream", "Dessert", "./images/ice-cream.jpeg", []);

const affogato = new Meal("Affogato", "Dessert", "./images/affogato.jpeg", [])

// Drinks

const tea = new Meal("Tea", "Drinks", "./images/tea.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);

const coffee = new Meal("Coffee", "Drinks", "./images/coffee.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);

const cappucino = new Meal("Cappucino", "Drinks", "./images/cappucino.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);

const latte = new Meal("Latte", "Drinks", "./images/latte.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);

const hotChocolate = new Meal("Hot Chocolate", "Drinks", "./images/hot-chocolate.jpeg", ["Vegetarian", "Gluten-Free"]);

const icedCoffee = new Meal("Iced Coffee", "Drinks", "./images/iced-coffee.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);

const lemonade = new Meal("Lemonade", "Drinks", "./images/lemonade.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);


/// Data

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert", "Drinks"];
const mealOptions = ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"];

const allMeals = [pancakes, eggsToast, salad, butterChicken, applesPB, brownies, tacos, burger, avocadoSandwich, breadCheese, biriyani, breakfastQuiche, charcuterieBoard, crepes, iceCream, lentilSoup, loxBagel, omelette, pasta, peanutButterToast, pizza, pumpkinSoup, ramen, salmon, grilledChickenSandwich, shakshuka, spinachChicken, sushi, affogato, tea, coffee, cappucino, latte, hotChocolate, icedCoffee, lemonade];

export {Meal, allMeals, mealTypes, mealOptions};