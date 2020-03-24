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
    console.log(user)
  });

  it('user should be an instance of User', function(){
    expect(user).to.be.an.instanceof(User)
  });

  it('should be able to favorite a recipe', function(){

  });


});
