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

  addInstructions(instruct) {
    this.instructions.push(`${instruct}`)
  }
}

// function addNewMeal(mealName, mealType, picture, options) {
    
// }

// Breakfast

const pancakes = new Meal("Pancakes", "Breakfast", "./images/pancakes.jpeg", ["Vegetarian", "Vegan"]);
pancakes.generateRecipe(1, "cup", "flour");
pancakes.generateRecipe(1, "", "banana");
pancakes.generateRecipe(1, "cup", "water");
pancakes.generateRecipe("1/2", "tsp", "baking powder");
pancakes.addInstructions("Mash the banana.")
pancakes.addInstructions("Mix all ingredients together in a bowl until liquidy and smooth.")
pancakes.addInstructions("Use a ladle and pour pancake batter onto a med-hot griddle.")
pancakes.addInstructions("Flip over every 30 seconds or so until golden brown.")


const eggsToast = new Meal("Eggs and Toast", "Breakfast", "./images/eggs-toast.jpeg", ["Healthy", "Vegetarian"]);
eggsToast.generateRecipe(2, "", "eggs");
eggsToast.generateRecipe(2, "pieces of", "toast");
eggsToast.generateRecipe(1, "pinch of", "salt and/or pepper");
eggsToast.addInstructions("Toast the bread.");
eggsToast.addInstructions("Crack eggs over a med-hot pan and cover with a lid for two minutes.");
eggsToast.addInstructions("Serve together when yolks are cooked as desired.");

const breakfastQuiche = new Meal("Crustless Breakfast Quiche", "Breakfast", "./images/breakfast-quiche.jpeg", ["Gluten-Free", "Vegetarian"]);
breakfastQuiche.generateRecipe("3", "", "eggs");
breakfastQuiche.generateRecipe("1", "cup", "mushrooms");
breakfastQuiche.generateRecipe("1", "cup", "shredded cheese");
breakfastQuiche.generateRecipe("1", "cup", "heavy cream");
breakfastQuiche.generateRecipe("", "", "salt");
breakfastQuiche.generateRecipe("", "", "pepper");
breakfastQuiche.addInstructions("In a bowl, beat the eggs with the spices.");
breakfastQuiche.addInstructions("Add all the ingredits into a pie dish or pan.");
breakfastQuiche.addInstructions("Bake at 375F for 30 minutes.");


const crepes = new Meal("Crepes", "Breakfast", "./images/crepes.jpeg", ["Vegetarian"]);
crepes.generateRecipe("1", "cup", "flour");
crepes.generateRecipe("2", "", "eggs");
crepes.generateRecipe("1", "cup", "milk");
crepes.generateRecipe("3", "tbsp", "butter");
crepes.generateRecipe("1/4", "cup", "water");
crepes.generateRecipe("1/2", "tsp", "salt");
crepes.addInstructions("In a bowl, mix all the ingredients together until smooth.")
crepes.addInstructions("Heat a pan to med-hot and oil lightly before cooking each crepe.")
crepes.addInstructions("Pour the batter and tilt the pan until the crepe has spread.")
crepes.addInstructions("Flip crepes every 30 seconds or so until golden-brown.")

const loxBagel = new Meal("Lox Bagel", "Breakfast", "./images/lox-bagel.jpeg", []);
loxBagel.generateRecipe("1", "", "bagel");
loxBagel.generateRecipe("1", "tbsp", "cream cheese");
loxBagel.generateRecipe("a few", "slices of", "smoked salmon");
loxBagel.generateRecipe("a few", "slices of", "onions");
loxBagel.generateRecipe("one", "slice of", "tomato");
loxBagel.addInstructions("Cup the bagel in half and toast.")
loxBagel.addInstructions("Put toppings onto the bagel and enjoy.")

