const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');

class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.toCook = [];
  };

  addFavoriteRecipe(idOfClick) {
    recipeData.find(recipe => {
      if (recipe.id === idOfClick) {
        this.favoriteRecipes.push(recipe);
      }
    });
  }

  removeFavoriteRecipe(idOfClick) {
    let matchingRecipe = recipeData.find(recipe => recipe.id === idOfClick);
    let indexOfMatchingRecipe = this.favoriteRecipes.indexOf(matchingRecipe);
    this.favoriteRecipes.splice(indexOfMatchingRecipe, 1);
  }

  addRecipeToCook(idOfClick) {
    recipeData.find(recipe => {
      if (recipe.id === idOfClick) {
        this.toCook.push(recipe);
      }
    });
  }

  filterRecipesByType(searchWord) {
    let savedRecipes = this.favoriteRecipes.concat(this.toCook);
    let lowerCaseSearchWord = searchWord.toLowerCase();

    let foundRecipesByType =
    savedRecipes.reduce((matchingRecipes, recipe) => {
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

  findRecipeByName(searchWord) {
    let savedRecipes = this.favoriteRecipes.concat(this.toCook);
    let foundRecipesByName = [];
    let lowerCaseSearchWord = searchWord.toLowerCase();

    savedRecipes.filter(recipe => {
      let lowerCaseName = recipe.name.toLowerCase();
      if (lowerCaseName.includes(lowerCaseSearchWord)) {
        foundRecipesByName.push(recipe);
      }
    });

    if (foundRecipesByName.length === 0) {
      return 'We\'re Sorry, Your search did not return any results!'
    } else {
      return foundRecipesByName;
    }
  }

  findRecipeByIngredient(searchWord) {
    let savedRecipes = this.favoriteRecipes.concat(this.toCook);
    let foundIngredient =
    ingredientsData.find(ingredient => ingredient.name === searchWord.toLowerCase());
    let matchingIngredientRecipes = [];

    savedRecipes.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        if (ingredient.id === foundIngredient.id) {
          matchingIngredientRecipes.push(recipe);
        };
      });
    });

    return matchingIngredientRecipes;
  }
};

if (typeof module !== 'undefined') {
  module.exports = User;
}
