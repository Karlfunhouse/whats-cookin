const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe')
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');
const recipes = recipeData;

describe('Recipe', function() {
  let recipe;

  beforeEach(function(){
    allRecipe = new Recipe(recipes, ingredientsData);
    recipe1 = new Recipe(recipes[0], ingredientsData)
  });

  it('should be a an instance of Recipe', function(){
    expect(recipe1).to.be.an.instanceof(Recipe)
  });

  it('should be able to filter recipes by tag', function(){
    expect(allRecipe.filterByTag('snack').length).to.equal(9)
  });

  it('should be able to search recipes by ingredients', function(){
    expect(allRecipe.searchByIngredient('brown sugar').length).to.equal(12)
  });

  it('should be able to get the cost of its ingredients', function(){
    expect(recipe1.getCostOfIngredients()).to.equal('$177.76')
  });

  it('should be able to get its instructions', function(){
    expect(recipe1.getRecipeInstructions().length).to.deep.equal(6)
  });




});
