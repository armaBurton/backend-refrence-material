// const cheesePizza = {
//   crust: 'Hand Tossed',
//   sauce: 'Robust Tomato',
//   toppings: ['Cheese'],
// };

// const pepperoniPizza = {
//   crust: 'Hand Tossed',
//   sauce: 'Robust Tomato',
//   toppings: ['Cheese', 'Pepperoni'],
// };

// const buffaloChickenPizza = {
//   crust: 'Hand Tossed',
//   sauce: 'Buffalo Ranch',
//   toppings: ['Cheese', 'Chicken', 'Onions', 'Bacon'],
// };

// const mushroomPizza = {
//   crust: 'Thin Crust',
//   sauce: 'Olive Oil',
//   toppings: ['Cheese', 'Mushrooms', 'Spinach', 'Olives'],
// };

// const meatLovers = {
//   crust: 'Pan Pizza',
//   saorce: 'Marinara',
//   toppings: 'Cheese, Sausage, Bacon, Ham, Pepperoni',
// };

// function getPizzaType(pizza) {
//   return `
//     Crust: ${pizza.crust}
//     Sauce: ${pizza.sauce}
//     Toppings: ${pizza.toppings.join(', ')}
//   `;
// }

// getPizzaType(meatLovers); // this won't show us the correct sauce

class Food {
  vegetarian;

  constructor(vegetarian = 'Unknown') {
    this.vegetarian = vegetarian;
  }

  getType() {
    return 'Food';
  }
}

class Pizza extends Food {
  crust;
  sauce;
  toppings;

  constructor({
    crust = 'Hand Tossed',
    sauce = 'Robust Tomato',
    toppings = ['Cheese'],
    vegetarian,
  }) {
    super(vegetarian);
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }

  getDetails() {
    return `
      Crust: ${this.crust}
      Sauce: ${this.sauce}
      Toppings: ${this.toppings.join(', ')}
      ${this.vegetarian ? 'Vegetarian' : 'Not Vegetarian'}
    `;
  }

  static getAvailableToppings() {
    return [
      'Cheese',
      'Pepperoni',
      'Pineapple',
      'Jalapeño',
      'Olives',
      'Mushrooms',
    ];
  }

  static getAvailableSauces() {
    return ['Robust Tomato', 'Creamy Alfredo', 'Olive Oil', 'Buffalo Ranch'];
  }
}

// Here, we're creating a Pizza object without passing any options
// ie. the default pizza (cheese)
const plainCheese = new Pizza({});
console.log(plainCheese.vegetarian);

// console.log('=========================');

// // Here, we're calling our getDetails method, which
// // isn't defined using the `static` keyword
// console.log(`plainCheese.getDetails()`);
// console.log(plainCheese.getDetails());
// // This means we can only call this method if we
// // have an instance on which to call it

// console.log('=========================');

// // const obj = { name: { firstName: 'Dan' } };

// // obj.name.firstName; // Dan
// // obj.attributes.name.lastName; // Error: Cannot read properties of undefined
// // obj.attributes?.name?.lastName; // null (no error thrown)

// // if (
// //   obj &&
// //   obj.attributes &&
// //   obj.attributes.name &&
// //   obj.attributes.name.lastName
// // )
// // What happens if we try to call getDetails
// // on the class itself?
// console.log('Pizza.getDetails()\n');
// console.log(Pizza.getDetails?.()); // removing the ?. will make it crash
// // To JavaScript, when we're using a class name (Pizza) and calling a
// // method on it (getDetails), it's going to see if the Pizza class has
// // any static methods (functions defined in the class) that have that name.

// console.log('=========================');

// // Here's how we can call a static method on a class:
// console.log('Pizza.getAvailableSauces()\n');
// console.log(Pizza.getAvailableSauces());

// console.log('=========================');

// // But note what happens when we try to call that same method
// // on an instance of that class:
// console.log('plainCheese.getAvailableSauces()\n');
// console.log(plainCheese.getAvailableSauces?.());
// // To JavaScript, the method doesn't exist because we defined it
// // using the static keyword; that means that JavaScript won't "see" that method
// // when it looks at the object's properties

// console.log('=========================');
