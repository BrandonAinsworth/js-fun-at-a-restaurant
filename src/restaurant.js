function createRestaurant(name) {
 return {
  name: (name),
  menus: {
  breakfast: [],
  lunch: [],
  dinner: [],
  }
};
}

function addMenuItem(ristorante, food){
  var foodType = food.type;
  if (ristorante.menus[foodType].includes(food) === false) {
    ristorante.menus[foodType].push(food)
  }
}

function removeMenuItem(ristorante, food, type) {
  for (var i = 0; i < ristorante.menus[type].length; i++) {
    if (ristorante.menus[type][i].name === food) {
    ristorante.menus[type].splice(i, 1) 
return `No one is eating our ${food} - it has been removed from the ${type} menu!`
  }
  }
return `Sorry, we don't sell ${food}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
}