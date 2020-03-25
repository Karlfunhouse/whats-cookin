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
  });

  it('user should be an instance of User', function(){
    expect(user).to.be.an.instanceof(User)
  });

  it('should be able to favorite a recipe', function(){

  });

  it('should be able to find recipes (from favorites and toCook arrays) by search word', function(){
    user.favoriteRecipes = [recipeData[0], recipeData[1]];
    user.toCook = [recipeData[2]];
    expect(user.findRecipeByName('chocolate')).to.deep.equal([recipeData[0]]);

  });



});
