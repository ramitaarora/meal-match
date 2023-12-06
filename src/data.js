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

const ramen = new Meal("Ramen", "Lunch", "./images/ramen.jpeg", ["Vegetarian"])
ramen.generateRecipe("2", "packs", "ramen noodles")
ramen.generateRecipe("4", "cups", "chicken or vegetable broth")
ramen.generateRecipe("2", "cups", "sliced vegetables (e.g., bok choy, mushrooms, carrots)")
ramen.generateRecipe("1/2", "cup", "sliced green onions")
ramen.generateRecipe("2", "cloves of", "garlic, minced")
ramen.generateRecipe("1", "tbsp", "soy sauce")
ramen.generateRecipe("1", "tbsp", "sesame oil")
ramen.generateRecipe("1", "tsp", "grated ginger")
ramen.generateRecipe("2", "soft-boiled", "eggs (optional)")
ramen.generateRecipe("1/4", "cup", "tofu")
ramen.generateRecipe("", "", "sriracha or chili oil (optional)")
ramen.addInstructions("Cook the ramen noodles according to the package instructions. Drain and set aside.")
ramen.addInstructions("In a large pot, bring the chicken or vegetable broth to a simmer.")
ramen.addInstructions("Add sliced vegetables, green onions, minced garlic, soy sauce, sesame oil, and grated ginger to the simmering broth. Cook until the vegetables are tender.")
ramen.addInstructions("Divide the cooked ramen noodles among serving bowls.")
ramen.addInstructions("Ladle the hot broth and vegetables over the noodles.")
ramen.addInstructions("Optional: Top each bowl with a soft-boiled egg (optional), tofu, sliced green onions, and a drizzle of Sriracha or chili oil for extra flavor.")
ramen.addInstructions("Serve immediately and enjoy your homemade ramen!")

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

const tacos = new Meal("Tacos", "Dinner", "/images/tacos.jpeg", ["Vegetarian"])
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
pasta.generateRecipe(1, "cup", "pasta");
pasta.generateRecipe("1/2", "cup", "pasta sauce");
pasta.generateRecipe(2, "cloves of", "garlic");
pasta.generateRecipe("1/2", "", "onion");
pasta.generateRecipe(8, "", "mushrooms");
pasta.addInstructions("Bring a pot of water to a boil before adding the pasta in. Cook according to box instructions.")
pasta.addInstructions("Chop onions, garlic, mushrooms and any other vegetables desired.")
pasta.addInstructions("Cook all vegetables on medium heat with salt until onions are translucent.")
pasta.addInstructions("When pasta is al dente, add to vegetables and add in the sauce.")
pasta.addInstructions("Cook just until the sauce bubbles then serve.")

const pizza = new Meal("Pizza", "Dinner", "./images/pizza.jpeg", ["Vegetarian"]);
pizza.generateRecipe(1, "cup", "pizza dough");
pizza.generateRecipe("1/2", "cup", "pizza sauce");
pizza.generateRecipe(2, "cloves of", "garlic");
pizza.generateRecipe("1/2", "", "onion");
pizza.generateRecipe(8, "", "mushrooms");
pizza.addInstructions("Preheat your oven to the temperature specified on the pizza dough package.");
pizza.addInstructions("Roll out the pizza dough on a floured surface to your desired thickness.");
pizza.addInstructions("Spread pizza sauce evenly over the dough, leaving a small border around the edges.");
pizza.addInstructions("Mince the garlic and sprinkle it over the sauce.");
pizza.addInstructions("Thinly slice the onion and mushrooms, then distribute them over the pizza.");
pizza.addInstructions("Bake the pizza in the preheated oven until the crust is golden and the toppings are cooked.");
pizza.addInstructions("Remove from the oven and let it cool for a few minutes before slicing and serving.");

