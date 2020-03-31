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

allRecipes.addEventListener('click', globalEventHandler);
myRecipes.addEventListener('click', globalEventHandler);
recipesToCook.addEventListener('click', globalEventHandler);
searchButton.addEventListener('click', globalEventHandler);

populateFeaturedRecipe()
function globalEventHandler(event) {
  event.preventDefault();
  if(event.target === searchButton) {
    console.log('search button hit')
  } else if (event.target === allRecipes) {
    console.log('all recipes hit');
  } else if (event.target === myRecipes) {
    console.log('my recipes button hit');
  } else if (event.target === recipesToCook) {
    console.log('recipe to cook button hit');
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
    <h2><span class="featured-recipe-title">FEATURED RECIPE</span></h2></br>
    <h3>${featuredRecipe.name}<h3>
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
