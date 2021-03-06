const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe')
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');
const recipe1 = recipeData[0];

describe('Recipe', function() {
  let recipe;

  beforeEach(function(){
    recipe = new Recipe(recipe1, ingredientsData);
  });

  it('should be a an instance of Recipe', function(){
    expect(recipe).to.be.an.instanceof(Recipe)
  });

  it('should be able to filter recipes by tag', function(){
    expect(recipe.filterByTag('snack', recipeData).length).to.equal(9)
  });

  it('should be able to search recipes by ingredients', function(){
    expect(recipe.searchByIngredient('brown sugar', recipeData).length).to.equal(12)
  });

  it('should be able to get the cost of its ingredients', function(){
    expect(recipe.getCostOfIngredients(ingredientsData)).to.equal('$177.76')
  });

  it('should be able to get its instructions', function(){
    expect(recipe.getRecipeInstructions().length).to.deep.equal(6)
  });




});
