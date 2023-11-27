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
lentilSoup.generateRecipe("1/2", "", "onion");
lentilSoup.generateRecipe("1", "clove", "garlic");
lentilSoup.generateRecipe("1/2", "", "carrot");
lentilSoup.generateRecipe("1", "", "celery");
lentilSoup.generateRecipe("1", "dried", "bay leaf");
lentilSoup.generateRecipe("1", "cup", "crushed tomato");
lentilSoup.generateRecipe("1/4", "tsp", "cumin powder");
lentilSoup.generateRecipe("1/2", "tsp", "paprika");
lentilSoup.generateRecipe("1/2", "", "lemon");
lentilSoup.generateRecipe("", "", "salt and pepper");
lentilSoup.generateRecipe("3", "cups", "broth");
lentilSoup.generateRecipe("1", "can", "lentils");
lentilSoup.addInstructions("Heat oil in a large pot. Add garlic and onion and cook until onion is transparent.")
lentilSoup.addInstructions("Add peeled and chopped carrots ans celery. Cook until softened.")
lentilSoup.addInstructions("Add the remaining ingredients except lentils. Bring to a simmer for 15 minutes and stir often.")
lentilSoup.addInstructions("Add the lentils and simmar for another 15 minutes.")

const pumpkinSoup = new Meal("Pumpkin Soup", "Lunch", "./images/pumpkin-soup.jpeg", ["Healthy", "Gluten-Free", "Vegetarian", "Vegan"]);
pumpkinSoup.generateRecipe("1", "", "sugar pie pumpkin");
pumpkinSoup.generateRecipe("4", "cups", "broth");
pumpkinSoup.generateRecipe("1", "", "onion");
pumpkinSoup.generateRecipe("4", "cloves", "garlic");
pumpkinSoup.generateRecipe("1/2", "cup", "coconut milk");
pumpkinSoup.generateRecipe("1/2", "tsp", "ground cinnamon");
pumpkinSoup.generateRecipe("1/2", "tsp", "ground nutmeg");
pumpkinSoup.generateRecipe("", "", "salt and pepper");
pumpkinSoup.generateRecipe("2", "tbsp", "maple syrup");
pumpkinSoup.addInstructions("Halve the pumpkin and scoop out all the seeds. Bake in a 425 degrees Farenheit oven for 35 minutes until pumpkin flesh is soft.")
pumpkinSoup.addInstructions("Cook chopped onions and garlic in a medium-hot pot until onion is translucent.")
pumpkinSoup.addInstructions("Add pumpkin flesh, cinnamon, nutmeg, salt and pepper and broth to the pot. Bring to a boil and summer for 15 minutes.")
pumpkinSoup.addInstructions("Stir in coconut milk and maple syrup before letting it cool. Once cooled, use a blender to blend the soup.")

const grilledChickenSandwich = new Meal("Grilled Chicken Sandwich", "Lunch", "./images/chicken-sandwich.jpeg", ["Healthy"]);
grilledChickenSandwich.generateRecipe("2", "slices of", "bread");
grilledChickenSandwich.generateRecipe("1/4", "lb", "chicken");
grilledChickenSandwich.generateRecipe("", "", "salt and pepper");
grilledChickenSandwich.generateRecipe("", "", "cheese");
grilledChickenSandwich.generateRecipe("3", "slices of", "cucumber");
grilledChickenSandwich.generateRecipe("1", "slice of", "tomato");
grilledChickenSandwich.addInstructions("Chop chicken and cook in a pan over high heat. Turn regularly.")
grilledChickenSandwich.addInstructions("Toast bread and combine other ingredients on top of bread while chicken cooks.")
grilledChickenSandwich.addInstructions("Add chicken to sandwich and top off with any other toppings or sauces.")

const spinachChicken = new Meal("Spinach Chicken Salad", "Lunch", "./images/spinach-chicken.jpeg", ["Healthy", "Gluten-Free"]);
spinachChicken.generateRecipe("2", "cups", "spinach");
spinachChicken.generateRecipe("1", "", "chicken breast");
spinachChicken.generateRecipe("1/4", "cup", "pomegranate seeds");
spinachChicken.generateRecipe("2", "tbsp", "goat cheese");
spinachChicken.generateRecipe("2", "tbsp", "sliced almonds");
spinachChicken.addInstructions("Chop chicken and cook in a pan over high heat. Turn regularly.");
spinachChicken.addInstructions("Add spinach, pomegranate, goat cheese and almonds to a bowl while chicken cooks.")
spinachChicken.addInstructions("Add chicken to salad and enjoy.")

// Dinner

