const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');


class Recipe {
  constructor(recipeData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
  }

  filterByTag(searchWord) {
    let lowerCaseSearchWord = searchWord.toLowerCase();
    let foundRecipesByType =
    recipeData.reduce((matchingRecipes, recipe) => {
      recipe.tags.forEach(tag => {
        if (tag === lowerCaseSearchWord) {
          matchingRecipes.push(recipe);
        }
      });
        return matchingRecipes;
    }, []);

    if (foundRecipesByType.length === 0) {
      return 'We\'re Sorry, Your search did not return any results!'
    } else {
      return foundRecipesByType;
    }
  }


  searchByIngredient(searchWord) {
    let foundIngredient =
      ingredientsData.find(ingredient => ingredient.name === searchWord.toLowerCase());
    let matchingIngredientRecipes = [];

    recipeData.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        if (ingredient.id === foundIngredient.id) {
          matchingIngredientRecipes.push(recipe);
        };
      });
    });
    return matchingIngredientRecipes;
  }

  getCostOfIngredients() {

  }

  getRecipeInstructions() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
