

//ANSWER KEY //

//functions we are going to need to be able to calculate the total cost for each order (orders can be placed at different franchises around the nation)


// const calculateSalesTax = (state, subTotal) => {
//   const stateTaxRate = salesTax[state]
//   return stateTaxRate * subTotal
// }


// const getOrderCost = (order, state) => {
//   //you can also use the reduce array method
//   let subTotal = 0
//   order.forEach(item => {
//       subTotal += item.cost
//   })


//   const salesTax = calculateSalesTax(state, subTotal)
//   return subTotal + salesTax 
// }


// //ordered in Maryland store
// const order1769 = [bagel, bagel, coffee, donut]
// //ordered in Pennsylvania store
// const order2618 = [bagel, coffee, coffee, donut, donut, coffee]


// const order1769Cost = getOrderCost(order1769, "Maryland")
// const order2618Cost = getOrderCost(order2618, "Pennsylvania")


// console.log(`Total cost for MD order 1769 is $${Math.round(order1769Cost * 100)/100}`)