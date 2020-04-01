let users = usersData;
let allRecipes = recipeData;
let ingredients = ingredientsData;
let user = new User(generateRandom(users), allRecipes, ingredients);
// console.log(user);
let allRecipesNavBtn = document.querySelector('.all-recipe-button-js');
let favoriteRecipesNavBtn = document.querySelector('.favorite-recipes-button-js');
let recipesToCookNavBtn = document.querySelector('.recipes-to-cook-button-js');
let searchBar = document.querySelector('#search-bar');
let searchButton = document.querySelector('.search-button-js');
let featuredRecipeSection = document.querySelector('.featured-recipe-js');
let allRecipesSection = document.querySelector('.all-recipe-cards-js');
let globalQuerySelector = document.querySelector('body');

globalQuerySelector.addEventListener('click', globalEventHandler);

populateFeaturedRecipe();

function globalEventHandler(event) {
  event.preventDefault();
  if(event.target === searchButton) {
    console.log('search button hit');
  } else if (event.target === allRecipesNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    populateRecipeCards(allRecipes, allRecipesSection);
    console.log('all recipes hit');
  } else if (event.target === favoriteRecipesNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    populateRecipeCards(user.favoriteRecipes, allRecipesSection);
    console.log('my recipes button hit');
  } else if (event.target === recipesToCookNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    populateRecipeCards(user.toCook, allRecipesSection);
    console.log('recipe to cook button hit');
  } else if (event.target.classList.contains('heart-button')) {
    toggleIcon(event, 'heartIcon');
    //push recipe to user.favoriteRecipes
    addRecipeToArray('favorites', event);
  } else if (event.target.classList.contains('heart-button-filled')) {
    toggleIcon(event, 'heartIconFilled');
    //remove recipe from user.favoriteRecipes
    removeRecipeFromArray('favorites', event)
  } else if (event.target.classList.contains('glove-button')) {
    toggleIcon(event, 'gloveIcon');
    //add recipe to user.toCook array
    addRecipeToArray('recipesToCook', event);
  } else if (event.target.classList.contains('glove-button-filled')) {
    toggleIcon(event, 'gloveIconFilled');
    removeRecipeFromArray('recipesToCook', event)
    //remove recipe from user.toCook array
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


function populateRecipeCards(recipeSet, htmlSection) {
  recipeSet.forEach(recipe => {
    let currentRecipeInstance = new Recipe(recipe, ingredients);
    htmlSection.insertAdjacentHTML('afterbegin', `<article id="${currentRecipeInstance.id}" class="recipe-card">
    <img class="recipe-card-image" src="${currentRecipeInstance.image}" alt="${currentRecipeInstance.name} image">
    <h4>${currentRecipeInstance.name.toUpperCase()}</h4>
    <hr>
    <h5>${currentRecipeInstance.getCostOfIngredients()} / per recipe</h5>
    <h5>${currentRecipeInstance.tags[0]}</h5>
    <div class="card-icons">
      <button><img class="heart-button" src="../assets/heart-outlined.svg" alt=""></button>
      <button><img class="glove-button" src="../assets/kitchen-glove-outlined.svg" alt=""></button>
    </div>
  </article>`)
})
}

function toggleIcon(event, icon) {
  let recipeId = event.target.closest('article').id;
  if(icon === 'heartIcon') {
    let heartIcon = event.target.closest('.heart-button');
    heartIcon.src = '../assets/heart-solid.svg';
    heartIcon.classList.add('heart-button-filled');
    heartIcon.classList.remove('heart-button');
  } else if (icon === 'heartIconFilled') {
    let heartIcon = event.target.closest('.heart-button-filled');
    heartIcon.src = '../assets/heart-outlined.svg';
    heartIcon.classList.remove('heart-button-filled');
    heartIcon.classList.add('heart-button');
  } else if (icon === 'gloveIcon') {
    let gloveIcon = event.target.closest('.glove-button');
    gloveIcon.src = '../assets/kitchen-glove-solid.svg';
    gloveIcon.classList.add('glove-button-filled');
    gloveIcon.classList.remove('glove-button')
  } else if (icon === 'gloveIconFilled') {
    let gloveIcon = event.target.closest('.glove-button-filled');
    gloveIcon.src = '../assets/kitchen-glove-outlined.svg';
    gloveIcon.classList.remove('glove-button-filled');
    gloveIcon.classList.add('glove-button')
  }
}

function addRecipeToArray(recipeArray, event) {
  let recipeId = Number(event.target.closest('article').id);
  console.log(recipeId);
  if(recipeArray === 'favorites') {
    user.addFavoriteRecipe(recipeId);
    console.log(user.favoriteRecipes)
  } else if(recipeArray === 'recipesToCook') {
    user.addRecipeToCook(recipeId);
    console.log(user.toCook)
  }
}

function removeRecipeFromArray(recipeArray, event) {
  let recipeId = Number(event.target.closest('article').id);
  if(recipeArray === 'favorites') {
    user.removeFavoriteRecipe(recipeId);
    console.log(user.favoriteRecipes);
  } else if(recipeArray === 'recipesToCook') {
    user.removeRecipeToCook(recipeId);
    console.log(user.toCook);
  }
}
