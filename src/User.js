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
    let lowerCaseSearchWord = searchWord.toLowerCase();

    allRecipes.filter(recipe => {
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

  findRecipeByIngredient() {

  }
};


module.exports = User;
