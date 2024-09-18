// Chapter 9-11 (USER INPUT & CONDITIONAL STATEMENT):-

// Q1
// var city = prompt("Enter Where do you lives?");

// if(city === "karachi"){

//     alert("“Welcome to city of lights”");

// }

// else{

//     alert("You live in " + city);
// }

// Q2
// var gender = prompt("Enter your gender");

// if(gender === "male"){

//     alert("Good Morning Sir.");
// }

// else if(gender === "female"){

//     alert("Good Morning Ma’am.")

// }

// else{

//     alert("Invalid gender ");
// }

// Q3
// var color = prompt("Enter signal color");

// if(color === "red"){

//     alert("Must Stop");
// }

// else if(color === "yellow"){

//     alert("Ready to move");

// }

// else if(color === "green"){

//     alert("Move now");

// }

// else{

//     alert("invalid " + color + " " + "color");
// }

// Q4
// var fuel = prompt("Enter remaining fuel");

// if(fuel <= 0.25){

//     alert("Please refill the fuel in your car");
// }

// else{

//     alert("You have enough fuel");
// }

// Q5 (A)
// var a = 4;

// if (++a === 5){

//     alert("given condition for variable a is true");

// }

// Q5 (B)

// var b = 82;

// if (b++ === 83){

//     alert("given condition for variable b is false");

// }

// Q5 (C)

// var c = 12;

// if (c++ === 13){

// alert("condition 1 is false");

// }
// if (c === 13){

// alert("condition 2 is true");

// }
// if (++c < 14){

// alert("condition 3 is false");

// }
// if(c === 14){

// alert("condition 4 is true");

// }

// Q5 (D)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){

// alert("The cost equals");

// }

// Q5 (E)

// if (true){

//     alert("True");

// }

// if (false){

//     alert("False");

// }

// Q5 (F)

// if("car" < "cat"){

//     alert("car is smaller than cat");
//     console.log("this is true")
// }

// Q6

// var percentage = prompt("Enter your percentage");

// if(percentage >= 80){

//     alert("A-one , Excellent!");
    
// }

// else if(percentage >= 70){

//     alert("A grade , Good!");
    
// }

// else if(percentage >= 60){

//     alert("B grade , You need to improve!");
    
// }

// else{

//     alert("Fail , Sorry!");
    
// }

// Q7

// var number = prompt("Guess the scret number ranging from 1 to 10");

// if(number == 4){

//     alert("Bingo! Correct answer");
// }

// else if(number == 5){

//     alert("“Close enough to the correct answer”");

// }

// else{

//     alert("You are far enough ");

// }

// Q10

// var temperature = prompt("Enter temperature");

// if(temperature >= 40){

//     alert("“It is too hot outside.”");

// }

// else if(temperature >= 30){

//     alert("“The Weather today is Normal.”");

// }

// else if(temperature >= 20){

//     alert("“Today’s Weather is cool.”");

// }

// else if(temperature >= 10){

//     alert("“OMG! Today’s weather is so Cool.”");

// }

// else{

//     alert("invalid temperature");

// }

// Chapter 12-13 (IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS):-

// Q1

// var userInput = prompt("Enter a single character:")


// if (userInput >= '0' && userInput <= '9') {

//     alert ("The character is a number.");

// }

// else if (userInput >= 'A' && userInput <= 'Z') {

//     alert("The character is an uppercase letter.");

// }

// else if (userInput >= 'a' && userInput <= 'z') {

//     alert("The character is an lowercase letter.");

// }

// else{

//      alert(`${userInput} is neither a number nor a letter.`);
// }

// Q2

// var num1 = +prompt("Enter the first integer:");

// var num2 = +prompt("Enter the second integer:");

// if (isNaN(num1) || isNaN(num2)) {

//     alert("Please enter valid integers.");

// }

//  else if (num1 > num2) {

//     alert(`${num1} is larger than ${num2}.`);

// }

// else if (num2 > num1) {

//     alert(`${num2} is larger than ${num1}.`);

// } 
//     else {

//     alert(`Both numbers are equal.`);

// }

// Q3

// var input = prompt("Please enter a number:");

    
// if (input > 0) {

//     alert("The number is positive.");

// }

// else if (input < 0) {

//     alert("The number is negative.");

// }

// else {

//     alert("The number is zero.");

// }

// Q4

// function isVowel(char) {

//     // Convert the character to lowercase
//     char = char.toLowerCase(isVowel);

//     // Check if the character is a vowel
//     return 'aeiou'.includes(char);

// }


// var userInput = prompt("Enter a single character:");


// if (userInput.length === 1 ) {

   
//     alert(isVowel(userInput) , "The character is a vowel." , "The character is not a vowel.");

// }

// else {

//     alert("Please enter a single character.");

// }

// Q5

// var correctPassword = "myClass123";

// var userPassword = prompt("Please enter your password:");

// if (!userPassword) {

//   alert("Please enter your password.");

// } 

// else if (userPassword === correctPassword) {

//   alert("Correct! The password you entered matches the original password.");

