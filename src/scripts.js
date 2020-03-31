let users = usersData;
let allRecipes = recipeData;
let ingredients = ingredientsData;
let user = new User(generateRandom(users), allRecipes, ingredients);
// console.log(user);
let allRecipesBtn = document.querySelector('.all-recipe-button-js');
let myRecipesBtn = document.querySelector('.my-recipes-button-js');
let recipesToCookBtn = document.querySelector('.recipes-to-cook-button-js');
let searchBar = document.querySelector('#search-bar');
let searchButton = document.querySelector('.search-button-js');
let featuredRecipeSection = document.querySelector('.featured-recipe-js');
let allRecipesSection = document.querySelector('.all-recipe-cards-js');

allRecipesBtn.addEventListener('click', globalEventHandler);
myRecipesBtn.addEventListener('click', globalEventHandler);
recipesToCookBtn.addEventListener('click', globalEventHandler);
searchButton.addEventListener('click', globalEventHandler);

populateFeaturedRecipe()
function globalEventHandler(event) {
  event.preventDefault();
  if(event.target === searchButton) {
    console.log('search button hit')
  } else if (event.target === allRecipesBtn) {
    removeTargetedSection(featuredRecipeSection);
    populateRecipeCards(allRecipes);
    console.log('all recipes hit');
  } else if (event.target === myRecipesBtn) {
    console.log('my recipes button hit');
  } else if (event.target === recipesToCookBtn) {
    console.log('recipe to cook button hit');
  }
}

function generateRandom(data) {
  let randomNumber = Math.floor(Math.random() * data.length);
  return data[randomNumber];
}

function populateFeaturedRecipe() {
  let randomRecipe = generateRandom(allRecipes);
  let featuredRecipe = new Recipe(randomRecipe, ingredients);
  featuredRecipeSection.insertAdjacentHTML('afterbegin', `<img src=${featuredRecipe.image} alt="" class="featured-recipe-photo">
  <div class="featured-recipe-text">
    <h2><span class="featured-recipe-title">FEATURED RECIPE</span></h2></br>
    <h3>${featuredRecipe.name}<h3>
    <hr>
    <h4>Cost: ${featuredRecipe.getCostOfIngredients()}</h4>
    <h4>Ingredients:</h4>
  </div>`);
}

function removeTargetedSection(sectionToTarget) {
  sectionToTarget.classList.add('hidden');
}


function populateRecipeCards(recipes) {

}

function populateFavoriteRecipes() {

}

function populateRecipesToCook () {

}