const salmon = new Meal("Salmon", "Dinner", "./images/salmon.jpeg", ["Healthy", "Gluten-Free"]);
salmon.generateRecipe(2, "", "salmon fillets")
salmon.generateRecipe("1/2", "cup", "fresh basil leaves")
salmon.generateRecipe("1/4", "cup", "pine nuts")
salmon.generateRecipe("1/4", "cup", "grated Parmesan cheese")
salmon.generateRecipe("1", "clove of", "garlic")
salmon.generateRecipe("1/2", "cup", "extra-virgin olive oil")
salmon.generateRecipe("1", "tbsp", "lemon juice")
salmon.generateRecipe("1/2", "tsp", "salt")
salmon.generateRecipe("1/4", "tsp", "black pepper")
salmon.addInstructions("Preheat your oven to 400°F.")
salmon.addInstructions("Place the salmon fillets on a baking sheet lined with parchment paper.")
salmon.addInstructions("In a food processor, combine fresh basil, pine nuts, Parmesan cheese, garlic, olive oil, lemon juice, salt, and black pepper. Blend until smooth to make the pesto sauce.")
salmon.addInstructions("Spread a generous layer of pesto sauce over each salmon fillet, ensuring they are evenly coated.")
salmon.addInstructions("Bake in the preheated oven for 12-15 minutes or until the salmon flakes easily with a fork.")

const sushi = new Meal("Sushi", "Dinner", "./images/sushi.jpeg", ["Healthy", "Gluten-Free"]);
sushi.generateRecipe("2", "cups", "sushi rice")
sushi.generateRecipe("1/4", "cup", "rice vinegar")
sushi.generateRecipe("1", "tbsp", "sugar")
sushi.generateRecipe("1/2", "tsp", "salt")
sushi.generateRecipe("5-6", "sheets", "nori (seaweed)")
sushi.generateRecipe("1", "", "avocado, sliced")
sushi.generateRecipe("1/2", "cup", "imitation crab or cooked crab meat, shredded")
sushi.generateRecipe("1/2", "", "cucumber, julienned")
sushi.generateRecipe("", "", "soy sauce, pickled ginger and wasabi (on the side)")
sushi.addInstructions("Rinse the sushi rice under cold water until the water runs clear. Cook the rice according to package instructions.")
sushi.addInstructions("While the rice is still warm, mix it with rice vinegar, sugar, and salt. Let it cool to room temperature.")
sushi.addInstructions("Place a bamboo sushi rolling mat on a flat surface. Put a sheet of plastic wrap on the mat.")
sushi.addInstructions("Place a sheet of nori, shiny side down, on the plastic wrap.")
sushi.addInstructions("With wet hands, spread a thin layer of prepared sushi rice over the nori, leaving a small border at the top.")
sushi.addInstructions("Arrange slices of avocado, shredded crab, and julienned cucumber in the center of the rice.")
sushi.addInstructions("Using the bamboo mat, roll the sushi tightly from the bottom, applying gentle pressure.")
sushi.addInstructions("Seal the edge with a bit of water. Slice the sushi roll into bite-sized pieces using a sharp, wet knife.")
sushi.addInstructions("Repeat the process with the remaining ingredients.")
sushi.addInstructions("Serve the sushi rolls with soy sauce, pickled ginger, and wasabi.")

// Snacks

const applesPB = new Meal("Apples and Peanut Butter", "Snacks", "./images/apples-peanut-butter.jpeg", ["Vegetarian", "Gluten-Free", "Healthy"]);
applesPB.generateRecipe(1, "whole", "apple");
applesPB.generateRecipe(1, "tbsp", "peanut butter");
applesPB.addInstructions("Cut apple into slices. Enjoy by dipping into peanut butter.")

const breadCheese = new Meal("Bread, Cheese & Meat", "Snacks", "./images/bread-cheese-snack.jpeg", ["Healthy"]);
breadCheese.generateRecipe(1, "slice", "bread");
breadCheese.generateRecipe(1, "slice", "deli meat of choice");
breadCheese.generateRecipe(1, "slice", "cheese");
breadCheese.addInstructions("Toast bread and enjoy with cheese, deli meat and any other toppings desired.")

