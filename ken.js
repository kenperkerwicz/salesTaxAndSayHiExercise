//Sales Tax Practice //

//sales tax for each state - we'd normally use an API or have this stored in another file

//sales tax for each state - we'd normally use an API or have this stored in another file


const salesTax = {
  Maryland: 0.05,
  Virginia: 0.04,
  Tennessee: 0.09,
  Pennsylvania: 0.03
}

//items a customer can order at any of the BESTRESAURANT franchises around the nation - we'd normally use an API or have this stored in another file
const bagel = {
  cost: 1.99,
  flavor: "Everything"
}

const donut = {
  cost: 0.99,
  flavor: "Chocolate frosted"
}

const coffee = {
  cost: 0.99,
  size: "Medium"
}

//functions we are going to need to be able to calculate the total cost for each order (orders can be placed at different franchises around the nation)
//this function has all of the parameters it will need to perform it's calculation

const calculateSalesTax = (state, subTotal) => {
  //use bracket notation to access the tax rate for the state the order is placed in
  const stateTaxRate = salesTax[state]

  //use the tax rate to RETURN the calculated tax for the subtotal passed into the function
  return stateTaxRate * subTotal
}

//this function is going to take two parameters
const getOrderCost = (order, state) => {
  //you will need to loop over the items in the order
subTotal = 0
order.forEach(element => {
  subTotal += element.cost
});
const calc = calculateSalesTax(state, subTotal)

return calc + subTotal;
}


const order1769 = [bagel, bagel, coffee, donut]
const order2618 = [bagel, coffee, coffee, donut, donut, coffee]

order1769Cost = getOrderCost(order1769, "Maryland")


// const order2618Cost = 
console.log(order1769Cost);

//complete the functions above to console.log the total cost (including sales tax) for each of the orders 


// const order2618Cost = 




