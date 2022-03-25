function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem (name,price,type){
 var menuItem = {
   name: (name),
   price: (price),
   type: (type)
 };
return menuItem;
 }



function addIngredients (ingredient,ingredients){
  if (ingredients.includes(ingredient)){
    return ("You are a foolish individual. This ingredient has already been added.");
  } else {
    return ingredients.push(ingredient);
 }
}
 
function formatPrice (price){
  return `$${price}`;
}

function decreasePrice (markdownee){
  var markdown = markdownee * .1;
  return markdownee - markdown;
}

function createRecipe (title, ingredient, type) {
  var recipe = {
   title: (title),
   ingredients: (ingredient),
   type: (type),
  };
  return recipe;
}

createMenuItem()
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};


// SHEESH! 