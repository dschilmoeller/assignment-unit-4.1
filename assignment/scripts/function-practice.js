console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name + '!'
}
// Remember to call the function to test
console.log('Test helloName:', helloName("David") );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer
}
console.log('The sum of 4 and 6 is ', addNumbers(4,6) );


// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ) {
  let answer = (num0 * num1) * num2
  return answer;
}
console.log('The product of 3, 4, and 5 is', multiplyThree(3,4,5) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  } // end else
} // end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array.length == 0 ) {
    return 'undefined'
  } else {
    return array[array.length-1]
  }
}
console.log( 'getLast should be 3:', getLast(numbers = [1,2,3]));
console.log( 'getLast should be undefined:', getLast(numbers = []));
console.log( 'getLast should be Steven:', getLast(names = ['Dave', 'Luke','Nick','Jeff','Steven']));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

// I feel like this should work but it is not. Suspect the issue is the return true/false is 'down' or 'in' one level from where it should be. 
// After running additional tests, it works on an array of names but not on numbers. Is the issue in the function inputs?
// further testing - it works when the item is the first in the array. 
function find( value, array ) {
    for ( number of array ) {
      if ( number === value ) {
        return true;
      } else {
        return false;
      }
    }
} // end find function 
console.log('function Find should return true', find(3, nums = [1,2,3]));
console.log('function Find should return false', find(3, nums = [1,2,4]));
console.log('function find should return true', find('Nick', names = ['Dave', 'Luke','Nick','Jeff','Steven']))
console.log('function Find should return false', find('John', names = ['Dave', 'Luke','Nick','Jeff','Steven']));
console.log('function Find should return true', find(1, nums = [1,2,3,4,5,6]));
console.log('function Find should return false', find(3, nums = [1,2,4]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
