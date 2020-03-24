class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.toCook = [];
  };

  favoriteARecipe() {
    //push a selected recipe into this.favoriteRecipes array
  }

};


module.exports = User;