// }

// else {

//   alert("Incorrect password.");

// }

// Q6

// var greeting;
// var hour = 13;

// if (hour < 18) {

//     greeting = "Good day";

// } 

// else {

//     greeting = "Good evening";

// }

// console.log(greeting);

// Q7

// var time = +prompt("Enter the time in 24-hour format (e.g., 1900 ");

// if (time >= 0 && time < 1200) {

//     alert("Good morning!");

// }

// else if (time >= 1200 && time < 1700) {

//     alert("Good afternoon!");

// }

// else if (time >= 1700 && time < 2100) {

//     alert("Good evening!");

// }

// else if (time >= 2100 && time <= 2359) {

//     alert("Good night!");

// }

// else {

//     alert("Invalid time entered. Please enter a valid time between 0000 and 2359.");
// }

// Chapter 10 (if statements):-

// Q1

// var city = "karachi"

// if(city === "karachi"){

//     console.log("The City OF Lights");

// }

// Q2

// if (x === y) {

//     var z = prompt("Please enter the value of z:");

//     console.log("the value of z is " + z);

// }

// Q3

// var city = prompt("Enter your city ZIP code");

// if(city == 10010){

//     alert("karachi");

// }

// else{

//     alert("Please write correct city");

// }

// Q4

// var x = 1;

// if (x === 1) {

//   x = 5;

// }

// console.log(x);

// Chapter 11 (Comparison Operators):-

// Q1

// if(x !== y){

    // code to execute if x is not equal to y

// }

// Q2

// if (x >= y) {

//     // Code to execute if x is greater than or equal to y

// }

// Q3

// var myVariable = 10;

// var specificNumber = 20; 

// if (myVariable !== specificNumber) {

//     myVariable = 30; 

// }

// console.log(myVariable);

// Q4

// var number1 = 10; 
// var number2 = 20; 

// if (number1 !== number2) {

//     alert("Congratulations! The numbers are unequal.");

// }

// Q5

// var enteredName = prompt("Please enter your first name:");

// var otherName = "Taha"; 

// if (enteredName !== otherName) {

//     alert("No match");

// }

// Chapter 12 (if…else and else if statements):-

// Q1

// var value1 = 60; 
// var value2 = 30; 

// if (value1 >= value2) {

//     alert("Value1 is greater than or equal to Value2");

// }
//  else {

//     alert("Value1 is less than Value2");

// }

// Q2

// var totalMarks = +prompt("Enter total marks:");
// var obtainedMarks = +prompt("Enter obtained marks:");

// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade;

// if (percentage >= 80) {

//     grade = "A+";
// } 

// else if (percentage >= 70) {

//     grade = "A";
// } 

// else if (percentage >= 60) {

//     grade = "B";

// }

//  else if (percentage >= 50) {

//     grade = "C";

// } 

// else {

//     grade = "F";

// }

// alert("Your percentage is: " + percentage + "%\nYour grade is: " + grade);

// Q3

// var a = 15

// if (a === 10) {

//     alert("a is 10");
// }

// else {

//     alert("The correct value of a is " + a);

// }

// Q4

// var city = prompt("Please enter a city:");

// if (city === "karachi") {

//     alert("It is Karachi.");

// } 

// else if (city === "lahore") {

//     alert("It is Lahore.");
// } 

// else {

//     alert("This city is neither Karachi nor Lahore.");

// }

// Chapter 13 (Testing sets of conditions):-

// Q1

// if (a === b) {

//     if (c === d) {

//         // Code to execute if both conditions are true

//     }
// }

// Q2

// if (a === b) {

//     // Code to execute if a is equal to b
// }

// else if (c !== d) {

//     // Code to execute if c is not equal to d

// }

// Q3

// if(name === hamza){

//     if (age < 60) {

//         // Code to execute if name is "Hamza" and age is less than 60

//     }
// }

// if (name === "Arsalan") {

//     if (age < 60) {

//         // Code to execute if name is "Arsalan" and age is less than 60

//     }
// }

// Q4

// var num1 = 80 
// var num2 = 30

// if (num1 < num2) {

//     alert("num1 is less than num2.");

// } 

// if (num1 > num2) {

//     alert("num1 is greater than num2.");

// }

// Q5

// var firstName = "Ali"
// var lastName = "Khan"

// var inputFirstName = prompt("Enter your fistname ");
// var inputLastName = prompt("Enter your lastname ");

// if(inputFirstName === "Ali"){

//     if(inputLastName === "Khan"){

//         alert("Your names match!");

//     }
// }

// else{

//     alert("your name not match!");

// }

// Chapter 14 (If statements nested):-

// Q1

// var password = prompt("Enter your password");

// if(password !== ""){
    
//     if(password.length <= 5){

//         alert("Password must be greater than 5 Words");
//     }

// else{

//     alert("OK");
    
//     }
// }

// Q2

var a = +prompt("Enter a value for a:"); 
var c = prompt("Enter a value for c:"); 

if (a === 1) { 

    if (c === "Max") { 

        alert("OK"); 

    }
}























