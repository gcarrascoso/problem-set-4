/*
 * Hello. 2 points.
 */

function hello() {

  var p=document.getElementById("output1");
  p.innerHTML="Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  name = prompt('Please enter your name.');
  var p=document.getElementById("output2");
  p.innerHTML="Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var product = ((cels * 9/5) + 32).toFixed(2);
  var p=document.getElementById("output3");
  p.innerHTML=cels + " degrees Celsius equals " + product + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var product1 = ((fahr - 32) * 5/9).toFixed(2);
  var p=document.getElementById("output4");
  p.innerHTML=fahr + " degrees Fahrenheit equals " + product1 + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let mileResults = Math.floor(inches/63360);
  inches = inches%63360;
  let yardResults = Math.floor(inches/36);
  inches = inches%36;
  let feetResults = Math.floor(inches/12);
  inches = inches%12;
  let inchesResults = Math.floor(inches/1);
  inches = inches%1;
  var p=document.getElementById("output5");
  p.innerHTML=`Miles: ${mileResults}</br>Yards: ${yardResults}</br>Feet: ${feetResults}</br>Inches: ${inchesResults}`;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometersResults = Math.floor(centimeters/100000);
  centimeters = centimeters%100000;
  let metersResults = Math.floor(centimeters/100);
  centimeters = centimeters%100;
  let centimetersResults = Math.floor(centimeters/1);
  centimeters = centimeters%1;
  var p=document.getElementById("output6");
  p.innerHTML=`Kilometers: ${kilometersResults}</br>Meters: ${metersResults}</br>Centimeters: ${centimetersResults}`;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallonResults = Math.floor(fluidOunces/128);
  fluidOunces = fluidOunces%128;
  let quartResults = Math.floor(fluidOunces/32);
  fluidOunces = fluidOunces%32;
  let pintResults = Math.floor(fluidOunces/16);
  fluidOunces = fluidOunces%16
  let cupResults = Math.floor(fluidOunces/8);
  fluidOunces = fluidOunces%8;
  let fluidOuncesResults = Math.floor(fluidOunces/1);
  fluidOunces = fluidOunces%1;
  var p=document.getElementById("output7");
  p.innerHTML=`Gallons: ${gallonResults}</br>Quarts: ${quartResults}</br>Pints: ${pintResults}</br>Cups: ${cupResults}</br>Fluid Ounces: ${fluidOuncesResults}`;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tonResults = Math.floor(ounces/128);
  ounces = ounces%128;
  let poundResults = Math.floor(ounces/16);
  ounces = ounces%16;
  let ouncesResults = Math.floor(ounces/1);
  ounces = ounces%1;
  var p=document.getElementById("output8");
  p.innerHTML=`Tons: ${tonResults}</br>Pounds: ${poundResults}</br>Ounces: ${ouncesResults}`;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

let dollarResults = Math.floor(pennies/100);
  pennies = pennies%100;
  let quarterResults = Math.floor(pennies/25);
  pennies = pennies%25;
  let dimeResults = Math.floor(pennies/10);
  pennies = pennies%10;
  let nickelResults = Math.floor(pennies/5);
  pennies = pennies%5;
  let pennyResults = Math.floor(pennies/1);
  pennies = pennies%1;
  var p=document.getElementById("output9");
  p.innerHTML=`Dollars: ${dollarResults}</br>Quarters: ${quarterResults}</br>Dimes: ${dimeResults}</br>Nickels: ${nickelResults}</br>Pennies: ${pennyResults}`;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
