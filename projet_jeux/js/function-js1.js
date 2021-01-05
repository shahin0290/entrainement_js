//1- BulbOn & BulbOff
function buttonOn() {
    document.getElementById('myImage').src='../images/pic_bulbon.gif';
}

function buttonOff() {
    document.getElementById('myImage').src='../images/pic_bulboff.gif';
}

function buttonOn1() {
  document.getElementById('myImage1').src='../../images/pic_bulbon.gif';
}

function buttonOff1() {
  document.getElementById('myImage1').src='../../images/pic_bulboff.gif';
}

//2- Diplay none & block
function displayNone() {
    document.getElementById('demo').style.display='none';
}

function displayBlock() {
    document.getElementById('demo').style.display='block';
}

//3- Statement 
document.getElementById("demotest").innerHTML = "Hello Dolly.";

//4- Varable
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demoVariable").innerHTML = "The total is: " + total;

//5- Variable2
var carName = "Volvo";
document.getElementById("variables").innerHTML = carName; 

//6- operator
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("operator").innerHTML = txt1 + " " + txt2;

//7- operator +=
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("operator1").innerHTML = txt1;

//8- Object
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old and " + person.eyeColor + " eyes." ;

//9- Functions
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

//10- Function displayDate
function displayDate() {
    document.getElementById("date").innerHTML = Date();
  }