const butterChicken = new Meal("Butter Chicken", "Dinner", "./images/butter-chicken.jpg", ["Gluten-Free"]);
butterChicken.generateRecipe(1, "", "chicken breast/thighs");
butterChicken.generateRecipe(1, "", "roma tomato");
butterChicken.generateRecipe(2, "tbsp", "tomato paste/sauce");
butterChicken.generateRecipe(2, "cloves", "garlic");
butterChicken.generateRecipe(0.5, "", "onion");
butterChicken.generateRecipe(1, "tsp", "butter chicken masala");
butterChicken.generateRecipe(2, "tbsp", "yogurt");
butterChicken.addInstructions("In a hot wok, cook grated garlic and chopped onions in oil until onions are transparent.")
butterChicken.addInstructions("Add chopped roma tomatoes, tomato paste/sauce and butter chicken masala until tomatoes are soft and the mixture comes together.")
butterChicken.addInstructions("Add chopped chicken breast or thighs into the wok and top with yogurt. Add water until chicken is just submerged.")
butterChicken.addInstructions("Boil, then simmer until chicken is thoroughly cooked.")

const tacos = new Meal("Tacos", "Dinner", "./images/tacos.jpeg", ["Vegetarian"])
tacos.generateRecipe("", "", "taco shells");
tacos.generateRecipe("", "", "meat of choice (optional)");
tacos.generateRecipe("", "", "chopped lettuce");
tacos.generateRecipe("", "", "refried beans");
tacos.generateRecipe("", "", "cheese");
tacos.generateRecipe("", "", "(sides) salsa, guacamole, sour cream");
tacos.addInstructions("If using meat, cook meat as desired and add taco seasoning when cooked.")
tacos.addInstructions("Heat refried beans in a pan until hot.")
tacos.addInstructions("Add meat (optional), refried beans, chopped lettuce and cheese to taco shells.")
tacos.addInstructions("Enjoy with salsa, guacamole or sour cream.")

const burger = new Meal("Burger", "Dinner", "./images/burger.jpeg", []);
burger.generateRecipe(1, "", "burger patty");
burger.generateRecipe("", "", "buns");
burger.generateRecipe(1, "slice", "onion");
burger.generateRecipe(1, "slice", "tomato");
burger.generateRecipe(1, "slice", "cheese");
burger.generateRecipe("", "", "lettuce");
burger.addInstructions("In a hot pan, sear burger patty and cook as desired.")
burger.addInstructions("Toast burger bun for 2 minutes.")
burger.addInstructions("Add slices of onion, tomato and cheese in the burger bun. Place burger patty on top of cheese for melting.")
burger.addInstructions("Add ketchup, mustard or any other condiments as desired.")

const biriyani = new Meal("Biriyani", "Dinner", "./images/biryani.jpeg", ["Gluten-Free"]);
biriyani.generateRecipe(1, "cup", "rice");
biriyani.generateRecipe(1, "lb", "chicken thighs");
biriyani.generateRecipe(2, "tsp", "biriyani masala");
biriyani.generateRecipe(2, "cloves of", "garlic");
biriyani.generateRecipe("1/2", "", "onion");
biriyani.generateRecipe(1, "", "roma tomato");
biriyani.generateRecipe(1, "tbsp", "tomato pasta or sauce");
biriyani.generateRecipe("1/2", "tsp", "cumin seeds");
biriyani.generateRecipe("1/2", "tsp", "mustard seeds");
biriyani.generateRecipe("1", "tsp", "saffron");
biriyani.addInstructions("Cook one cup of rice with two cups of water as chicken cooks. Add saffron to rice (optional).")
biriyani.addInstructions("In a medium hot wok, add cumin seeds and mustard seeds to oil.")
biriyani.addInstructions("Add grated garlic and chopped onions in oil until onions are transparent.")
biriyani.addInstructions("Add chopped roma tomatoes, tomato paste/sauce and biriyani masala until tomatoes are soft and the mixture comes together.")
biriyani.addInstructions("Add chopped chicken thighs into the wok and top with yogurt. Add water until chicken is just submerged.")
biriyani.addInstructions("Boil, then simmer for twenty minutes.")
biriyani.addInstructions("Add rice evenly on top of chicken, patting it on top to seal. Cover with a lid until serving.")

const pasta = new Meal("Pasta", "Dinner", "./images/pasta.jpeg", ["Vegetarian", "Vegan"]);

const pizza = new Meal("Pizza", "Dinner", "./images/pizza.jpeg", ["Vegetarian"]);

const salmon = new Meal("Salmon", "Dinner", "./images/salmon.jpeg", ["Healthy", "Gluten-Free"]);


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

const allMeals = [pancakes, eggsToast, salad, butterChicken, applesPB, brownies, tacos, burger, avocadoSandwich, breadCheese, biriyani, breakfastQuiche, charcuterieBoard, crepes, iceCream, lentilSoup, loxBagel, omelette, pasta, peanutButterToast, pizza, pumpkinSoup, salmon, grilledChickenSandwich, shakshuka, spinachChicken, affogato, tea, coffee, cappucino, latte, hotChocolate, icedCoffee, lemonade, avocadoToast];

export {Meal, allMeals, mealTypes, mealOptions};