let food = [];
console.log(food);
// Open string of an Array of food

console.log(food.push('rice'));
// Push of rice

console.log(food.push('sausage'));
// Array push of sausage

console.log(food.push('salad', 'porridge', 'spring roll'));
// Arrey push of 3 different values

console.log(food.includes('sausage'));
// include method to check for true or false

const drinks = ['water', 'beer', 'gin', 'juice'];
console.log(drinks);
// Array of drinks

let menu = [`The list of what I brought for the occassions are ${food} and ${drinks}`];
console.log(menu);
// Interpolation of food and drinks

const code = [1.23757, 0.87374,0.64773, 2.79238, 1, 2, 100];
console.log(code);
// Array of code

console.log(code.sort());
// Sort method

console.log(code.shift());
// shift method removes the first value of an Array

console.log(code.unshift(0.76462));
// unshift method add to the first value of an Array

console.log(code.sort());
// Re sorting the new array

console.log(code.push(12.73846, 91.76238));
// push method to add more at the end

console.log(code.length);
// length method to know the length of the value

console.log(code.sort());
// sort new Array to arrange the value

console.log(code.reverse());
// reverse method to sort fromn the back

console.log(code.slice(0, 4));
// slice method to split the values fron a preferred value

console.log(code.pop());
// pop remove the last value of an Array

console.log(code.push(102.2213, 210));

function greeting(){
   alert('Hope you are catching the vibe!');
//   page alert!
};



