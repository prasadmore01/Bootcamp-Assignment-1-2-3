// Objective: Practice adding, removing, and updating values in an array of objects.

// 1. Create an empty array called "cars".

// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018

// 3. Remove the first car object from the "cars" array.

// 4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020

// 5. Update the "model" property of the second car object in the array to "Accord".

// 6. Print the final "cars" array after performing the above operations.

// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.

let cars=[]

cars["make"]="Toyota";
cars["model"]="Camry";
cars["year"]=2018;

delete cars.make;
delete cars.model;
delete cars.year;

cars["make"]="Honda";
cars["model"]="Civic";
cars["year"]=2020;

cars.model="Accord";

console.log(cars);
