const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const Pantry = require('../src/Pantry');
const usersData = require('../data/users');
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');

let pantry;
let ingredientList = [
  { name: 'wheat flour', id: 20081, amount: 5, cost: 142 },
  { name: 'bicarbonate of soda', id: 18372, amount: 3, cost: 582 },
  { name: 'eggs', id: 1123, amount: 8, cost: 472 },
  { name: 'sucrose', id: 19335, amount: 4, cost: 902 },
  { name: 'instant vanilla pudding', id: 19206, amount: 2, cost: 660 },
  { name: 'salt', id: 2047, amount: 6, cost: 280 },
  { name: 'unsalted butter', id: 1145, amount: 4, cost: 617 },
  { name: 'vanilla', id: 2050, amount: 4, cost: 926 },
  { name: 'apple', id: 9003, amount: 2, cost: 207 },
  { name: 'whole garlic clove', id: 11215, amount: 5, cost: 220 },
  { name: 's&p', id: 1102047, amount: 2, cost: 524 },
  { name: 'black pepper', id: 1002030, amount: 4, cost: 441 },
  { name: 'butter', id: 1001, amount: 6, cost: 618 },
  { name: 'baking powder', id: 18371, amount: 7, cost: 346 },
  { name: 'buttermilk', id: 1230, amount: 2, cost: 773 },
  { name: 'egg albumen', id: 1124, amount: 2, cost: 304 },
  { name: 'whole almonds', id: 12061, amount: 2, cost: 1029 },
  { name: 'chicken stock', id: 6172, amount: 2, cost: 454 },
  { name: 'onions', id: 11282, amount: 4, cost: 439 },
  { name: 'bar b que sauce', id: 6150, amount: 2, cost: 966 },
  { name: 'almondmilk', id: 93607, amount: 2, cost: 787 },
  { name: 'full-fat milk', id: 1077, amount: 4, cost: 276 },
  { name: 'flat leaf parsley leaves', id: 11297, amount: 4, cost: 1030 },
  { name: 'dried red chili', id: 1032009, amount: 3, cost: 1015 },
  { name: 'jumbo shrimp', id: 15152, amount: 3, cost: 804 },
  { name: 'oregano', id: 2027, amount: 2, cost: 835 },
  { name: 'cream cheese', id: 1017, amount: 2, cost: 955 },
  { name: 'kosher salt', id: 1082047, amount: 10, cost: 972 },
  { name: 'basil', id: 2044, amount: 2, cost: 203 },
  { name: 'white wine', id: 14106, amount: 4, cost: 675 },
  { name: 'lemon juice', id: 9152, amount: 4, cost: 274 },
  { name: 'roasted chicken', id: 5114, amount: 3, cost: 708 },
  { name: 'canned tomato', id: 10011693, amount: 4, cost: 171 },
  { name: 'zucchini squash', id: 11477, amount: 4, cost: 742 },
  { name: 'canned chipotle chilies in adobo', id: 99223, amount: 2, cost: 299 },
  { name: 'white onions', id: 10611282, amount: 2, cost: 449 }
];

let returnedIngredientSupply = [
  'You have enough wheat flour.',
  'You have enough bicarbonate of soda.',
  'You have enough eggs.',
  'You have enough sucrose.',
  'instant vanilla pudding exists in pantry, but you will need 1 more TBSPs.',
  'Item not in pantry, you still need 0.5 more Cs.',
  'You have enough salt.',
  'Item not in pantry, you still need 24 more SERVINGSs.',
  'Item not in pantry, you still need 2 more Cs.',
  'You have enough unsalted butter.',
  'You have enough vanilla.'
];

describe('Pantry', function(){
  beforeEach(function() {
    let user = new User(usersData[0]);
    pantry = new Pantry(user, ingredientsData, recipeData);
  });

  it('should be an instance of Pantry', function(){
    expect(pantry).to.be.an.instanceof(Pantry)
  });

  it('should be able to create a list of pantry ingredient names & quantities for a given recipe', function(){
    expect(pantry.compileIngredientNamesQuantity()).to.deep.equal(ingredientList);
  });

  it('should be able to locate the index of a recipe in the recipeData set', function(){
    expect(pantry.locateRecipeIndex(595736)).to.equal(0);
  });

  it('should be able to compare and report recipe ingredients v. pantry ingredients', function(){
    expect(pantry.checkIngredientSupply(595736)).to.deep.equal(returnedIngredientSupply);
  });

});