const omelette = new Meal("Omelette", "Breakfast", "./images/omelette.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);
omelette.generateRecipe("2", "", "eggs");
omelette.generateRecipe("1", "", "green onion");
omelette.generateRecipe("3", "", "mushrooms");
omelette.generateRecipe("1/2", "", "tomato");
omelette.generateRecipe("2", "tbsp", "shredded cheese");
omelette.generateRecipe("1/2", "tsp", "salt");
omelette.addInstructions("Beat eggs in a bowl and chop all the vegetables.")
omelette.addInstructions("Over a medium heated pan, cook the vegetables with a bit of oil and salt.")
omelette.addInstructions("Pour in the eggs, sprinkle on the cheese and cover the pan with a lid.")
omelette.addInstructions("After two minutes, uncover, fold over and enjoy.")

const shakshuka = new Meal("Shakshuka", "Breakfast", "./images/shakshuka.jpeg", ["Healthy", "Gluten-Free"]);
shakshuka.generateRecipe("1", "", "onion");
shakshuka.generateRecipe("1", "", "red bell pepper");
shakshuka.generateRecipe("4", "", "garlic cloves");
shakshuka.generateRecipe("1", "can", "peeled tomatoes");
shakshuka.generateRecipe("6", "", "eggs");
shakshuka.generateRecipe("2", "tsp", "paprika");
shakshuka.generateRecipe("1", "tsp", "cumin powder");
shakshuka.generateRecipe("", "", "salt and pepper");
shakshuka.addInstructions("In a heated pan, saute chopped onions and bell pepper until onion becomes translucent.")
shakshuka.addInstructions("Add garlic, spices and peeled tomatoes. Break down the tomatoes with a spatula and bring the sauce to a simmer.")
shakshuka.addInstructions("Make small wells in the sauce and add each egg into a well. Cover the pan and cook for 5-8 minutes.")

const avocadoToast = new Meal("Avocado Toast", "Breakfast", "./images/avocado-toast.jpeg", ["Healthy", "Vegetarian", "Vegan"]);
avocadoToast.generateRecipe("1", "slice", "bread");
avocadoToast.generateRecipe("1/2", "", "avocado");
avocadoToast.generateRecipe("1/2", "tsp", "lemon juice");
avocadoToast.generateRecipe("", "", "salt and pepper");
avocadoToast.generateRecipe("", "", "(optional) egg");
avocadoToast.addInstructions("Mash avocado, lemon juice, salt and pepper in a bowl.")
avocadoToast.addInstructions("Toast bread or heat over a pan with a drizzle of olive oil.")
avocadoToast.addInstructions("Spread avocado mixture on top of toast.")
avocadoToast.addInstructions("(Optional) Cook egg to your liking (scrambled, boiled, etc.) and put on top of the avocado toast.")

// Lunch

const salad = new Meal("Salad", "Lunch", "./images/salad.jpeg", ["Vegetarian", "Healthy", "Gluten-Free", "Vegan"]);
salad.generateRecipe(1, "cup", "lettuce");
salad.generateRecipe(1, "", "tomato");
salad.generateRecipe("quarter", "", "cucumber");
salad.generateRecipe("4", "", "mushrooms");
salad.generateRecipe("1", "tbsp", "goat cheese");
salad.generateRecipe("1", "tbsp", "sliced almonds");
salad.generateRecipe("1", "tbsp", "cranberries");
salad.generateRecipe("1", "tsp", "dressing");
salad.addInstructions("Chop all vegetables as desired.")
salad.addInstructions("Mix together throughly and enjoy.")

const avocadoSandwich = new Meal("Avocado Sandwich", "Lunch", "./images/avocado-sandwich.jpeg", ["Vegetarian", "Healthy"]);
avocadoSandwich.generateRecipe("2", "slices of", "bread");
avocadoSandwich.generateRecipe("1/2", "", "avocado");
avocadoSandwich.generateRecipe("1/2", "tsp", "lemon juice");
avocadoSandwich.generateRecipe("", "", "salt and pepper");
avocadoSandwich.generateRecipe("", "", "cheese");
avocadoSandwich.generateRecipe("3", "slices of", "cucumber");
avocadoSandwich.generateRecipe("1", "slice of", "tomato");
avocadoSandwich.addInstructions("Mash avocado with lemon juice, salt, pepper and any other spices desired.")
avocadoSandwich.addInstructions("Toast bread and add avocado mixture, cheese, cucumbers and tomatoes to bread. Put together and enjoy.")

const lentilSoup = new Meal("Lentil Soup", "Lunch", "./images/lentil-soup.jpeg", ["Gluten-Free", "Healthy", "Vegetarian", "Vegan"]);


const pumpkinSoup = new Meal("Pumpkin Soup", "Lunch", "./images/pumpkin-soup.jpeg", ["Healthy", "Gluten-Free", "Vegetarian", "Vegan"]);

const ramen = new Meal("Ramen", "Lunch", "./images/ramen.jpeg", []);

const grilledChickenSandwich = new Meal("Grilled Chicken Sandwich", "Lunch", "./images/chicken-sandwich.jpeg", ["Healthy"]);
grilledChickenSandwich.generateRecipe("2", "slices of", "bread");
grilledChickenSandwich.generateRecipe("1/4", "lb", "chicken");
grilledChickenSandwich.generateRecipe("", "", "salt and pepper");
grilledChickenSandwich.generateRecipe("", "", "cheese");
grilledChickenSandwich.generateRecipe("3", "slices of", "cucumber");
grilledChickenSandwich.generateRecipe("1", "slice of", "tomato");

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

const allMeals = [pancakes, eggsToast, salad, butterChicken, applesPB, brownies, tacos, burger, avocadoSandwich, breadCheese, biriyani, breakfastQuiche, charcuterieBoard, crepes, iceCream, lentilSoup, loxBagel, omelette, pasta, peanutButterToast, pizza, pumpkinSoup, ramen, salmon, grilledChickenSandwich, shakshuka, spinachChicken, sushi, affogato, tea, coffee, cappucino, latte, hotChocolate, icedCoffee, lemonade, avocadoToast];

export {Meal, allMeals, mealTypes, mealOptions};