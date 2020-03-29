const userData = require('../data/users')
let user = new User(userData[0]);

class Pantry {
  constructor(user) {
    this.pantry = user.pantry;
    this.ingredients =
  }
  //determine if i have enough ingredients in Pantry
  //to cook meal

  //dertermine deficit of ingredients needed to cook given meal

  //remove ingredients from pantry once cooked
}
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
