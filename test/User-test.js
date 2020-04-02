const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const usersData = require('../data/users');
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');

const user1 = usersData[0];

describe('User', function() {
  let user;

  beforeEach(function(){
    user = new User(user1, recipeData, ingredientsData);
    user.favoriteRecipes = [recipeData[0], recipeData[1]];
    user.toCook = [recipeData[2]];
  });

  it('user should be an instance of User', function(){
    expect(user).to.be.an.instanceof(User)
  });

  it('should be able to favorite a recipe', function(){
    user.favoriteRecipes = [];
    user.addFavoriteRecipe(741603, recipeData);
    expect(user.favoriteRecipes).to.deep.equal([recipeData[3]]);
  });

  it('should be able to remove a favorite recipe', function(){
    user.removeFavoriteRecipe(595736, recipeData);
    expect(user.favoriteRecipes).to.deep.equal([recipeData[1]]);
  });


  it('should be able to add a recipe to Cook to the toCook array', function(){
    user.toCook = [];
    user.addRecipeToCook(412309, recipeData);
    expect(user.toCook).to.deep.equal([recipeData[2]]);
  });

  it('should be able to remove a recipe from the toCook array', function(){
    user.toCook = [];
    user.addRecipeToCook(412309, recipeData);
    user.removeRecipeToCook(412309, recipeData);
    expect(user.toCook).to.deep.equal([])
  });

  it('should be able to filter recipes by type', function(){
    expect(user.filterRecipesByType('dinner')).to.deep.equal([recipeData[1]]);
  });

  it('should have error handling that tells the user that their search by type didn\'t return results', function(){
    expect(user.filterRecipesByType('salad')).to.equal('We\'re Sorry, Your search did not return any results!');
  });

  it('should be able to find recipes (from favorites and toCook arrays) by search word', function(){
    expect(user.findRecipeByName('CHOCOLATE')).to.deep.equal([recipeData[0]]);
  });

  it('should have error handling that tells the user that their search by name didn\'t return results', function(){
    expect(user.findRecipeByName('BURGER')).to.equal('We\'re Sorry, Your search did not return any results!');
  });

  it('should be able to identify recipe based upon an ingredient', function(){
    expect(user.findRecipeByIngredient('wheat flour')).to.deep.equal([recipeData[0]]);
  });

});
