class Recipe {
  constructor(recipeData, ingredientsData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
    this.favorite = false;
    this.cookMe = false;
  }

  filterByTag(searchWord) {
    let lowerCaseSearchWord = searchWord.toLowerCase();
    // console.log(this.recipeData)
    let foundRecipesByType = this.recipeData.reduce((matchingRecipes, recipe) => {
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
      this.ingredientsData.find(ingredient => ingredient.name === searchWord.toLowerCase());
    let matchingIngredientRecipes = [];

    this.recipeData.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        if (ingredient.id === foundIngredient.id) {
          matchingIngredientRecipes.push(recipe);
        };
      });
    });
    return matchingIngredientRecipes;
  }

  getCostOfIngredients() {
    let totalCost = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(currentIngredient => {
        if (currentIngredient.id === ingredient.id) {
          totalCost += (Number(currentIngredient.estimatedCostInCents) * Number(ingredient.quantity.amount))
        }
      })
    })
    return `$${(totalCost / 100).toFixed(2)}`
  }

  getRecipeInstructions() {
    return this.instructions;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
