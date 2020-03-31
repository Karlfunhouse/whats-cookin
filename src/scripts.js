// const recipeData = require('../data/recipes');
// const ingredientsData = require('../data/ingredients');
// const userData = require('../data/users')
// let randomNumber = ((Math.ceil(Math.random())));
let users = usersData;
let recipes = recipeData;
let ingredients = ingredientsData;
let user = new User(generateRandom(users))
console.log(user);
let allRecipes = document.querySelector('.all-recipe-button-js');
let myRecipes = document.querySelector('.my-recipes-button-js');
let recipesToCook = document.querySelector('.recipes-to-cook-button-js');
let searchBar = document.querySelector('#search-bar')
let searchButton = document.querySelector('.search-button-js')
let featuredRecipeSection = document.querySelector('.featured-recipe')

searchButton.addEventListener('click', globalEventHandler)
populateFeaturedRecipe()
function globalEventHandler(event) {
  event.preventDefault();
  if(event.target.classList.contains('search-button-js')) {
    console.log('fucking christ')
  }
}

function generateRandom(data) {
  let randomNumber = Math.floor(Math.random() * data.length);
  return data[randomNumber];
}

function populateFeaturedRecipe() {
  let randomRecipe = generateRandom(recipes)
  let featuredRecipe = new Recipe(randomRecipe)
  featuredRecipeSection.insertAdjacentHTML('afterbegin', `<img src=${featuredRecipe.image} alt="" class="featured-recipe-photo">
  <div class="featured-recipe-text">
    <h2>FEATURED RECIPE: </br>${featuredRecipe.name}</h2>
    <hr>
    <h4>Cost: ${featuredRecipe.getCostOfIngredients()}</h4>
    <h4>Ingredients:</h4>
  </div>`);
}

function populateRecipeCards(recipes) {

}

function populateFavoriteRecipes() {

}

function populateRecipesToCook () {

}
