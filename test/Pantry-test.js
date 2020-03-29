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
  { name: 'wheat flour', amount: 5, cost: 142 },
  { name: 'bicarbonate of soda', amount: 3, cost: 582 },
  { name: 'eggs', amount: 8, cost: 472 },
  { name: 'sucrose', amount: 4, cost: 902 },
  { name: 'instant vanilla pudding', amount: 2, cost: 660 },
  { name: 'salt', amount: 6, cost: 280 },
  { name: 'unsalted butter', amount: 4, cost: 617 },
  { name: 'vanilla', amount: 4, cost: 926 },
  { name: 'apple', amount: 2, cost: 207 },
  { name: 'whole garlic clove', amount: 5, cost: 220 },
  { name: 's&p', amount: 2, cost: 524 },
  { name: 'black pepper', amount: 4, cost: 441 },
  { name: 'butter', amount: 6, cost: 618 },
  { name: 'baking powder', amount: 7, cost: 346 },
  { name: 'buttermilk', amount: 2, cost: 773 },
  { name: 'egg albumen', amount: 2, cost: 304 },
  { name: 'whole almonds', amount: 2, cost: 1029 },
  { name: 'chicken stock', amount: 2, cost: 454 },
  { name: 'onions', amount: 4, cost: 439 },
  { name: 'bar b que sauce', amount: 2, cost: 966 },
  { name: 'almondmilk', amount: 2, cost: 787 },
  { name: 'full-fat milk', amount: 4, cost: 276 },
  { name: 'flat leaf parsley leaves', amount: 4, cost: 1030 },
  { name: 'dried red chili', amount: 3, cost: 1015 },
  { name: 'jumbo shrimp', amount: 3, cost: 804 },
  { name: 'oregano', amount: 2, cost: 835 },
  { name: 'cream cheese', amount: 2, cost: 955 },
  { name: 'kosher salt', amount: 10, cost: 972 },
  { name: 'basil', amount: 2, cost: 203 },
  { name: 'white wine', amount: 4, cost: 675 },
  { name: 'lemon juice', amount: 4, cost: 274 },
  { name: 'roasted chicken', amount: 3, cost: 708 },
  { name: 'canned tomato', amount: 4, cost: 171 },
  { name: 'zucchini squash', amount: 4, cost: 742 },
  { name: 'canned chipotle chilies in adobo', amount: 2, cost: 299 },
  { name: 'white onions', amount: 2, cost: 449 }
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
    expect(pantry.findIngredientNames()).to.deep.equal(ingredientList);

  });


});
