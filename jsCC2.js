console.log("Hello world!");

// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(x,y){
    return x - y
}

console.log(min(10,5))

//EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let students = ["Jacky ", "Mendoza", 18, "Elon", " Musk", 50, "Mark", "Zuckerburg", 37];

console.log("Hello, my name is "+ students[3] + students[4] + " and I am " + students[5] + " years old." );

//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let input = prompt ("Enter a number 1 - 12: ");

if (input === "1"){
    console.log("January")
}
else if (input === "2"){
    console.log("February")
}
else if (input === "3"){
    console.log("March")
}
else if (input === "4"){
    console.log("April")
}
else if (input === "5"){
    console.log("May")
}
else if (input === "6"){
    console.log("June")
}
else if (input === "7"){
    console.log("July")
}
else if (input === "8"){
    console.log("August")
}
else if (input === "9"){
    console.log("September")
}
else if (input === "10"){
    console.log("October")
}
else if (input === "11"){
    console.log("November")
}
else if (input === "12"){
    console.log("December")
}
else if (input > "12" ){
    console.log("Enter a vaild number")
}
else if (input < "1"){
    console.log("Enter a vaild number")
}

//there's a better way to do this i just cant figure it out 



// HARD: Given the information below for Tom and Jerry. 

// Tom - height:  9in   mass: 8 g
// Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

//     BMI = mass / height ^2 = mass / (height * height)

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let tomHeight = 9
let tomMass = 8

let jerryHeight = 10 
let jerryMass = 45 

let jerryBMI = jerryMass / (jerryHeight * jerryHeight)
let tomBMI =  tomMass / (tomHeight * tomHeight)

let tomHigherBmi;

if (tomBMI > jerryBMI){
    tomHigherBmi = true;
    console.log("Is Tom's BMI higher than Jerry's? " + tomHigherBmi);
}
else(tomBMI < jerryBMI)
    jerryHigherBmi = true;
    console.log("Is Tom's BMI lower than Jerry's? " + jerryHigherBmi);

