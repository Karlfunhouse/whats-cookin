const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe')
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');
const recipe1 = recipeData[0];

describe('Recipe', function() {
  let recipe;

  beforeEach(function(){
    recipe = new Recipe(recipe1);
  });

  it('should be a an instance of Recipe', function(){
    expect(recipe).to.be.an.instanceof(Recipe)
  });

  it('should be able to filter recipes by tag', function(){
    expect(recipe.filterByTag('snack').length).to.equal(9)
  });

  it('should be able to search recipes by ingredients', function(){
    console.log(recipe.searchByIngredient('brown sugar'))
    expect(recipe.searchByIngredient('brown sugar').length).to.equal(12)
  });

  // it('should be able to get the cost of its ingredients', function(){
  //
  // });
  //
  // it('should be able to get its instructions', function(){
  //
  // });




});
