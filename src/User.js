class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.toCook = [];
  };

  addFavoriteRecipe() {
    //push a selected recipe into this.favoriteRecipes array
  }

  removeFavoriteRecipe() {
    //find recipe by id and remove it
  }

  addRecipeToCook() {
    //add recipe to this.toCook array
  }

  filterRecipesByType() {

  }

  findRecipeByName(searchWord) {
    let allRecipes = this.favoriteRecipes.concat(this.toCook);
    let foundRecipesByName = [];
    let lowercaseSearchWord = searchWord.toLowerCase();

    allRecipes.filter(recipe => {
      let lowercaseName = recipe.name.toLowerCase();
      if (lowercaseName.includes(lowercaseSearchWord)) {
        foundRecipesByName.push(recipe);
      }
    });
    return foundRecipesByName;
  }

  findRecipeByIngredient() {

  }
};


module.exports = User;
