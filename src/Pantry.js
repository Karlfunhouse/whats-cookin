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
      return recipeData.indexOf(foundRecipe);
  }

  // checkIngredientSupply(recipeId) {
  //   let recipe = recipeData[this.locateRecipeIndex(recipeId)];
  //   let recipeIngredients = recipe.ingredients;
  //   let pantry = this.compiledPantryList;
  //   console.log(pantry);

    // return recipeIngredients.reduce((ingredientsNeeded, currentIngredient) => {
    //   let thePantryItem = pantry.find(pantryItem => pantryItem.id === currentIngredient.id);
    //   console.log('current pantry item', thePantryItem);
    //   if (thePantryItem === undefined) {
    //     console.log('item not in pantry');
    //     // console.log('current ingredient', currentIngredient)
    //     ingredientsNeeded.push({
    //       name: currentIngredient.name,
    //       amountStillNeeded: currentIngredient.quantity.amount,
    //       cost: Number(currentIngredient.quantity.amount * currentIngredient.estimatedCostInCents),
    //     });
    //     console.log(ingredientsNeeded);
    //   } else if (thePantryItem.amount < currentIngredient.quantity.amount) {
    //     ingredientsNeeded.push({
    //       name: currentIngredient.name,
    //       amountStillNeeded: Number(currentIngredient.quantity.amount - thePantryItem.amount),
    //       cost: Number(this.amountStillNeeded * currentIngredient.estimatedCostInCents),
    //     });
    //   }
    //   if (ingredientsNeeded.length === 0) {
    //     return 'You have all the necessary ingredients in your pantry to prepare the recipe!'
    //   } else {
    //     return ingredientsNeeded;
    //   }
    // }, []);
  // }

  checkIngredientSupply(recipeId) {
    let recipe = recipeData[this.locateRecipeIndex(recipeId)];
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
  //determine if i have enough ingredients in Pantry
  //to cook meal

  //dertermine deficit of ingredients needed to cook given meal

  //remove ingredients from pantry once cooked
}
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
