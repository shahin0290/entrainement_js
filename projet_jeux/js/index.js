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