const charcuterieBoard = new Meal("Charcuterie Board", "Snacks", "./images/charcuterie-board.jpeg", ["Healthy"]);
charcuterieBoard.generateRecipe("", "Assorted", "cheeses (e.g., brie, cheddar, gouda, blue cheese)")
charcuterieBoard.generateRecipe("", "Assorted", "cured meats (e.g., prosciutto, salami, chorizo)")
charcuterieBoard.generateRecipe("1", "cup", "mixed nuts")
charcuterieBoard.generateRecipe("1", "cup", "dried fruits (e.g., apricots, figs, dates)")
charcuterieBoard.generateRecipe("1", "cup", "olives (assorted varieties)")
charcuterieBoard.generateRecipe("1/2", "cup", "whole grain mustard")
charcuterieBoard.generateRecipe("1/2", "cup", "fruit preserves (e.g., fig or apricot)")
charcuterieBoard.generateRecipe("1", "", "baguette, sliced")
charcuterieBoard.generateRecipe("", "Fresh", "fruit (e.g., grapes, apple slices)")
charcuterieBoard.generateRecipe("", "", "Honey, for drizzling")
charcuterieBoard.generateRecipe("1", "sprig", "rosemary (for garnish, optional)")
charcuterieBoard.addInstructions("Start by selecting a large wooden board or platter as the base for your charcuterie board.")
charcuterieBoard.addInstructions("Arrange the assorted cheeses and cured meats on the board, creating visually appealing groupings.")
charcuterieBoard.addInstructions("Fill small bowls with mixed nuts, dried fruits, and olives, distributing them evenly around the board.")
charcuterieBoard.addInstructions("Place whole grain mustard and fruit preserves in small serving dishes for dipping.")
charcuterieBoard.addInstructions("Add slices of baguette to the board, placing them near the cheeses and meats.")
charcuterieBoard.addInstructions("Fill any remaining spaces on the board with fresh fruit, such as grapes or apple slices.")
charcuterieBoard.addInstructions("Drizzle honey over certain cheeses for added sweetness.")
charcuterieBoard.addInstructions("Optional: Garnish with a sprig of rosemary for a decorative touch.")

const peanutButterToast = new Meal("Peanut Butter Toast", "Snacks", "./images/pb-toast.jpeg", ["Vegetarian", "Vegan"]);
peanutButterToast.generateRecipe("", "", "peanut butter");
peanutButterToast.generateRecipe(1, "slice", "bread");
peanutButterToast.addInstructions("Toast the bread and spread peanut butter on top.")

// Desserts

const brownies = new Meal("Brownies", "Dessert", "./images/brownies.jpeg", []);
brownies.generateRecipe("1", "cup", "unsalted butter")
brownies.generateRecipe("2", "cups", "granulated sugar")
brownies.generateRecipe("4", "large", "eggs")
brownies.generateRecipe("1", "tsp", "vanilla extract")
brownies.generateRecipe("1/2", "cup", "all-purpose flour")
brownies.generateRecipe("1/2", "cup", "unsweetened cocoa powder")
brownies.generateRecipe("1/4", "tsp", "salt")
brownies.generateRecipe("1", "cup", "chopped nuts (optional)")
brownies.generateRecipe("1", "cup", "chocolate chips or chunks")
brownies.addInstructions("Preheat your oven to 350°F (175°C) and grease a baking pan.")
brownies.addInstructions("In a saucepan, melt the unsalted butter over low heat. Remove from heat and let it cool slightly.")
brownies.addInstructions("In a large mixing bowl, combine the melted butter and granulated sugar. Mix well.")
brownies.addInstructions("Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.")
brownies.addInstructions("In a separate bowl, sift together the all-purpose flour, unsweetened cocoa powder, and salt.")
brownies.addInstructions("Gradually add the dry ingredients to the wet ingredients, mixing until just combined.")
brownies.addInstructions("If desired, fold in chopped nuts and chocolate chips or chunks.")
brownies.addInstructions("Pour the batter into the prepared baking pan and spread it evenly.")
brownies.addInstructions("Bake in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out with moist crumbs (not wet batter).")
brownies.addInstructions("Allow the brownies to cool in the pan before cutting them into squares.")

