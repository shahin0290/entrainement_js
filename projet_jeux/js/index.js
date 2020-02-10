//BulbOn & BulbOff
function buttonOn() {
    document.getElementById('myImage').src='../images/pic_bulbon.gif';
}

function buttonOff() {
    document.getElementById('myImage').src='../images/pic_bulboff.gif';
}

//Diplay none & block
function displayNone() {
    document.getElementById('demo').style.display='none';
}

function displayBlock() {
    document.getElementById('demo').style.display='block';
}

//Statement 
document.getElementById("demotest").innerHTML = "Hello Dolly.";

//Varable
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demoVariable").innerHTML =
"The total is: " + total;

//Variable2
var carName = "Volvo";
document.getElementById("variables").innerHTML = carName; 

//operator
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("operator").innerHTML = txt1 + " " + txt2;

//operator +=
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("operator1").innerHTML = txt1;

//Object
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old and " + person.eyeColor + " eyes." ;

//Functions
var x = myFunction(4, 3);
var y = myFunction1(4, 3);

document.getElementById("functionTest").innerHTML = x;
document.getElementById("functionTest1").innerHTML = y;

function myFunction(a, b) {
    return a * b;
}

function myFunction1(a, b) {
    return a + b;
}

//function displayDate
function displayDate() {
    document.getElementById("date").innerHTML = Date();
  }

//Slice Methode slice()
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
document.getElementById("slicemethod").innerHTML = res; 

//Upper case function
function UpperCase() {
    var text = document.getElementById("changecase").innerHTML;
    document.getElementById("changecase").innerHTML = text.toUpperCase();
}

//Lower case function
function LowerCase() {
    var text = document.getElementById("changecase").innerHTML;
    document.getElementById("changecase").innerHTML = text.toLowerCase();
}

//Concat method
var text1 = "Hello";
var text2 = "World!";
var text3 = text1.concat(" ",text2);
document.getElementById("concatmethod").innerHTML = text3;

//Split method
function splitbutton() {
    var str = "a,b,c,d,e,f";
    var arr = str.split(",");
    document.getElementById("split").innerHTML = arr[3];
}

//Numbers
var myNumber = 32;
document.getElementById("numbers").innerHTML =
"32 = " + "<br>" + 
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);

//Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array").innerHTML = cars;

//Array elements
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("arrayelements").innerHTML = cars[0];

//Array change element
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("changearray").innerHTML = cars;

//Array Object
var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("arrayobject").innerHTML = person["firstName"] + " " + person["lastName"];

//Array looping with for
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("arraylooping").innerHTML = text;

//Array forEach
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("arrayforeach").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

//Concat 2 arrays 
var myGirls = ["Cecilie ", " Lone"];
var myBoys = [" Emil", " Tobias", " Linus "];
var myChildren = myGirls.concat(myBoys);

document.getElementById("concatarrays").innerHTML = myChildren;

//Concat 3 arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];

var myChildren = arr1.concat(arr2, arr3); 

document.getElementById("concat3arrays").innerHTML = myChildren;

//Sort Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sortarray").innerHTML = fruits;

function sortArrayFunction() {
  fruits.sort();
  document.getElementById("sortarray").innerHTML = fruits;
}

//Reverse Array
// Create and display an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("reversearray").innerHTML = fruits;

function reverseArrayFunction() {
  // First sort the array
  fruits.sort();
  // Then reverse it:
  fruits.reverse();
  document.getElementById("reversearray").innerHTML = fruits;
}

//Ascending order array
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("ascendingonder").innerHTML = points;  

function ascendingOrderFunction() {
  points.sort(function(a, b){
      return a - b
    });
  document.getElementById("ascendingonder").innerHTML = points;
}

//Descending order array
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("descendingorder").innerHTML = points;  

function descendingorderFunction() {
  points.sort(function(a, b){
      return b-a
    });
  document.getElementById("descendingorder").innerHTML = points;
}

//Alphebetically & Numerically
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("sortorder").innerHTML = points;  

function alphabeticallyFunction1() {
  points.sort();
  document.getElementById("sortorder").innerHTML = points;
}
function numericallyFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("sortorder").innerHTML = points;
}

//For each array
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("foreacharray").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}

//Array map
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(arrayMapFunction);

document.getElementById("arraymap").innerHTML = numbers2;

function arrayMapFunction(value, index, array) {
  return value * 2;
}

//getMonth
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("getmonth").innerHTML = months[d.getMonth()];

//Math.Ramdom()
document.getElementById("mathramdom").innerHTML =
Math.floor(Math.random() * 10);

//Comparaison function
function comparaisonFunction() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("comparaison").innerHTML = voteable;
  }