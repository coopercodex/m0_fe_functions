// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("Hello");
};

printGreeting();
printGreeting();
printGreeting();
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function longGoodbye(message) {
  console.log(`Well i guess this is it! ${message}`);
};

longGoodbye('dasvidanya!');
// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function salaries(string,number1, number2) {
  var min = number1;
  var max = number2;
  var payRange = number2 - number1;

  console.log(`The pay range for this job at ${string} is ${payRange}`)
}

salaries('Doco', 70000, 100000);
// 4: Write a function that satifies the following interaction pattern:
function checkStock(number, string) {
  if (number >= 4) {
    console.log(`${string} is stocked`)
  } else if (number < 4 && number >= 1) {
    console.log(`${string} - running LOW`)
  } else {
    console.log(`${string} - OUT of stock!`)
  }
};
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