const iceCream = new Meal("Ice Cream", "Dessert", "./images/ice-cream.jpeg", []);
iceCream.generateRecipe("1", "cup", "ice cream of choice");
iceCream.generateRecipe("", "", "toppings");
iceCream.addInstructions("Add toppings to ice cream or enjoy by itself!");

const affogato = new Meal("Affogato", "Dessert", "./images/affogato.jpeg", [])
affogato.generateRecipe("1", "scoop", "vanilla ice cream")
affogato.generateRecipe("1-2", "shots", "hot espresso")
affogato.generateRecipe("1", "tsp", "chocolate shavings (optional)")
affogato.generateRecipe("1", "tsp", "chopped nuts (optional)")
affogato.generateRecipe("1", "tsp", "caramel sauce (optional)")
affogato.addInstructions("Place a scoop of vanilla ice cream in a serving glass or bowl.")
affogato.addInstructions("Prepare 1-2 shots of hot espresso using your preferred method.")
affogato.addInstructions("Pour the hot espresso over the vanilla ice cream.")
affogato.addInstructions("Optional: Sprinkle chocolate shavings and chopped nuts over the affogato.")
affogato.addInstructions("Optional: Drizzle caramel sauce on top for extra flavor.")
affogato.addInstructions("Serve immediately while the espresso is hot and the ice cream is melting.")

// Drinks

