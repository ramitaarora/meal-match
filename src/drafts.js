class Meal {
    constructor(mealName, mealType, picture) {
        this._mealName = mealName;
        this._mealType = mealType;
        this._isHealthy = false;
        this._isVegetarian = false;
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
  
    generateRecipe(unit, measurement, food) {
        this.ingredients.push(food);
        this.recipe.push(`${unit} ${measurement} ${food}`)
    }
  
    toggleVegetarian() {
        this.isVegetarian = !this.isVegetarian;
    }
    
    toggleHealthy() {
        this.isHealthy = !this.isHealthy;
    }
  }
  
  const pancakes = new Meal("pancakes", "breakfast", "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg");
  pancakes.toggleVegetarian();
  pancakes.generateRecipe(1, "cup", "flour");
  pancakes.generateRecipe(1, "", "egg");
  pancakes.generateRecipe(1, "cup", "water");
  
  const eggsToast = new Meal("eggs and toast", "breakfast", "https://images.food52.com/OMFowAX383mQO2W3NYoZy4vXfug=/2016x1344/filters:format(webp)/91fbf05f-31e8-4e64-a042-900e58b1838a--fried_egg_on_toast.jpg");
  eggsToast.toggleVegetarian();
  eggsToast.generateRecipe(2, "", "eggs");
  eggsToast.generateRecipe(2, "pieces of", "toast");
  eggsToast.generateRecipe(1, "pinch of", "salt");
  
  const allMeals = [pancakes, eggsToast];


  