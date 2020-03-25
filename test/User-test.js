const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const usersData = require('../data/users');
const recipeData = require('../data/recipes');
const user1 = usersData[0];

describe('User', function() {
  let user;

  beforeEach(function(){
    user = new User(user1);
    user.favoriteRecipes = [recipeData[0], recipeData[1]];
    user.toCook = [recipeData[2]];
  });

  it('user should be an instance of User', function(){
    expect(user).to.be.an.instanceof(User)
  });

  it('should be able to favorite a recipe', function(){

  });

  it('should be able to filter recipes by type', function(){
    expect(user.filterRecipesByType('dinner')).to.deep.equal([recipeData[1]]);
  });

  it('should have error handling that tells the user that their search by type didn\'t return results', function(){

  });



  it('should be able to find recipes (from favorites and toCook arrays) by search word', function(){
    expect(user.findRecipeByName('CHOCOLATE')).to.deep.equal([recipeData[0]]);
  });

  it('should have error handling that tells the user that their search by name didn\'t return results', function(){
    expect(user.findRecipeByName('BURGER')).to.equal('We\'re Sorry, Your search did not return any results!');
  });

});
