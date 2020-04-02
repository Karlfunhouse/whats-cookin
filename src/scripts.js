let users = usersData;
let allRecipes = recipeData;
let ingredients = ingredientsData;
let user = new User(generateRandom(users), allRecipes, ingredients);
let recipe = new Recipe(allRecipes[0], ingredients);
let allInstantiatedRecipes = instantiateRecipes();
let allRecipesNavBtn = document.querySelector('.all-recipe-button-js');
let favoriteRecipesNavBtn = document.querySelector('.favorite-recipes-button-js');
let recipesToCookNavBtn = document.querySelector('.recipes-to-cook-button-js');
let searchBar = document.querySelector('#search-bar');
let searchButton = document.querySelector('.search-button-js');
let featuredRecipeSection = document.querySelector('.featured-recipe-js');
let allRecipesSection = document.querySelector('.all-recipe-cards-js');
let selectedRecipe = document.querySelector('.display-entire-recipe');
let globalQuerySelector = document.querySelector('body');

globalQuerySelector.addEventListener('click', globalEventHandler);

function instantiateRecipes() {
  return allRecipes.map(recipe => new Recipe(recipe, ingredients));
}

populateFeaturedRecipe();

function globalEventHandler(event) {
  event.preventDefault();
  if(event.target === searchButton) {
    selectedRecipe.innerHTML = '';
    if (searchBar.value.length > 0) {
      populateSearchResults(searchBar.value);
    } else if (searchBar.value.length === 0) {
      populateRecipeCards(allInstantiatedRecipes, allRecipesSection);
    }
  } else if (event.target === allRecipesNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    allRecipesSection.classList.remove('hidden');
    selectedRecipe.classList.add('hidden');
    populateRecipeCards(allInstantiatedRecipes, allRecipesSection);
  } else if (event.target === favoriteRecipesNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    selectedRecipe.innerHTML = '';
    selectedRecipe.classList.add('hidden');
    populateRecipeCards(user.favoriteRecipes, allRecipesSection);
  } else if (event.target === recipesToCookNavBtn) {
    removeTargetedSection(featuredRecipeSection);
    selectedRecipe.innerHTML = '';
    selectedRecipe.classList.add('hidden');
    populateRecipeCards(user.toCook, allRecipesSection);
  } else if (event.target.classList.contains('heart-button')) {
    toggleIcon(event, 'heartIcon');
    addRecipeToArray(user.favoriteRecipes, event);
  } else if (event.target.classList.contains('heart-button-filled')) {
    toggleIcon(event, 'heartIconFilled');
    removeRecipeFromArray(user.favoriteRecipes, event);
    event.target.closest('article').remove();
  } else if (event.target.classList.contains('glove-button')) {
    toggleIcon(event, 'gloveIcon');
    addRecipeToArray(user.toCook, event);
  } else if (event.target.classList.contains('glove-button-filled')) {
    toggleIcon(event, 'gloveIconFilled');
    removeRecipeFromArray(user.toCook, event);
    event.target.closest('article').remove();
  } else if (event.target.classList.contains('recipe-card')) {
    displayEntireRecipe(event);
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
    <h4>Tags: ${featuredRecipe.tags}</h4>
  </div>`);
}

function removeTargetedSection(sectionToTarget) {
  sectionToTarget.classList.add('hidden');
}

function populateRecipeCards(recipeSet, htmlSection) {
  htmlSection.innerHTML = '';
  let heartButton;
  let gloveButton;
  let heart;
  let glove;
  recipeSet.forEach(recipe => {
    if(recipe.favorite === true) {
      heartButton = '../assets/heart-solid.svg';
      heart = 'heart-button-filled'
    } else if(recipe.favorite === false){
      heartButton = '../assets/heart-outlined.svg';
      heart = 'heart-button'
    }
    if(recipe.cookMe === true) {
      gloveButton = '../assets/kitchen-glove-solid.svg';
      glove = 'glove-button-filled';
    } else {
      gloveButton = '../assets/kitchen-glove-outlined.svg';
      glove = 'glove-button';
    }
    htmlSection.insertAdjacentHTML('afterbegin', `<article id="${recipe.id}" class="recipe-card">
    <img class="recipe-card-image" src="${recipe.image}" alt="${recipe.name} image">
    <h4>${recipe.name.toUpperCase()}</h4>
    <hr>
    <h5>${recipe.getCostOfIngredients()} / per recipe</h5>
    <h5>${recipe.tags[0]}</h5>
    <div class="card-icons">
      <button><img class=${heart} src=${heartButton} alt=""></button>
      <button><img class=${glove} src=${gloveButton} alt=""></button>
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
  let doesRecipeExist = recipeArray.find(recipe => recipe.id === recipeId);
  if(!doesRecipeExist) {
    if(recipeArray === user.favoriteRecipes) {
      user.addFavoriteRecipe(recipeId, allInstantiatedRecipes);
    } else if(recipeArray === user.toCook) {
      user.addRecipeToCook(recipeId, allInstantiatedRecipes);
    }
  }
}

function removeRecipeFromArray(recipeArray, event) {
  let recipeId = Number(event.target.closest('article').id);
  if(recipeArray === user.favoriteRecipes) {
    user.removeFavoriteRecipe(recipeId, allInstantiatedRecipes);
  } else if(recipeArray === user.toCook) {
    user.removeRecipeToCook(recipeId, allInstantiatedRecipes);
  }
}

function populateSearchResults(searchWord) {
  let allFoundRecipes = [];
  if (recipe.filterByTag(searchWord, allInstantiatedRecipes).length > 0) {
    allFoundRecipes = allFoundRecipes.concat(recipe.filterByTag(searchWord, allInstantiatedRecipes))
  }
  if (recipe.searchByIngredient(searchWord, allInstantiatedRecipes).length > 0) {
    allFoundRecipes = allFoundRecipes.concat(recipe.searchByIngredient(searchWord, allInstantiatedRecipes))
  }

  if (allFoundRecipes.length === 0) {
    featuredRecipeSection.remove();
    allRecipesSection.innerHTML = '';
    allRecipesSection.insertAdjacentHTML('afterbegin', `<h1>We're Sorry! There are no recipes that match your search result.</h1>`)
  } else {
  featuredRecipeSection.remove();
  populateRecipeCards(allFoundRecipes, allRecipesSection)
  }
}

function displayEntireRecipe(event) {
  selectedRecipe.innerHTML = '';
  let recipeCardId = Number(event.target.id);
  let foundRecipe = allInstantiatedRecipes.find(recipe => recipe.id === recipeCardId);
  allRecipesSection.innerHTML = '';
  selectedRecipe.classList.remove('hidden');
  featuredRecipeSection.remove();

  selectedRecipe.insertAdjacentHTML('afterbegin', `<img src=${foundRecipe.image} alt="" class="featured-recipe-photo">
  <div class="featured-recipe-text">
    <h2 style="margin-top: 0rem;"><span class="featured-recipe-title">SELECTED RECIPE</span></h2></br>
    <h3 style="margin-top: .25rem; margin-bottom: 4rem;">${foundRecipe.name}<h3>
    <hr>
    <h4 style="margin-top: -1rem;">Cost: ${foundRecipe.getCostOfIngredients()}</h4>
    <h4>Tags: ${foundRecipe.tags}</h4>
    <h4>Instructions: </h4>
    <section class="instructions-js">
    </section>
  </div>`);

  let instructionsP = document.querySelector('.instructions-js')
  let instructionNum = 1;
  foundRecipe.instructions.forEach(instruction => {
    instructionsP.insertAdjacentHTML('beforeend', `<p><strong>Step ${instructionNum}:</strong> ${instruction.instruction}</p>`);
    instructionNum++;
  })
  instructionNum = 1;
};
