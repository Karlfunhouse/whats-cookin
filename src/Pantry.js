// const userData = require('../data/users');
// const ingredientsData = require('../data/ingredients');
// const recipeData = require('../data/recipes');
// const User = require('./User');
// let user = new User(usersData[0]);

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
            id: currentIngredient.id,
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
      return this.recipeData.indexOf(foundRecipe);
  }

  checkIngredientSupply(recipeId) {
    let recipe = this.recipeData[this.locateRecipeIndex(recipeId)];
    let recipeIngredients = recipe.ingredients;
    let pantry = this.compiledPantryList;

    return recipeIngredients.map(recipeIngredient => {
      let thePantryItem = pantry.find(pantryItem => pantryItem.id === recipeIngredient.id)

        if(!thePantryItem) {
          return `${this.locateRecipeIngredientName(recipeIngredient.id)} is not in pantry, you will need ${recipeIngredient.quantity.amount} ${recipeIngredient.quantity.unit.toUpperCase()}s.`;
        } else if (thePantryItem.amount >= recipeIngredient.quantity.amount) {
          return `You have enough ${thePantryItem.name}.`
        } else if (thePantryItem.amount <= recipeIngredient.quantity.amount){
          let deficit = recipeIngredient.quantity.amount - thePantryItem.amount
          return `${thePantryItem['name']} exists in pantry, but you will need ${deficit} more ${recipeIngredient.quantity.unit.toUpperCase()}s.`
        }
    });
  }

  locateRecipeIngredientName(recipeIngredientId) {
    let foundIngredient = this.ingredientsData.find(ingredient => ingredient.id === recipeIngredientId);
    return foundIngredient.name;
  }

  cookAndRemoveRecipeIngredientsFromPantry() {
    //this is a stretch goal; We will return to this method.
  }
}
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
