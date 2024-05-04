// - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let squreArray = array.map((value) => {
  return value * value;
});

console.log(squreArray);

// Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

function studentGreadNumber() {
  let studentScore = 80;
  let studentGread;

  studentGread =
    studentScore >= 90
      ? "A"
      : studentScore >= 80
      ? "B"
      : studentScore >= 70
      ? "C"
      : studentScore >= 60
      ? "D"
      : "F";

  return studentGread;
}

console.log(studentGreadNumber());

/// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

let car = {
  companyName: "Toyota",
  model: "Camry",
  year: 2020,
};

function objectChangeYear(obj, changeyear) {
  obj.year = changeyear;
  return obj;
}

objectChangeYear(car, 2023);

const { companyName, model, year } = car;
console.log(companyName);
console.log(model);
console.log(year);

// Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let primeArray = array2.filter((value) => {
  let count = 0;
  for (let i = 1; i <=value; i++) {
    if (value % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return value;
  }
});

console.log(primeArray);






// State different use cases of map, filter and reduce functions

// map function is used to transform the elements of an array.

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let squreArray2 = array3.map((value) => {
  return value * value;
});

console.log(squreArray2);

// filter function is used to filter the elements of an array.

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let primeArray2 = array4.filter((value) => {
  let count = 0;
  for (let i = 1; i <=value; i++) {
    if (value % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return value;
  }
});

console.log(primeArray2);

// reduce function is used to reduce the elements of an array.

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let sumArray = array5.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
},1);

console.log(sumArray);