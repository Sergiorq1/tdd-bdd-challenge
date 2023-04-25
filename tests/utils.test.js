const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return area", function(){
  const area = utils.area(5,3)
  expect(area).to.equal(15)
})

it("should return parameter", function(){
  const perimeter = utils.perimeter(5,3)
  expect(perimeter).to.equal(16)
})

it("should return circle area", function(){
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.equal(78.53981633974483)
  expect()
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function(){
  const getShoppingCart = utils.getShoppingCart()
  expect(getShoppingCart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function(){
  const item = { name: "organic apple 3lb", price: 5.99, quantity: 1 }
  utils.addItemToCart(item)
  const updatedCart = utils.getShoppingCart()
  expect(updatedCart).to.deep.include(item)
})

it("Should return the number of items in the cart", function(){
  // get the current shopping cart, should be empty
  const cart = utils.getShoppingCart()
  // get number of numItems, this is what we're testing for
  const numItems = utils.getNumItemsInCart()
  // check if returns a number
  expect(numItems).to.be.a("number")
  // check if the number of items in numItems is equal to total number of items from cart
  expect(numItems).to.equal(cart.reduce((total, item) => total + item.quantity, 0))
})

it("Should remove items from cart", function(){
  // add an item to empty cart
  const item = { name: "apple", price: 0.99, quantity: 1 }
  utils.addItemToCart(item)
  // remove item
  utils.removeItemFromCart(item)
  // updated cart
  const updatedCart = utils.getShoppingCart()
  // check if updated cart does not include item added earlier
  expect(updatedCart).to.not.deep.include(item)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function(){
  const item = { name: "apple", price: 0.99, quantity: 1 }
  const initalCart = utils.getShoppingCart()
  const initialLength = initalCart.length
  utils.addItemToCart(item)
  const updatedCart = utils.getShoppingCart()
  expect(updatedCart.length).to.be.greaterThan(initialLength)
})

it("Should validate that an empty cart has 0 items", function(){
  const cart = utils.getShoppingCart()
  expect(cart.length).to.be.equal(0)
})

it("Should return the total cost of all items in the cart")
