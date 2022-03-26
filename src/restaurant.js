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
 
  if (ristorante.menus[food.type].includes(food)) {
    console.log("This item has already been added") 
  } else if (food.type == "lunch") {
  return ristorante.menus.lunch.push(food) 
  } else {
return ristorante.menus.breakfast.push(food)
  }
}

function removeMenuItem (ristorante, food, type) {
  
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
}