const tea = new Meal("Tea", "Drinks", "./images/tea.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);
tea.generateRecipe(1, "tsp", "tea leaves or tea bag");
tea.addInstructions("Boil water, pour into a mug and add teabag or tea leaves to the mug.")
tea.addInstructions("Add milk, sugar or honey as desired once tea is finished brewing.")

const coffee = new Meal("Coffee", "Drinks", "./images/coffee.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);
coffee.generateRecipe(1, "tbsp", "coffee beans")
coffee.addInstructions("Grind the coffee, pick the size of grind according to coffee machine.")
coffee.addInstructions("Add coffee grounds to coffee machine. Enjoy coffee with milk, cream, sugar, cinnamon and more.")

const cappuccino = new Meal("Cappucino", "Drinks", "./images/cappucino.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);
cappuccino.generateRecipe("1", "shot", "espresso")
cappuccino.generateRecipe("1/2", "cup", "whole milk")
cappuccino.generateRecipe("1/4", "cup", "whipping cream")
cappuccino.generateRecipe("1", "tbsp", "granulated sugar (adjust to taste)")
cappuccino.generateRecipe("1/2", "tsp", "vanilla extract (optional)")
cappuccino.generateRecipe("1", "pinch", "cocoa powder for dusting (optional)")
cappuccino.addInstructions("Brew a shot of espresso using your preferred method.")
cappuccino.addInstructions("In a small saucepan, heat the whole milk until it is hot but not boiling. Froth the milk using a milk frother or by whisking vigorously.")
cappuccino.addInstructions("In a separate bowl, whip the whipping cream until it forms stiff peaks.")
cappuccino.addInstructions("Pour the hot espresso into a cappuccino cup.")
cappuccino.addInstructions("Add the frothed milk to the espresso, holding back the foam with a spoon. Spoon the foam on top of the milk.")
cappuccino.addInstructions("Sweeten the cappuccino with granulated sugar to taste and add vanilla extract if desired.")
cappuccino.addInstructions("Top the cappuccino with a dollop of whipped cream.")
cappuccino.addInstructions("Optional: Dust the cappuccino with cocoa powder for an extra touch of flavor.")

const latte = new Meal("Latte", "Drinks", "./images/latte.jpeg", ["Vegetarian", "Healthy", "Gluten-Free"]);
latte.generateRecipe("1", "shot", "espresso")
latte.generateRecipe("1", "cup", "steamed milk (whole milk or any non-dairy milk of choice)")
latte.generateRecipe("1", "tbsp", "foamed milk")
latte.generateRecipe("1", "tsp", "sugar (adjust to taste)")
latte.generateRecipe("1/2", "tsp", "vanilla extract (optional)")
latte.generateRecipe("1", "pinch", "cinnamon or cocoa powder for garnish (optional)")
latte.addInstructions("Brew a shot of espresso using your preferred method.")
latte.addInstructions("In a separate container, steam the milk until it is hot but not boiling.")
latte.addInstructions("Foam the milk using a milk frother or by whisking vigorously.")
latte.addInstructions("Pour the shot of espresso into a latte mug.")
latte.addInstructions("Add the steamed milk to the espresso.")
latte.addInstructions("Spoon the foamed milk on top of the latte.")
latte.addInstructions("Sweeten the latte with sugar to taste and add vanilla extract if desired.")
latte.addInstructions("Optional: Garnish with a pinch of cinnamon or cocoa powder.")
latte.addInstructions("Serve immediately and enjoy your homemade latte!")

const hotChocolate = new Meal("Hot Chocolate", "Drinks", "./images/hot-chocolate.jpeg", ["Vegetarian", "Gluten-Free"]);
hotChocolate.generateRecipe("2", "cups", "milk (whole milk or any non-dairy milk of choice)")
hotChocolate.generateRecipe("2", "tbsp", "unsweetened cocoa powder")
hotChocolate.generateRecipe("1-3", "tsp", "granulated sugar (adjust to taste)")
hotChocolate.generateRecipe("1/4", "cup", "chocolate chips or chopped chocolate")
hotChocolate.generateRecipe("1/2", "tsp", "vanilla extract")
hotChocolate.generateRecipe("1/8", "tsp", "salt (optional)")
hotChocolate.generateRecipe("Whipped cream, for topping (optional)")
hotChocolate.generateRecipe("Chocolate shavings or cocoa powder, for garnish (optional)")
hotChocolate.addInstructions("In a saucepan, heat the milk over medium heat until it is hot but not boiling.")
hotChocolate.addInstructions("In a separate bowl, whisk together cocoa powder, granulated sugar, and a pinch of salt if desired.")
hotChocolate.addInstructions("Gradually whisk the dry ingredients into the hot milk, ensuring there are no lumps.")
hotChocolate.addInstructions("Add chocolate chips or chopped chocolate to the mixture, stirring until melted and well combined.")
hotChocolate.addInstructions("Remove the saucepan from heat and stir in vanilla extract.")
hotChocolate.addInstructions("Pour the hot chocolate into mugs and top with whipped cream if desired.")
hotChocolate.addInstructions("Optional: Garnish with chocolate shavings or a sprinkle of cocoa powder.")
hotChocolate.addInstructions("Serve immediately and enjoy your comforting cup of hot chocolate!")

const icedCoffee = new Meal("Iced Coffee", "Drinks", "./images/iced-coffee.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);
icedCoffee.generateRecipe("1", "cup", "strong brewed coffee, chilled")
icedCoffee.generateRecipe("1-2", "tbsp", "simple syrup (adjust to taste)")
icedCoffee.generateRecipe("1/4", "cup", "milk or cream (optional)")
icedCoffee.generateRecipe("1", "cup", "ice cubes")
icedCoffee.generateRecipe("1", "tbsp", "whipped cream (optional)")
icedCoffee.generateRecipe("1", "tbsp", "chocolate syrup or caramel sauce (optional)")
icedCoffee.addInstructions("Brew a cup of strong coffee and let it cool to room temperature or chill it in the refrigerator.")
icedCoffee.addInstructions("In a glass, combine the chilled coffee with simple syrup, adjusting the sweetness to your liking.")
icedCoffee.addInstructions("Optional: Add milk or cream for a creamier texture.")
icedCoffee.addInstructions("Fill the glass with ice cubes.")
icedCoffee.addInstructions("Optional: Top with whipped cream and drizzle with chocolate syrup or caramel sauce for added indulgence.")
icedCoffee.addInstructions("Stir the iced coffee well to combine all ingredients.")
icedCoffee.addInstructions("Serve immediately and enjoy your refreshing iced coffee!")

const lemonade = new Meal("Lemonade", "Drinks", "./images/lemonade.jpeg", ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"]);
lemonade.generateRecipe("1", "cup", "freshly squeezed lemon juice (about 4-6 lemons)")
lemonade.generateRecipe("1", "cup", "granulated sugar (adjust to taste)")
lemonade.generateRecipe("4", "cups", "cold water")
lemonade.generateRecipe("1", "cup", "ice cubes")
lemonade.generateRecipe("Lemon slices for garnish (optional)")
lemonade.generateRecipe("Fresh mint leaves for garnish (optional)")
lemonade.addInstructions("In a pitcher, combine freshly squeezed lemon juice and granulated sugar.")
lemonade.addInstructions("Stir well until the sugar is dissolved.")
lemonade.addInstructions("Add cold water to the pitcher and mix thoroughly.")
lemonade.addInstructions("Taste the lemonade and adjust the sweetness by adding more sugar if needed.")
lemonade.addInstructions("Chill the lemonade in the refrigerator for at least 1-2 hours.")
lemonade.addInstructions("Fill glasses with ice cubes.")
lemonade.addInstructions("Pour the chilled lemonade over the ice.")
lemonade.addInstructions("Optional: Garnish with lemon slices and fresh mint leaves.")
lemonade.addInstructions("Stir before serving to mix any settled sugar.")

const chai = new Meal("Chai", "Drinks", "./images/chai.jpeg", ["Vegetarian", "Gluten-Free"])
chai.generateRecipe("2", "cups", "water")
chai.generateRecipe("2", "cups", "milk (whole milk or any non-dairy milk of choice)")
chai.generateRecipe("2", "tbsp", "black tea leaves")
chai.generateRecipe("4-6", "whole", "green cardamom pods")
chai.generateRecipe("4-6", "whole", "cloves")
chai.generateRecipe("2", "inch", "cinnamon stick")
chai.generateRecipe("1/2", "inch", "fresh ginger, sliced")
chai.generateRecipe("4-6", "", "black peppercorns")
chai.generateRecipe("2-3", "tablespoons", "granulated sugar (adjust to taste)")
chai.addInstructions("In a saucepan, combine water, loose tea leaves, cardamom pods, cloves, cinnamon stick, ginger, and black peppercorns.");
chai.addInstructions("Bring the mixture to a simmer over medium heat, then add milk until boiling again.");
chai.addInstructions("Reduce heat and let it simmer for 5-7 minutes to infuse the flavors.");
chai.addInstructions("Add granulated sugar to the chai, adjusting the sweetness to your liking.");
chai.addInstructions("Strain the chai into cups or mugs, discarding the tea bags and spices.");
chai.addInstructions("Serve the chai hot and enjoy!");

/// Data

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert", "Drinks"];
const mealOptions = ["Vegetarian", "Vegan", "Healthy", "Gluten-Free"];

//const allMeals = [pancakes, eggsToast, salad, butterChicken, applesPB, brownies, tacos, burger, avocadoSandwich, breadCheese, biriyani, breakfastQuiche, charcuterieBoard, crepes, iceCream, lentilSoup, loxBagel, omelette, pasta, peanutButterToast, pizza, ramen, pumpkinSoup, salmon, grilledChickenSandwich, sushi, shakshuka, spinachChicken, affogato, tea, coffee, cappuccino, latte, hotChocolate, icedCoffee, lemonade, avocadoToast, chai];
const allMeals = [tacos, pancakes, sushi, salad, grilledChickenSandwich, ramen, tea, brownies, omelette, pasta, lentilSoup, biriyani, loxBagel, crepes, butterChicken, avocadoToast, cappuccino, pizza, hotChocolate, salmon, icedCoffee, shakshuka, eggsToast, pumpkinSoup, affogato, charcuterieBoard, breadCheese, breakfastQuiche, avocadoSandwich, spinachChicken, applesPB, burger, coffee, lemonade, peanutButterToast, iceCream, chai];

export {Meal, allMeals, mealTypes, mealOptions};