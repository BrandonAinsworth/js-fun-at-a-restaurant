function takeOrder (order, deliveryOrders){
  if (deliveryOrders.length >= 3){
    console.log("Our staff cannot accomodate this load!");
  } else {
  return deliveryOrders.push(order);
}
}

function refundOrder (num, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++)
    if (deliveryOrders[i].orderNumber == num){
       deliveryOrders.splice(i,1);
    } else {
      "This order does not exist"; 
    }
    
    }



function listItems(deliveryOrders) {
  var result = "";
for (var i = 0; i < deliveryOrders.length; i++){
  if (i < deliveryOrders.length - 1){
   result = result + deliveryOrders[i].item + ", "
  } else {
    result = result + deliveryOrders[i].item
  } 
}
console.log(deliveryOrders.length)
return result;
}

// function searchOrder (deliveryOrders, str){
//  for (var i = 0; i < deliveryOrders.length; i++){
//    deliveryOrders.map()
//  }
// }

function searchOrder(deliveryOrders,item){

items = deliveryOrders.map(value => value.item)

return items.includes(item)
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
} 