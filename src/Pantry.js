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
  }

  findIngredientNames() {
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

  checkIngredientSupply() {

  }
  //determine if i have enough ingredients in Pantry
  //to cook meal

  //dertermine deficit of ingredients needed to cook given meal

  //remove ingredients from pantry once cooked
}
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
