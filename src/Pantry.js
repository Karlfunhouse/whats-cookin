const userData = require('../data/users');
const ingredientsData = require('../data/ingredients');
const recipeData = require('../data/recipes');
const User = require('./User');
let user = new User(userData[0]);

class Pantry {
  constructor(user, ingredientsData, recipeData) {
    this.usersPantry = user.pantry;
    this.ingredientsData = ingredientsData;
    this.recipeData = recipeData;
    this.compiledPantryList = this.compileIngredientNamesQuantity();
  }

  compileIngredientNamesQuantity() {
    //compiles all data for usersPantry with useful data all in one location (array)
    return this.ingredientsData.reduce((ingredientList, currentIngredient) => {
      let matchingIngredients = this.usersPantry.filter(pantryIngredient => {
        pantryIngredient.ingredient === currentIngredient.id ? ingredientList.push(
          {
            name: currentIngredient.name,
            amount: pantryIngredient.amount,
            cost: currentIngredient.estimatedCostInCents,
          }
        ) : null;
      });
      return ingredientList;
    }, []);
  }

  locateRecipeIndex(id) {
      let foundRecipe = this.recipeData.find(recipe => recipe.id === id);
      return recipeData.indexOf(foundRecipe);
  }

  checkIngredientSupply(recipeId) {
    let recipe = recipeData[this.locateRecipeIndex(recipeId)];
    //compare recipe.ingredients to this.compileIngredientNamesQuantity;

    //return any ingredient in compiled list that is less than ingredient
    //required for recipe + the difference to have correct amount of ingredient;
    let recipeIngredients = recipe.ingredients;
    let pantry = this.compiledPantryList;

    recipeIngredients.reduce((ingredientsNeeded, currentIngredient) => {
      return ingredientsNeeded
    }, []);
  }

  //determine if i have enough ingredients in Pantry
  //to cook meal

  //dertermine deficit of ingredients needed to cook given meal

  //remove ingredients from pantry once cooked
}
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
